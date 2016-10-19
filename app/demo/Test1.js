/**
 * Created by PF-07GLA9 on 2016/10/18.
 */

import React, {Component} from 'react';
import{
    View,
    Text,
    Dimensions,
    PixelRatio,
    }from 'react-native'

var {height, width} =Dimensions.get('window');

class Test1 extends Component{

    render(){
        return(
            <View>
                <Text>window.width={width}</Text>
                <Text>window.height={height}</Text>
                <Text>pixelRatio={PixelRatio.get()}</Text>
            </View>
        );
    }
}

export default Test1;