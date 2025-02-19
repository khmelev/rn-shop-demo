internal import React
internal import React_RCTAppDelegate
internal import ReactAppDependencyProvider

import UIKit

public class ReactBrownfieldRootViewManager {
    public static let shared = ReactBrownfieldRootViewManager()
    var reactNativeFactory: RCTReactNativeFactory?
    var reactNativeDelegate: RCTReactNativeFactoryDelegate?
  
    private init() {
      reactNativeDelegate = ReactNativeDelegate()
      reactNativeDelegate?.dependencyProvider = RCTAppDependencyProvider()
      reactNativeFactory = RCTReactNativeFactory(delegate: reactNativeDelegate!)
    }

    /// Loads a React Native view with the given module name.
    ///
    /// React components are registered as modules by using the [AppRegistry](https://reactnative.dev/docs/appregistry) API.
    /// - Parameter moduleName: Name used while registering the React Component with the `AppRegistry` API.
    /// - Parameter initialProps: Props that are going to be passed to the React Component.
    /// - Parameter launchOptions: The options app was launched with. This is usually obtained from the app delagate. This is mainly used for deep linking.
    @objc public func loadView(
        moduleName: String, initialProps: [AnyHashable: Any]?,
        launchOptions: [AnyHashable: Any]?
    ) -> UIView {
        reactNativeFactory!.rootViewFactory.view(
            withModuleName: moduleName, initialProperties: initialProps,
            launchOptions: launchOptions
        )
    }
}

class ReactNativeDelegate: RCTDefaultReactNativeFactoryDelegate {
    override func sourceURL(for bridge: RCTBridge) -> URL? {
      return self.bundleURL()
    }

    override func bundleURL() -> URL? {
        #if DEBUG
            RCTBundleURLProvider.sharedSettings().jsBundleURL(forBundleRoot: "index")
        #else
            Bundle(for: Self.self).url(forResource: "main", withExtension: "jsbundle")
        #endif
    }
}
