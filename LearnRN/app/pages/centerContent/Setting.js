/**
 * Created by PF-07GLA9 on 2016/8/8.
 */
'use strict'

import React, {Component} from 'react';
import{
    View,
    Text,
    TouchableOpacity,
    Image,
    ToastAndroid,
    StyleSheet,
    InteractionManager,
    }from 'react-native'

import {NaviGoBack} from '../../utils/CommonUtils';
import HorizontalOptionBar from '../../component/HorizontalOptionBar';
import HorizontalDivideLine from '../../component/HorizontalDivideLine';
import ShortHorizontalDivideLine from '../../component/ShortHorizontalDivideLine';
import AboutUs from './AboutUs';
import TestNetInfo from '../TestNetInfo';
import TestAsyncStorage from '../TestAsyncStorage';
import Login from '../Login';
import {deleteToken} from '../../utils/AsyncStoregeUtils'

class Setting extends Component {
    // 构造
    constructor(props) {
        super(props);
    }

    backBtnAction(){
        const {navigator}=this.props;
        return NaviGoBack(navigator);
    }

    testNetInfo(){
        const {navigator}=this.props;
        InteractionManager.runAfterInteractions(()=>{
            navigator.push({
                component:TestNetInfo,
                name:'TestNetInfo'
            });
        });
    }

    testAsyncStorage(){
        const {navigator}=this.props;
        InteractionManager.runAfterInteractions(()=>{
            navigator.push({
                component:TestAsyncStorage,
                name:'TestAsyncStorage'
            });
        });
    }

    aboutUs(){
        const {navigator} =this.props;
        InteractionManager.runAfterInteractions(()=>{
            navigator.push({
               component:AboutUs,
                name:'AboutUs'
            });
        });
    }

    clearCache(){
        ToastAndroid.show('该功能正在紧张开发中',ToastAndroid.SHORT);
    }

    logout(){
        deleteToken();
        const {navigator}=this.props;
        InteractionManager.runAfterInteractions(()=>{
            navigator.resetTo({
                component:Login,
                name:'Login'
            });
        });
    }

    render() {
        return (
            <View style={{backgroundColor:'#f5f5f5',flex:1}}>
                <View style={{backgroundColor:'black', flexDirection:'row',height:45}}>
                    <TouchableOpacity style={{flex:1, justifyContent:'center'}} onPress={this.backBtnAction.bind(this)}>
                        <Image source={require('../../images/ic_center_back.png')} style={{width:13,height:20,marginLeft:10,marginRight:10}}/>
                    </TouchableOpacity>
                    <View style={{flex:1, justifyContent:'center'}}>
                        <Text style={{fontSize:18, color:'white',alignSelf:'center'}}>设置</Text>
                    </View>
                    <View style={{flex:1}}></View>
                </View>
                <View style={{marginTop:10}}>
                    <HorizontalOptionBar title='Test NetInfo' onPress={this.testNetInfo.bind(this)}/>
                    <ShortHorizontalDivideLine />
                    <HorizontalOptionBar title='Test AsyncStorage' onPress={this.testAsyncStorage.bind(this)}/>
                    <ShortHorizontalDivideLine />
                    <HorizontalOptionBar title='报告问题'/>
                    <ShortHorizontalDivideLine />
                    <HorizontalOptionBar title='评分'/>
                    <ShortHorizontalDivideLine />
                    <HorizontalOptionBar title='隐私策略'/>
                    <ShortHorizontalDivideLine />
                    <HorizontalOptionBar title='条款'/>
                    <ShortHorizontalDivideLine />
                    <HorizontalOptionBar title='关于我们' onPress={this.aboutUs.bind(this)}/>
                </View>

                <View style={{flex:1, justifyContent:'flex-end', flexDirection:'column'}}>
                    <TouchableOpacity onPress={this.clearCache.bind(this)} style={styles.item_layout}>
                        <Text style={{marginLeft:10}}>清空缓存</Text>
                    </TouchableOpacity>
                    <ShortHorizontalDivideLine />
                    <TouchableOpacity onPress={this.logout.bind(this)} style={styles.item_layout}>
                        <Text style={{marginLeft:10}}>注销登录</Text>
                    </TouchableOpacity>
                </View>
            </View>

        );
    }

}

const styles = StyleSheet.create({

    item_layout:{
        height:45,
        backgroundColor:'white',
        justifyContent:'center'
    }

});

export default Setting;
