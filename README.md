# Modern Brownfield Reference setup

This repo showcases reference implementation of Callstack's modern brownfield approach using XCFramework/AAR integration of React Native into existing iOS and Android apps. 

## Setup

- The `main` branch contains RN new architecture enabled setup.
- The `old-arch` branch contains RN old architecture setup. 

## Adding new third party package support

1. Start with RN old architecture setup (`old-arch` branch)
2. Move to new architecture setup (`main` branch)

## Supported things

| Feature           | iOS     | Android |
| ----------------- | ------- | ------- |
| React Native      | 0.78    | 0.78    |
| React Native arch | new+old | new+old |

## Building

### iOS Framework

Follow these steps to build the app as `.xcframework`:

1. Install dependencies 
```sh
pnpm install
```
2. Install pods
```sh
pnpm pods
```
3. Build the app as framework
```sh
pnpm brownfield:ios
```
or 
```sh
pnpm brownfield:ios:release
```

`ReactBrownfield.xcframework` will be generated in `ios` directory

## Android

1. Run `pnpm brownfield:android` to build the AAR file.
2. In the NativeHost (`test-apps/android`), perform Gradle Sync to use the latest AAR file.
3. Run the app from Android Studio.
4. If you build the Debug variant, run `pnpm start` to start the Metro bundler.

