package com.callstack.nativehost

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment
import com.callstack.react.RNViewFactory

class ReactNativeFragment : Fragment() {
    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?,
    ): View? =
        this.context?.let {
            RNViewFactory.createFrameLayout(it)
        }
}
