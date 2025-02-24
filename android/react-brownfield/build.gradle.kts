plugins {
    id("com.android.library")
    id("org.jetbrains.kotlin.android")
    id("com.facebook.react")
    id("org.bigfataar.plugin")
    `maven-publish`
}

repositories {
    mavenCentral()
}

val appProject = project(":app")
val appBuildDir: Directory = appProject.layout.buildDirectory.get()
val moduleBuildDir: Directory = layout.buildDirectory.get()
val autolinkingJavaSources = "generated/autolinking/src/main/java"

android {
    namespace = "com.callstack.react"
    compileSdk = 34

    defaultConfig {
        minSdk = 24

        buildConfigField("boolean", "IS_NEW_ARCHITECTURE_ENABLED", properties["newArchEnabled"].toString())
        buildConfigField("boolean", "IS_HERMES_ENABLED", properties["hermesEnabled"].toString())
    }

    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }

    kotlinOptions {
        jvmTarget = "17"
    }

    sourceSets {
        getByName("main") {
            assets.srcDirs("$appBuildDir/generated/assets/createBundleReleaseJsAndAssets")
            res.srcDirs("$appBuildDir/generated/res/createBundleReleaseJsAndAssets")
            java.srcDirs("$moduleBuildDir/$autolinkingJavaSources")
            jniLibs.srcDirs("libs")
        }
    }
}

fun getBuildType() =
    when(System.getenv("BUILD_TYPE")) {
        "Release" -> "release"
        else -> "debug"
    }

publishing {
    publications {
        create<MavenPublication>("react-brownfield") {
            groupId = "com.callstack.react"
            artifactId = "react-brownfield"
            version = "0.0.1-local"
            artifact("$moduleBuildDir/outputs/aar/react-brownfield-${getBuildType()}.aar")

            pom {
                withXml {
                    asNode().appendNode("dependencies").apply {
                        configurations.getByName("api").allDependencies.forEach { dependency ->
                            appendNode("dependency").apply {
                                appendNode("groupId", dependency.group)
                                appendNode("artifactId", dependency.name)
                                appendNode("version", dependency.version)
                                appendNode("scope", "compile")
                            }
                        }
                    }
                }
            }
        }
    }

    repositories {
        mavenLocal() // Publishes to the local Maven repository (~/.m2/repository)
    }
}

dependencies {
    api("com.facebook.react:react-android:0.78.0")
    api("com.facebook.react:hermes-android:0.78.0")
}

tasks.register<Copy>("copyAutolinkingSources") {
    dependsOn(":app:generateAutolinkingPackageList")
    from("$appBuildDir/$autolinkingJavaSources")
    into("$moduleBuildDir/$autolinkingJavaSources")
}

tasks.register<Copy>("copyLibSources") {
    dependsOn(":app:generateCodegenSchemaFromJavaScript")
    dependsOn(":app:stripReleaseDebugSymbols")
    dependsOn(":react-brownfield:generateCodegenSchemaFromJavaScript")
    
    from("${appBuildDir}/intermediates/stripped_native_libs/release/stripReleaseDebugSymbols/out/lib")
    into("${rootProject.projectDir}/react-brownfield/libs")

    // Copy codegen SO lib files.
    include("**/libappmodules.so", "**/libreact_codegen_*.so")
}

tasks.named("preBuild").configure{
    dependsOn("copyAutolinkingSources")
    dependsOn("copyLibSources")
    
    val buildType = when {
        gradle.startParameter.taskNames.any { it.contains("Release", ignoreCase = true) } -> "Release"
        else -> "Debug"
    }
    if (buildType == "Release") {
        dependsOn(":app:createBundleReleaseJsAndAssets")
    }
}
