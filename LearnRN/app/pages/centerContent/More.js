/**
 * Created by PF-07GLA9 on 2016/8/8.
 */
'use strict'

import React, {Component} from 'react';
import{
    View,
    Text,
    BackAndroid,
    TouchableOpacity,
    Image,
    ToastAndroid,
    StyleSheet,
    }from 'react-native'

import {NaviGoBack} from '../../utils/CommonUtils'
import HorizontalDivideLine from '../../component/HorizontalDivideLine'

class More extends Component {
    // 构造
    constructor(props) {
        super(props);
    }

    backBtnAction() {
        const {navigator}=this.props;
        return NaviGoBack(navigator);
    }

    checkUpdate() {
        ToastAndroid.show('该功能正在紧张开发中', ToastAndroid.SHORT);
    }

    share() {
        ToastAndroid.show('该功能正在紧张开发中', ToastAndroid.SHORT);
    }

    render() {
        return (
            <View style={{backgroundColor:'#f5f5f5'}}>
                <View style={{flexDirection:'row', backgroundColor:'black',height:45}}>
                    <TouchableOpacity style={{justifyContent:'center', flex:1}} onPress={()=>{this.backBtnAction()}}>
                        <Image style={{width:13,height:20, marginLeft:10, marginRight:10}}
                               source={require('../../images/ic_center_back.png')}/>
                    </TouchableOpacity>
                    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                        <Text style={{fontSize:18, color:'white'}}>更多</Text>
                    </View>
                    <View style={{flex:1}}></View>
                </View>

                <View style={styles.top_layout}>
                    <Image source={require('../../images/ic_center_more_icon.png')} style={{width:100,height:78}}/>
                    <Text style={{fontSize:15,marginTop:10}}>嘎嘎商城V1.0</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={()=>{this.checkUpdate()}} style={styles.item_layout}>
                        <Text style={{marginLeft:10}}>检查更新</Text>
                    </TouchableOpacity>
                    <HorizontalDivideLine />
                    <TouchableOpacity onPress={()=>{this.share()}} style={styles.item_layout}>
                        <Text style={{marginLeft:10}}>分享给好友</Text>
                    </TouchableOpacity>

                </View>
            </View>

        );
    }

}

const styles = StyleSheet.create({
    top_layout:{
        height:226,
        alignItems:'center',
        justifyContent:'center'
    },

    item_layout:{
        height:45,
        backgroundColor:'white',
        justifyContent:'center'
    }

});

export default More;
