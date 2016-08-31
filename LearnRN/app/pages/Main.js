/**
 * Created by PF-07GLA9 on 2016/8/8.
 */
'use strict'

import React, {Component} from 'react';
import{
    View,
    Text
    }from 'react-native'

class Main extends Component {
    // 构造
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View>
                <Text>Welcome to Main</Text>
                <View style={{flex:1, flexDirection:'row',justifyContent:'space-between',height:50}}>
                    <View style={{backgroundColor:'red',height:20}}>
                        <Text>aaaaaaaaaaaaaaaaa啊啊啊啊啊啊啊啊dsdsd</Text>
                    </View>
                    <View style={{backgroundColor:'green'}}>
                        <Text>bbbbbbb</Text>
                    </View>
                </View>
            </View>

        );
    }

}

export default Main;
