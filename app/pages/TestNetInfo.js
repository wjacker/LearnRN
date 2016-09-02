/**
 * Created by PF-07GLA9 on 2016/8/15.
 */

'use strict';

import React, {Component} from 'react';
import{
    View,
    Text,
    ToastAndroid,
    NetInfo,
    } from 'react-native';

class TestNetInfo extends Component{

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            isConnected:null,
            connectionInfo:null
        };
          this.onNetConnectionChange=this.onNetConnectionChange.bind(this);
      }

    componentDidMount() {
        NetInfo.addEventListener('change', this.onNetConnectionChange);
        NetInfo.isConnected.fetch().done(
            (isConnected)=>{this.setState({isConnected});}
        );

        NetInfo.fetch().done(
            (connectionInfo)=>{this.setState({connectionInfo})}
        );
    }

    componentWillUnMount() {
        NetInfo.removeEventListener('change', this.onNetConnectionChange);
    }

    onNetConnectionChange(isConnected){
        this.setState({isConnected});
        NetInfo.fetch().done(
            (connectionInfo)=>{this.setState({connectionInfo})}
        );
        ToastAndroid.show(isConnected?'online':'offline', ToastAndroid.SHORT);
    }

    render(){
        return(
            <View>
                <View style={{flexDirection:'row'}}>
                    <Text>网络是否可用：</Text>
                    <Text>{this.state.isConnected?'是':'否'}</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text>网络类型：</Text>
                    <Text>{this.state.connectionInfo}</Text>
                </View>

                <View style={{flexDirection:'row'}}>
                    <Text>网络是否收费：</Text>
                    <Text>{NetInfo.isConnectionExpensive===true?'是':'否'}</Text>
                </View>
            </View>
        );
    }
}

export default TestNetInfo;