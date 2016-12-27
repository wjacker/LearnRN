/**
 * Created by PF-07GLA9 on 2016/10/18.
 */
'use strict';

import React, {Component} from 'react';
import{
    ScrollView,
    View,
    Text,
    StyleSheet,
    Image,
    } from 'react-native';

class Test5 extends Component {
    render() {
        return (
            <ScrollView style={{marginTop:30}}>
                <Text>
                    图片有一个stretchMode. 通过Image.resizeMode访问，打印出来的是 cover, contain, stretch, repeat, center 这几种模式
                </Text>

                <Text style={styles.welcome}> 100px height </Text>
                <Image style={{height: 100}} source={require('../images/test.png')} />

                <Text style={styles.welcome}> 100px height with resizeMode contain </Text>
                <View style={[{flex: 1, backgroundColor: '#fe0000'}]}>
                    <Image style={{height: 100, resizeMode: "contain"}} source={require('../images/test.png')} />
                </View>

                <Text style={styles.welcome}> 100px height with resizeMode cover </Text>
                <View style={[{flex: 1, backgroundColor: '#fe0000'}]}>
                    <Image style={{height: 100, resizeMode: Image.resizeMode.cover}} source={require('../images/test.png')} />
                </View>

                <Text style={styles.welcome}> 100px height with resizeMode stretch </Text>
                <View style={[{flex: 1, backgroundColor: '#fe0000'}]}>
                    <Image style={{flex: 1, height: 100, resizeMode: Image.resizeMode.stretch}} source={require('../images/test.png')}/>
                </View>

                <Text style={styles.welcome}> set height to image container </Text>
                <View style={[{flex: 1, backgroundColor: '#fe0000', height: 100}]}>
                    <Image style={{flex: 1, resizeMode: Image.resizeMode.stretch}} source={require('../images/test.png')}/>
                </View>
            </ScrollView>
        );
    }
}

const styles=StyleSheet.create({
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
});

export default Test5;