package com.callstack.nativehost

import com.facebook.react.BaseReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.model.ReactModuleInfo
import com.facebook.react.module.model.ReactModuleInfoProvider

class NativeShopPackage : BaseReactPackage() {

    override fun getModule(
        name: String,
        reactContext: ReactApplicationContext
    ): NativeModule? {
        return when(name) {
            NativeShop.NAME -> NativeShop(reactContext)
            else -> null
        }
    }

    override fun getReactModuleInfoProvider(): ReactModuleInfoProvider = ReactModuleInfoProvider {
        mapOf(
            NativeShop.NAME to ReactModuleInfo(
                name = NativeShop.NAME,
                className = NativeShop.NAME,
                canOverrideExistingModule = false,
                needsEagerInit = false,
                hasConstants = false,
                isCxxModule = false,
                isTurboModule = true
            )
        )
    }
}