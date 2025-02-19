#! /bin/bash

# Exit immediately if any command returns a non-zero status
set -e

for arg in "$@"; do
  case $arg in
    --release)
      BUILD_TYPE="Release"
      shift
      ;;
  esac
done


BUILD_TYPE=${BUILD_TYPE:-Debug}
BUILD_TYPE_LOWERCASE=$(echo "$BUILD_TYPE" | tr '[:upper:]' '[:lower:]')

trap 'echo "Build interrupted"; exit 1' INT

pushd android
./gradlew clean
./gradlew react-brownfield:bundle${BUILD_TYPE}Aar

echo "✅ AAR built successfully: android/react-brownfield/build/outputs/aar/react-brownfield-${BUILD_TYPE_LOWERCASE}.aar"

BUILD_TYPE=${BUILD_TYPE} ./gradlew publishToMavenLocal

echo "✅ AAR published $BUILD_TYPE to mavenLocal: com.callstack.react:react-brownfield"
