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

class Test7 extends Component {
    render() {
        return (
            <View>
                <Text style={[styles.text, styles.header]}>
                    在正常的View上设置padding
                </Text>

                <View style={{padding: 30, backgroundColor: '#333333'}}>
                    <Text style={[styles.text, {color: '#fefefe'}]}> Text Element</Text>
                </View>

                <Text style={[styles.text, styles.header]}>
                    在文本元素上设置padding
                </Text>
                <View style={{padding: 0, backgroundColor: '#333333'}}>
                    <Text style={[styles.text, {backgroundColor: '#fe0000', padding: 30}]}>
                        text 元素上设置paddinga
                    </Text>
                </View>

                <Text style={[styles.text, styles.header]}>
                    在正常的View上设置margin
                </Text>

                <View style={{backgroundColor: '#333333'}}>
                    <View style={{backgroundColor: '#fefefe', width: 30, height: 30, margin: 30}}/>
                </View>

                <Text style={[styles.text, styles.header]}>
                    在文本元素上设置margin
                </Text>
                <View style={{backgroundColor: '#333333'}}>
                    <Text style={[styles.text, {backgroundColor: '#fe0000', margin: 30}]}>
                        text 元素上设置margin
                    </Text>
                    <Text style={[styles.text, {backgroundColor: '#fe0000', margin: 30}]}>
                        text 元素上设置margin
                    </Text>
                </View>
            </View>
        );
    }
}

const styles=StyleSheet.create({

});

export default Test7;