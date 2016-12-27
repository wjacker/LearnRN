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

class Test8 extends Component {
    render() {
        return (
            <View style={{marginTop:30}}>
                <Text style={[styles.text, styles.header]}>
                    文本元素
                </Text>

                <View style={{backgroundColor: '#333333', padding: 10}}>
                    <Text style={styles.baseText} numberOfLines={5}>
                        <Text style={styles.titleText} >
                            文本元素{'\n'}
                        </Text>
                        <Text>
                            {'\n'}In this example, the nested title and body text will inherit the fontFamily from styles.baseText, but the title provides its own additional styles. The title and body will stack on top of each other on account of the literal newlines, numberOfLines is Used to truncate the text with an elipsis after computing the text layout, including line wrapping, such that the total number of lines does not exceed this number.
                        </Text>
                    </Text>
                </View>

                <Text style={[styles.text, styles.header]}>
                    文本样式继承
                </Text>

                <View style={{backgroundColor: '#333333', padding: 10}}>
                    <Text style={{color: 'white'}}>
                        我是white的
                        <Text style={{color: 'red', fontSize:30}}>
                            文本元素{'\n'}
                            <Text>我是white还是red呢？{'\n'}</Text>
                        </Text>
                        <Text>我应该是white的</Text>
                    </Text>
                </View>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    baseText: {
        fontFamily: 'Cochin',
        color: 'white'
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
    }
});

export default Test8;