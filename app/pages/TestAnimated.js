/**
 * Created by PF-07GLA9 on 2016/9/14.
 */

'use strict'

import React, {Component} from 'react';
import{
    Animated,
    Easing,
    View,
    Text,
    Image,
    StyleSheet,

    }from 'react-native';

class TestAnimated extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            fadeAnim: new Animated.Value(0),
            bounceValue: new Animated.Value(0),
            decayAnim:new Animated.Value(0),
        };
    }

    componentDidMount() {
        Animated.timing(this.state.fadeAnim, {toValue: 1, duration: 2500, easing: Easing.linear}).start();
        this.state.bounceValue.setValue(1.5);
        Animated.spring(this.state.bounceValue, {toValue: 0.8, friction: 1}).start();
        Animated.decay(this.state.decayAnim, {toValue:100, velocity:50, deceleration:2}).start();
    }

    render() {
        return (
            <View style={{flex:1}}>
                <Animated.View style={[styles.demo, {opacity:this.state.fadeAnim}]}>
                    <Text style={{fontSize:30}}>悄悄地，我出现了,hah</Text>
                </Animated.View>

                <Animated.Image source={{uri:'http://i.imgur.com/XMKOH81.jpg'}}
                                style={{flex:1, transform:[{scale:this.state.bounceValue}]}}/>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    demo: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    }
});

export default TestAnimated;