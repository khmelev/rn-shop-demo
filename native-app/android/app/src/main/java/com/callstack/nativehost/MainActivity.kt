package com.callstack.nativehost

import android.os.Bundle
import com.google.android.material.bottomnavigation.BottomNavigationView
import androidx.appcompat.app.AppCompatActivity
import androidx.navigation.findNavController
import androidx.navigation.ui.setupWithNavController
import com.callstack.nativehost.databinding.ActivityMainBinding
import com.callstack.react.RNBridgeManager
import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler

class MainActivity : AppCompatActivity(), DefaultHardwareBackBtnHandler {

    private lateinit var binding: ActivityMainBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        RNBridgeManager.shared.initializeReactApp(this.application)

        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)

        val navView: BottomNavigationView = binding.navView

        val navController = findNavController(R.id.nav_host_fragment_activity_main)
        navView.setupWithNavController(navController)
    }

    override fun invokeDefaultOnBackPressed() {
        onBackPressedDispatcher.onBackPressed()
    }
}
