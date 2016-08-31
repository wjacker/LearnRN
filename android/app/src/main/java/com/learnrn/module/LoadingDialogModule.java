package com.learnrn.module;

import android.app.Dialog;
import android.text.TextUtils;
import android.widget.TextView;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.learnrn.R;

/**
 * Created by PF-07GLA9 on 2016/8/31.
 */
public class LoadingDialogModule extends ReactContextBaseJavaModule {

    private Dialog mDialog;

    public LoadingDialogModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "LoadingDialogAndroid";
    }

    @ReactMethod
    public void showLoadingDialog(String content){
        dismissLoadingDialog();
        mDialog=new Dialog(getCurrentActivity(), R.style.transparent_dialog);
        mDialog.setContentView(R.layout.dialog_loading);
        if (!TextUtils.isEmpty(content)){
            ((TextView)mDialog.findViewById(R.id.tv_content)).setText(content);
        }
        mDialog.show();
    }

    @ReactMethod
    public void dismissLoadingDialog(){
        if (mDialog!=null && mDialog.isShowing()){
            mDialog.dismiss();
        }
    }
}
