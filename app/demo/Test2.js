/**
 * Created by PF-07GLA9 on 2016/10/18.
 */
'use strict';

import React, {Component} from 'react';
import{
    View,
    Text,
    StyleSheet,
    } from 'react-native';

class Test2 extends Component {
    render() {
        return (
            <View>
                <Text>
                    根节点上放一个元素，不设置宽度
                </Text>

                <View style={{height: 20, backgroundColor: '#333333'}}/>

                <Text style={[styles.text, styles.header]}>
                    固定宽度的元素上放一个View，不设置宽度
                </Text>

                <View style={{width: 100}}>
                    <View style={{height: 20, backgroundColor: '#333333'}}/>
                </View>

                <Text>
                    flex的元素上放一个View，不设置宽度
                </Text>

                <View style={{flexDirection: 'row'}}>
                    <View style={{flex: 1}}>
                        <View style={{height: 20, backgroundColor: '#333333'}}/>
                    </View>
                    <View style={{flex: 1}}/>
                </View>
            </View>
        );
    }
}

const styles=StyleSheet.create({

});

export default Test2;