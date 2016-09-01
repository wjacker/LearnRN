'use strict';

import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    NativeModules,
    ProgressBarAndroid,
    InteractionManager,
    } from 'react-native';

import Home from './Home'
import {saveCorpName, getCorpName, saveUserId, getUserId, saveCustomerId, savePwd, getPwd, saveToken, saveUserKey} from '../utils/AsyncStoregeUtils';
import FetchHttpClient, {json,form} from 'fetch-http-client';
import Toast from '../component/Toast.js'
const client = new FetchHttpClient('http://t2.dcfservice.com');

var LOGIN_URL = 'http://t2.dcfservice.com/services/public/user/login';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            corpName: '',
            userName: '',
            pwd: '',
        }
    }

    componentWillMount() {
        getCorpName((value)=> {
            this.setState({
                corpName: value,
            });
        });

        getUserId((value)=> {
            this.setState({
                userName: value,
            });
        });


        getPwd((value)=> {
            this.setState({
                pwd: value,
            });
        });
    }

    login() {
        console.log('login');
        if (this.state.corpName === '') {
            Toast.showLoading('企业名不能为空');
            //ToastAndroid.show('企业名不能为空', ToastAndroid.SHORT);
            return;
        }
        if (this.state.userName === '') {
            Toast.showLoading('用户名不能为空');
            //ToastAndroid.show('用户名不能为空', ToastAndroid.SHORT);
            return;
        }
        if (this.state.pwd === '') {
            Toast.showLoading('密码不能为空');
            //ToastAndroid.show('密码不能为空', ToastAndroid.SHORT);
            return;
        }

        Toast.showLoading('正在登陆');
        //NativeModules.LoadingDialogAndroid.showLoadingDialog('正在登陆');
        client.addMiddleware(form());
        client.addMiddleware(json());
        client.post('/services/public/user/login', {
            form: {
                corp_name: this.state.corpName,
                user_name: this.state.userName,
                password: this.state.pwd,
                device_type: 1,
                device_id: 'qxwifi54:14:73:7d:2c:55'
            },
        }).then(response=> {
            Toast.hideLoading();
            //NativeModules.LoadingDialogAndroid.dismissLoadingDialog();
            console.log(response.jsonData);
            let jsonData = response.jsonData;
            if (jsonData) {
                if (jsonData.result == 1) {
                    saveCorpName(this.state.corpName);
                    saveUserId(this.state.userName);
                    savePwd(this.state.pwd);
                    saveUserKey(jsonData.userKey);
                    saveCustomerId(jsonData.customerId);
                    saveToken(jsonData.tk);

                    const {navigator}=this.props;
                    InteractionManager.runAfterInteractions(()=>{
                        navigator.resetTo({
                           component:Home,
                            name:'Home'
                        });
                    });
                } else {
                    if (jsonData.message) {
                        Toast.show(jsonData.message);
                        //ToastAndroid.show(jsonData.message, ToastAndroid.SHORT);
                    } else {
                        Toast.show('登录失败，请重试');
                        //ToastAndroid.show('登录失败，请重试', ToastAndroid.SHORT);
                    }
                }
            } else {
                Toast.show('登录失败，请重试');
                //ToastAndroid.show('登录失败，请重试', ToastAndroid.SHORT);
            }
        }).catch(error=> {
            //console.error(error.message);
            Toast.hideLoading();
            //NativeModules.LoadingDialogAndroid.dismissLoadingDialog();
        });

        //fetch(LOGIN_URL, {
        //    method: "POST",
        //    headers:{
        //        'Content-Type': 'application/x-www-form-urlencoded',
        //    },
        //
        //    body:'corp_name=朱龙&user_name=朱龙&password=test&device_type=1&device_id=qxwifi54:14:73:7d:2c:55'
        //
        //}).then((result)=> {
        //    console.log(result);
        //}).catch((error)=> {
        //    console.error(error);
        //});
    }

    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#4876cd' }}>

                <View style={{marginTop:20}}>

                    <TextInput style={styles.textInput} placeholder="请输入企业名" placeholderTextColor="#d1d2d2"
                                   defaultValue={this.state.corpName}
                                   onChangeText={(value)=>{
                                        console.log(value);
                                        this.setState({
                                            corpName: value,
                                        });
                                   }}/>

                    <TextInput style={styles.textInput} placeholder="请输入用户名/手机号" placeholderTextColor="#d1d2d2"
                               defaultValue={this.state.userName}
                               onChangeText={value=>{
                                    this.setState({
                                        userName: value,
                                    });
                               }}/>
                    <TextInput style={styles.textInput} placeholder="请输入密码" placeholderTextColor="#d1d2d2"
                               secureTextEntry={true}
                               defaultValue={this.state.pwd}
                               onChangeText={value=>{
                                    this.setState({
                                        pwd: value,
                                    });
                               }}/>
                </View>

                <TouchableOpacity onPress={this.login.bind(this)}
                                  style={{backgroundColor:'white', margin:10, alignItems:'center', justifyContent:'center'}}>
                    <Text style={{color: '#55ACEE', padding:10}}>登录</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textInput: {
        color: '#667b86',
        flex: 1,
        height: 40,
        padding:10,
        margin:10,
        backgroundColor:'white'
    }
});

export default Login;