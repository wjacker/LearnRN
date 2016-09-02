/**
 * Created by PF-07GLA9 on 2016/8/9.
 */
'use strict';

import React from 'react';

import{
    TouchableOpacity,
    View,
    Text,
    Image,
    StyleSheet
    } from 'react-native';

const HorizontalOptionBar = ({onPress, icon, title})=>(
    <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
            <Image style={styles.img} source={icon}/>
            <Text style={{alignSelf:'center', marginLeft:10}}>{title}</Text>
            <View style={styles.arrow_container}>
                <Image style={{width:12, height:15, marginRight:10 }}
                       source={require('../images/ic_center_right_arrow.png')}/>
            </View>

        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        height: 45,
        backgroundColor: 'white',
        flexDirection: 'row',
    },

    img: {
        width: 25,
        height: 25,
        marginLeft: 10,
        alignSelf:'center'
    },

    arrow_container: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
    }
});

export default HorizontalOptionBar;