import React from 'react';

import {
    ToastAndroid,
    NativeModules,
    Platform
 } from 'react-native';

var ToastIOS = NativeModules.ToastIOS;
const Toast = ({
    show(message) {
    	if(Platform.OS === 'ios') {
    		ToastIOS.show({"message":message, "duration":"short", "position":"center"});
    	} else {
    		ToastAndroid.show(message, ToastAndroid.SHORT);
    	}
    },
    showLoading(message) {
    	if(Platform.OS === 'ios') {
    		ToastIOS.makeToastActivity();
    	} else {
    		NativeModules.LoadingDialogAndroid.showLoadingDialog(message);
    	}
    },
    hideLoading() {
    	if(Platform.OS === 'ios') {
    		ToastIOS.hideToastActivity();
    	} else {
    		NativeModules.LoadingDialogAndroid.dismissLoadingDialog();
    	}
    }
});

export default Toast;