/**
 * Created by PF-07GLA9 on 2016/8/18.
 */

'use strict';

import React from 'react';
import{
    TouchableOpacity,
    Text,
    } from 'react-native';

class TestCustomView extends React.Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <Text>Hello {this.props.msg}!</Text>
            </TouchableOpacity>
        );
    }
}

export default TestCustomView;