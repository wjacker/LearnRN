/**
 * Created by PF-07GLA9 on 2016/8/8.
 */
'use strict'

import React, {Component} from 'react';
import{
    View,
    Text,
    BackAndroid,
    }from 'react-native'

import {NaviGoBack} from '../../utils/CommonUtils'
class AddAddress extends Component {
    // 构造
    constructor(props) {
        super(props);
        //BackAndroid.addEventListener('hardwareBackPress', this.goBack);
    }

    goBack(){
        const {navigator}=this.props;
        NaviGoBack(navigator);
    }

    render() {
        return (
            <View style={{flex:1}}>
                <Text>Welcome to AddAddress</Text>
            </View>

        );
    }

}

export default AddAddress;
