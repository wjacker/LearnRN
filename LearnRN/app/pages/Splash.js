'use strict';

import React, { Component } from 'react';
import {
    View,
    Image,
    StyleSheet,
    Dimensions,
    InteractionManager
    } from 'react-native';

import Login from './Login';
import Home from './Home'
import {getToken} from '../utils/AsyncStoregeUtils'

var {height, width}=Dimensions.get('window');

class Splash extends Component {
      constructor(props) {
        super(props);
      }

    componentDidMount() {
        const {navigator}=this.props;
        this.timer = setTimeout(()=> {
            getToken((value)=>{
                if(value){
                    InteractionManager.runAfterInteractions(()=> {
                        navigator.resetTo({
                            component: Home,
                            name: 'Home'
                        });
                    });
                }else{
                    InteractionManager.runAfterInteractions(()=> {
                        navigator.resetTo({
                            component: Login,
                            name: 'Login'
                        });
                    });
                }
            });

        }, 2500);
    }

    componentWillUnMount() {
        this.timer && clearTimeout(this.timer);
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#FFFFFF' }}>

                <Image source={require('../images/qx_splash_bg.png')} style={Styles.image}/>
            </View>
        );
    }
}

const Styles = StyleSheet.create({
    image: {
        flex: 1,
        width: width,
        height: height,
    }
});

export default Splash;