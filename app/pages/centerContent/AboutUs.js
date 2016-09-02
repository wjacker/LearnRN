/**
 * Created by PF-07GLA9 on 2016/8/8.
 */
'use strict'

import React, {Component} from 'react';
import{
    View,
    Text,
    BackAndroid,
    DrawerLayoutAndroid,
    Dimensions,
    }from 'react-native'

import {NaviGoBack} from '../../utils/CommonUtils'

const DRAWER_WIDTH=Dimensions.get('window').width-100;

class AboutUs extends Component {
    // 构造
    constructor(props) {
        super(props);
    }

    goBack(){
        const {navigator}=this.props;
        NaviGoBack(navigator);
    }

    renderNavigationView(){

    }

    render() {
        return (
            <DrawerLayoutAndroid
                drawerWidth={DRAWER_WIDTH}
                drawerPosition={DrawerLayoutAndroid.position.left}
                renderNavigationView={this.renderNavigationView.bind(this)}>
                <View style={{flex:1}}>
                    <Text>Welcome to AboutUs</Text>
                </View>
            </DrawerLayoutAndroid>
        );
    }

}

export default AboutUs;
