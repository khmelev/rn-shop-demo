package com.callstack.nativehost

import android.os.Bundle
import android.util.Log
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import com.callstack.react.ReactDelegateWrapper
import com.callstack.react.ReactNativeBrownfield
import com.facebook.react.ReactFragment
import com.facebook.react.ReactHost

class ReactNativeFragment : ReactFragment() {

    companion object {
        const val MODULE_NAME = "main"
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        try {
            super.onCreate(savedInstanceState)
        } catch (e: IllegalStateException) {
            Log.w(
                "ReactNativeFragment",
                "ReactFragment threw due to missing arg_component_name: ${e.message} - This is an expected behaviour."
            )
        }

        this.reactDelegate = ReactDelegateWrapper(
            activity,
            this.reactHost,
            MODULE_NAME,
            arguments
        )
    }

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View {
        return ReactNativeBrownfield.shared.createView(
            activity,
            MODULE_NAME,
            this.reactDelegate as ReactDelegateWrapper
        )
    }

    override val reactHost: ReactHost
        get() = ReactNativeBrownfield.shared.reactHost
}
