package com.callstack.nativehost

import com.facebook.react.bridge.ReactApplicationContext
import com.rnshop.NativeShopSpec

class NativeShop(reactContext: ReactApplicationContext) : NativeShopSpec(reactContext) {

    companion object {
        const val NAME = "NativeShop"
    }

    override fun getItem(p0: String?): String {
        return "Hello from Native App!!!"
    }
}