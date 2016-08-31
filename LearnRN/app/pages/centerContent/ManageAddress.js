/**
 * Created by PF-07GLA9 on 2016/8/8.
 */
'use strict'

import React, {Component} from 'react';
import{
    View,
    Text,
    BackAndroid,
    ToastAndroid,
    InteractionManager,
    TouchableOpacity,
    Image,
    ListView,
    }from 'react-native'

import {NaviGoBack} from '../../utils/CommonUtils'
import AddAddress from './AddAddress'
import {ADDRESS_DATA} from '../../common/VirtualData'

class ManageAddress extends Component {
    // 构造
    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            addressList: eval(ADDRESS_DATA).data,
        }
        //BackAndroid.addEventListener('hardwareBackPress', this.goBack);
    }

    goBack() {
        const {navigator}=this.props;
        NaviGoBack(navigator);
    }

    onClickItem(address) {
        //ToastAndroid.show("该功能正在紧张开发中！", ToastAndroid.SHORT);
    }

    onClickAddAddressAction() {
        const {navigator}=this.props;
        InteractionManager.runAfterInteractions(()=> {
            navigator.push({
                component: AddAddress,
                name: 'AddAddress'
            })
        });
    }


    renderRow(address) {
        return (

            <TouchableOpacity onPress={()=>{this.onClickItem(address)}}>
                <View style={{backgroundColor:'white', flexDirection: 'row'}}>
                    <View style={{padding:10}}>
                        <Text>{address.name + ' ' + address.firstName}</Text>
                        <Text>{address.phone}</Text>
                        <Text>{address.detail}</Text>
                        <View style={{flexDirection:'row'}}>
                            <Text>{address.city}</Text>
                            <Text>{address.postcode}</Text>
                        </View>

                    </View>
                    <View style={{flex:1, alignItems:'flex-end', justifyContent:'center'}}>
                        <Image style={{width:25, height:25, marginRight:10}}
                               source={require('../../images/ic_center_addressm_card_add.png')}/>
                    </View>

                </View>
            </TouchableOpacity>

        );
    }

    renderFooter() {
        return (
            <View style={{height:55, backgroundColor:'#f5f5f5'}}>
                <TouchableOpacity onPress={()=>{this.onClickAddAddressAction()}}>
                    <View style={{flexDirection:'row', height:45, backgroundColor:'white',marginTop:10}}>
                        <View style={{justifyContent:'center'}}>
                            <Text style={{marginLeft:10, color:'black'}}>添加地址</Text>
                        </View>

                        <View style={{flex:1, alignItems:'flex-end', justifyContent:'center'}}>
                            <Image style={{width:25, height:25, marginRight:10}}
                                   source={require('../../images/ic_center_addressm_add.png')}/>
                        </View>

                    </View>
                </TouchableOpacity>
            </View>
        );
    }

    render() {
        return (
            <View style={{flex:1, backgroundColor:'#f5f5f5'}}>
                <View style={{flexDirection:'row', backgroundColor:'black', height:45}}>
                    <TouchableOpacity onPress={this.goBack} style={{justifyContent:'center'}}>
                        <Image style={{width:13, height:20, marginLeft:10}}
                               source={require('../../images/ic_center_back.png')}/>
                    </TouchableOpacity>
                    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                        <Text style={{fontSize:18, color:'white'}}>地址管理</Text>
                    </View>
                </View>

                <View>
                    <ListView
                        style={{backgroundColor:'white', marginTop:10}}
                        initialListSize={1}
                        dataSource={this.state.dataSource.cloneWithRows(this.state.dataSource==='undefined'?[]:this.state.addressList)}
                        renderFooter={this.renderFooter}
                        onEndReachedThreshold={10}
                        enableEmptySections={true}
                        renderRow={this.renderRow}/>
                </View>
            </View>

        );
    }

}

export default ManageAddress;
