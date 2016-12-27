/**
 * Created by PF-07GLA9 on 2016/10/18.
 */
'use strict';

import React, {Component} from 'react';
import{
    View,
    Text,
    } from 'react-native';

class Test3 extends Component {
    render() {
        return (
            <View style={{marginTop:30}}>
                <Text>
                    水平居中
                </Text>

                <View style={{height: 100, backgroundColor: '#333333', alignItems: 'center'}}>
                    <View style={{backgroundColor: '#fefefe', width: 30, height: 30, borderRadius: 15}}/>
                </View>

                <Text >
                    垂直居中
                </Text>
                <View style={{height: 100, backgroundColor: '#333333', justifyContent: 'center'}}>
                    <View style={{backgroundColor: '#fefefe', width: 30, height: 30, borderRadius: 15}}/>
                </View>

                <Text>
                    水平垂直居中
                </Text>
                <View style={{height: 100, backgroundColor: '#333333', alignItems: 'center', justifyContent: 'center'}}>
                    <View style={{backgroundColor: '#fefefe', width: 30, height: 30, borderRadius: 15}}/>
                </View>
            </View>
        );
    }
}

export default Test3;