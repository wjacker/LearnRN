/**
 * Created by PF-07GLA9 on 2016/8/8.
 */
'use strict'

import React, {Component} from 'react';
import{
    View,
    Text,
    InteractionManager,
    ToastAndroid,
    TouchableOpacity,
    Image,
    StyleSheet
    }from 'react-native';

import Setting from './centerContent/Setting';

import ManageAddress from './centerContent/ManageAddress';
import More from './centerContent/More';
import ImageButton from '../component/ImageButton';
import HorizontalOptionBar from '../component/HorizontalOptionBar'
import TestAnimated from './TestAnimated'

class Center extends Component {
    constructor(props) {
        super(props);

    }

    settingBtnAction() {
        const {navigator}=this.props;
        InteractionManager.runAfterInteractions(()=> {
            navigator.push({
                component: Setting,
                name: 'Setting'
            });
        });
    }

    itemActionIndex(position) {
        const {navigator}=this.props;

        switch (position) {
            case 0:
                InteractionManager.runAfterInteractions(()=> {
                    navigator.push({
                        component: TestAnimated,
                        name: 'TestAnimated'
                    });
                });
                break;
            case 1:
                InteractionManager.runAfterInteractions(()=> {
                    navigator.push({
                        component: ManageAddress,
                        name: 'ManageAddress'
                    });
                });
                break;
            case 2:
                ToastAndroid.show("该功能正在紧张开发中", ToastAndroid.SHORT, ToastAndroid.CENTER);
                break;
            case 3:
                ToastAndroid.show("该功能正在紧张开发中", ToastAndroid.SHORT, ToastAndroid.CENTER);
                break;
            case 4:
                ToastAndroid.show("该功能正在紧张开发中", ToastAndroid.SHORT, ToastAndroid.CENTER);
                break;
            case 5:
                InteractionManager.runAfterInteractions(()=> {
                    navigator.push({
                        component: More,
                        name: 'More'
                    });
                });
                break;
        }
    }

    modifyBtnAction() {
        ToastAndroid.show("该功能正在紧张开发中", ToastAndroid.SHORT, ToastAndroid.CENTER);
    }

    render() {
        return (
            <View style={{flex:1,backgroundColor:'#f5f5f5'}}>
                <View style={{height:45, backgroundColor:'black', flexDirection:'row'}}>
                    <View style={{flex:1}}></View>
                    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:18,color: 'white', alignSelf:'center'}}>我的</Text>
                    </View>
                    <View style={{flex:1, alignItems:'center', justifyContent:'flex-end', flexDirection:'row'}}>
                        <TouchableOpacity onPress={()=>{this.settingBtnAction()}}
                                          style={{marginRight:10, justifyContent:'center'}}>
                            <Image style={{width:24, height:22}} source={require('../images/ic_center_setting.png')}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{backgroundColor:'white', height:100, flexDirection:'row'}}>
                    <View style={{justifyContent:'center'}}>
                        <Image style={{width:70, height:70, marginLeft:10}}
                               source={require('../images/ic_center_icon.png')}/>
                    </View>
                    <View style={{flexDirection:'column', justifyContent:'center', marginLeft:10}}>
                        <Text>Julia Stone</Text>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{color: '#ddd'}}>余额：</Text>
                            <Text style={{color: '#ddd'}}>¥20000</Text>
                        </View>
                    </View>

                    <View style={styles.modify_btn}>
                        <ImageButton icon={require('../images/ic_center_modify.png')} title='编辑'
                                     onPress={()=>this.modifyBtnAction()}/>
                    </View>
                </View>

                <View style={styles.horizontal_divide_line}/>

                <HorizontalOptionBar icon={require('../images/ic_center_chongzhi.png')} title='TestAnimated'
                                     onPress={()=>this.itemActionIndex(0)}/>

                <View style={styles.horizontal_divide_line}/>

                <View style={{marginTop:10}}>
                    <View style={styles.horizontal_divide_line}/>
                    <HorizontalOptionBar icon={require('../images/ic_center_address.png')} title='地址管理'
                                         onPress={()=>this.itemActionIndex(1)}/>
                    <View style={styles.horizontal_divide_line}/>
                    <HorizontalOptionBar icon={require('../images/ic_center_card.png')} title='信用卡管理'
                                         onPress={()=>this.itemActionIndex(2)}/>
                    <View style={styles.horizontal_divide_line}/>
                    <HorizontalOptionBar icon={require('../images/ic_center_collect.png')} title='收藏'
                                         onPress={()=>this.itemActionIndex(3)}/>
                    <View style={styles.horizontal_divide_line}/>
                    <HorizontalOptionBar icon={require('../images/ic_center_hezuo.png')} title='商家合作'
                                         onPress={()=>this.itemActionIndex(4)}/>
                    <View style={styles.horizontal_divide_line}/>
                </View>


                <View style={{marginTop:10}}>
                    <View style={styles.horizontal_divide_line}/>
                    <HorizontalOptionBar icon={require('../images/ic_center_more.png')} title='更多'
                                         onPress={()=>this.itemActionIndex(5)}/>
                    <View style={styles.horizontal_divide_line}/>
                </View>

                <View style={{marginTop:10, backgroundColor:'white', alignItems:'center', height:45, justifyContent:'center'}}>
                    <Text>客服电话：110</Text>
                </View>
            </View>

        );
    }

}

const styles = StyleSheet.create({
    horizontal_divide_line: {
        height: 1,
        backgroundColor: '#ccc'
    },
    modify_btn: {
        flex: 1,
        alignItems: 'flex-end',
        marginRight: 10,
        marginTop: 15
    }
});

export default Center;
