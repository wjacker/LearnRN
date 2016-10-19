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

class Test6 extends Component {
    render() {
        return (
            <View>
                <Text>绝对定位</Text>
                <View style={{flex: 1, height: 100, backgroundColor: '#333333'}}>
                    <View style={[styles.circle, {position: 'absolute', top: 50, left: 180}]}>
                    </View>
                </View>

                <Text>相对定位</Text>
                <View style={{flex: 1, height: 100, backgroundColor: '#333333'}}>
                    <View style={[styles.circle, {position: 'relative', top: 50, left: 50, marginLeft: 50}]}/>
                </View>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    circle: {
        backgroundColor: '#fe0000',
        borderRadius: 10,
        width: 20,
        height: 20
    }
});

export default Test6;