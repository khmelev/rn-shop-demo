package com.callstack.nativehost

import android.os.Bundle
import android.view.LayoutInflater
import android.view.ViewGroup
import android.widget.FrameLayout
import androidx.fragment.app.Fragment
import com.callstack.react.ReactNativeBrownfield

class ReactNativeFragment : Fragment() {
    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?,
    ): FrameLayout {

        return ReactNativeBrownfield.shared.createView(
            activity = requireActivity(),
            moduleName = "main"
        )
    }
}
