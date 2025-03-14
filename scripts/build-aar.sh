#! /bin/bash

# Exit immediately if any command returns a non-zero status
set -e

trap 'echo "Build interrupted"; exit 1' INT

pushd android
./gradlew clean
./gradlew react-brownfield:bundleReleaseAar
./gradlew react-brownfield:bundleDebugAar

echo -e "✅ AARs built successfully: \n android/react-brownfield/build/outputs/aar/react-brownfield-debug.arr \n android/react-brownfield/build/outputs/aar/react-brownfield-release.arr"

 ./gradlew publishToMavenLocal

echo "✅ AARs published to mavenLocal: com.callstack.react:react-brownfield"
