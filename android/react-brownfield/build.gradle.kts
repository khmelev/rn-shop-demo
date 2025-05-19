import groovy.json.JsonOutput
import groovy.json.JsonSlurper

plugins {
    id("com.android.library")
    id("org.jetbrains.kotlin.android")
    id("com.facebook.react")
    id("com.callstack.react.brownfield")
    `maven-publish`
}

repositories {
    mavenCentral()
}

val moduleBuildDir: Directory = layout.buildDirectory.get()
val hermesEnabled = project.hasProperty("hermesEnabled") && project.property("hermesEnabled") == "true"

android {
    namespace = "com.callstack.react"
    compileSdk = 34

    if (!hermesEnabled) {
        packaging {
            jniLibs {
                excludes += "lib/x86/libjsctooling.so"
                excludes += "lib/x86_64/libjsctooling.so"
                excludes += "lib/armeabi-v7a/libjsctooling.so"
                excludes += "lib/arm64-v8a/libjsctooling.so"
            }
        }
    }

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

    publishing {
        multipleVariants {
            allVariants()
        }
    }
}

react {
    autolinkLibrariesWithApp()
}


publishing {
    publications {
        create<MavenPublication>("react-brownfield") {
            groupId = "com.callstack.react"
            artifactId = "react-brownfield"
            version = "0.0.1-local"
            afterEvaluate {
                from(components.getByName("default"))
            }

            pom {
                withXml {
                    //removing RN dependencies like e.g. react-native-svg 
                    //added by "from(components.getByName("default"))" to pom file
                    val dependenciesNode = (asNode().get("dependencies") as groovy.util.NodeList).first() as groovy.util.Node
                    dependenciesNode.children()
                        .filterIsInstance<groovy.util.Node>()
                        .filter { (it.get("groupId") as groovy.util.NodeList).text() == rootProject.name }
                        .forEach { dependenciesNode.remove(it) }
                }
            }
        }
    }

    repositories {
        mavenLocal() // Publishes to the local Maven repository (~/.m2/repository)
    }
}

dependencies {
    api("com.facebook.react:react-android:0.79.2")
    if (hermesEnabled) {
        api("com.facebook.react:hermes-android:0.79.2")
    } else {
        api("io.github.react-native-community:jsc-android:2026004.0.1")
    }
}

//removing RN dependencies like e.g. react-native-svg 
//added by "from(components.getByName("default"))" to "module" file
tasks.register("removeDependenciesFromModuleFile") {
    doLast {
        file("$moduleBuildDir/publications/react-brownfield/module.json").run {
            val json = inputStream().use { JsonSlurper().parse(it) as Map<String, Any> }
            (json["variants"] as? List<MutableMap<String, Any>>)?.forEach { variant ->
                (variant["dependencies"] as? MutableList<Map<String, Any>>)?.removeAll { it["group"] == rootProject.name }
            }
            writer().use { it.write(JsonOutput.prettyPrint(JsonOutput.toJson(json))) }
        }
    }
}

tasks.named("generateMetadataFileForReact-brownfieldPublication") {
   finalizedBy("removeDependenciesFromModuleFile")
}
