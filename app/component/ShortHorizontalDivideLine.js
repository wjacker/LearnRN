/**
 * Created by PF-07GLA9 on 2016/8/11.
 */

'use strict'

import React from 'react';
import{
    View,
    StyleSheet,
    }from 'react-native';

const shortHorizontalDivideLine=()=>{
    return(
        <View style={{backgroundColor:'white'}}>
            <View style={styles.horizontal_divide_line}/>
        </View>
    );
}

const styles = StyleSheet.create({

    horizontal_divide_line: {
        height: 1,
        backgroundColor: '#ccc',
        marginLeft:10
    },

});

export default shortHorizontalDivideLine;