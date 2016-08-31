/**
 * Created by PF-07GLA9 on 2016/8/9.
 */

'use strict';

import React from 'react';
import{
    TouchableOpacity,
    Image,
    Text,
    StyleSheet
    } from 'react-native';

const ImageButton=({onPress, icon, title})=>(
    <TouchableOpacity style={{height:25}} onPress={onPress}>
        <Image source={icon} style={styles.img}>
            <Text style={{alignSelf:'center', fontSize:12}}>{title}</Text>
        </Image>
    </TouchableOpacity>
);

const styles=StyleSheet.create({
    img:{
        width:76,
        height:25,
        justifyContent:'center'
    }
});

export default ImageButton;