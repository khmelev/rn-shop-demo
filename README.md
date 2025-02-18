# Modern Brownfield Reference setup

This repo showcases reference implementation of Callstack's modern brownfield approach using XCFramework/AAR integration of React Native into existing iOS and Android apps. 

## Setup

- The `main` branch contains RN new architecture enabled setup.
- The `old-arch` branch contains RN old architecture setup. 

## Adding new third party package support

1. Start with RN old architecture setup (`old-arch` branch)
2. Move to new architecture setup (`main` branch)

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
3. Build the app
```sh
pnpm build
```
or 
```sh
pnpm build:release
```

`ReactBrownfield.xcframework` will be generated in `ios` directory

## Android

1. [TEMPORARY] In you `android/local.properties` file, add your GitHub credentials:
```
github_username=your_github_username
github_token=your_github_token
```
2. Run `pnpm brownfield:android` to build the AAR file.
3. In the NativeHost (`test-apps/android`), perform Gradle Sync to use the latest AAR file.
4. Run the app from Android Studio.
5. If you build the Debug variant, run `pnpm start` to start the Metro bundler.

