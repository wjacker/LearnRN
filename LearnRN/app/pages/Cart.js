/**
 * Created by PF-07GLA9 on 2016/8/8.
 */
'use strict'

import React, {Component} from 'react';
import{
    View,
    Text
    }from 'react-native'

class Cart extends Component {
    // 构造
    constructor(props) {
        super(props);
       
    }

    render() {
        return (
            <View style={{flex:1}}>
                <Text>Welcome to Cart</Text>
            </View>

        );
    }

}

export default Cart;
