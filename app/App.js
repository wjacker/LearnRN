/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React, { Component } from 'react';
import{
    View,
    Navigator,
    BackAndroid,
    StatusBar,
    } from 'react-native';

import Splash from './pages/Splash';
import {NaviGoBack} from './utils/CommonUtils'

var mNavigator;
class App extends Component {
    constructor(props) {
        super(props);
        //this.renderScene = this.renderScene().bind(this);
        //this.goBack = this.goBack().bind(this);
        BackAndroid.addEventListener('hardwareBackPress', this.goBack);
    }

    goBack() {
        return NaviGoBack(mNavigator)
    }

    renderScene(route, navigator) {
        let Component = route.component;
        mNavigator = navigator;
        return (
            <Component navigator={navigator} route={route}/>
        );
    }

    configureScene(route, routeStack) {
        return Navigator.SceneConfigs.FloatFromRight;
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <StatusBar
                    backgroundColor="black"
                    barStyle="default"/>
                <Navigator
                    style={{flex: 1}}
                    initialRoute={{component:Splash, name:'Splash'}}
                    configureScene={this.configureScene.bind(this)}
                    renderScene={this.renderScene.bind(this)}/>
            </View>

        );
    }
}

export default  App;