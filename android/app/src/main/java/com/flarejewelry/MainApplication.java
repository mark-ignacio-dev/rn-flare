package com.flarejewelry;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.rt2zz.reactnativecontacts.ReactNativeContacts;
import com.surajit.rnrg.RNRadialGradientPackage;
import com.ocetnik.timer.BackgroundTimerPackage;
import com.BV.LinearGradient.LinearGradientPackage;
import com.reactnative.photoview.PhotoViewPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.AlexanderZaytsev.RNI18n.RNI18nPackage;
import com.mackentoch.beaconsandroid.BeaconsAndroidPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new ReactNativeContacts(),
            new RNRadialGradientPackage(),
            new BackgroundTimerPackage(),
            new LinearGradientPackage(),
            new PhotoViewPackage(),
            new VectorIconsPackage(),
            new RNI18nPackage(),
            new BeaconsAndroidPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}