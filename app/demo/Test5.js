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
            <ScrollView>
                <Text>
                    图片有一个stretchMode. 通过Image.resizeMode访问，打印出来的是 contain, cover, stretch 这几种模式
                </Text>

                <Text style={styles.welcome}> 100px height </Text>
                <Image style={{height: 100}} source={{uri: 'http://gtms03.alicdn.com/tps/i3/TB1Kcs5GXXXXXbMXVXXutsrNFXX-608-370.png'}} />

                <Text style={styles.welcome}> 100px height with resizeMode contain </Text>
                <View style={[{flex: 1, backgroundColor: '#fe0000'}]}>
                    <Image style={{flex: 1, height: 100, resizeMode: Image.resizeMode.contain}} source={{uri: 'http://gtms03.alicdn.com/tps/i3/TB1Kcs5GXXXXXbMXVXXutsrNFXX-608-370.png'}} />
                </View>

                <Text style={styles.welcome}> 100px height with resizeMode cover </Text>
                <View style={[{flex: 1, backgroundColor: '#fe0000'}]}>
                    <Image style={{flex: 1, height: 100, resizeMode: Image.resizeMode.cover}} source={{uri: 'http://gtms03.alicdn.com/tps/i3/TB1Kcs5GXXXXXbMXVXXutsrNFXX-608-370.png'}} />
                </View>

                <Text style={styles.welcome}> 100px height with resizeMode stretch </Text>
                <View style={[{flex: 1, backgroundColor: '#fe0000'}]}>
                    <Image style={{flex: 1, height: 100, resizeMode: Image.resizeMode.stretch}} source={{uri: 'http://gtms03.alicdn.com/tps/i3/TB1Kcs5GXXXXXbMXVXXutsrNFXX-608-370.png'}} />
                </View>

                <Text style={styles.welcome}> set height to image container </Text>
                <View style={[{flex: 1, backgroundColor: '#fe0000', height: 100}]}>
                    <Image style={{flex: 1}} source={{uri: 'http://gtms03.alicdn.com/tps/i3/TB1Kcs5GXXXXXbMXVXXutsrNFXX-608-370.png'}} />
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