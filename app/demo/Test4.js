/**
 * Created by PF-07GLA9 on 2016/10/18.
 */
'use strict';

import React, {Component} from 'react';
import{
    View,
    Text,
    StyleSheet,
    ScrollView,
    } from 'react-native';

class Test4 extends Component {
    render() {
        return (
            <View style={{marginTop:30}}>
                <Text>等分的网格</Text>
                <View style={styles.flexContainer}>
                    <View style={StyleSheet.flatten([styles.cell, styles.cellRed])}>
                        <Text style={styles.welcome}>
                            cell1
                        </Text>
                    </View>
                    <View style={StyleSheet.flatten([styles.cell, styles.cellBlue])}>
                        <Text style={styles.welcome}>
                            cell2
                        </Text>
                    </View>
                    <View style={StyleSheet.flatten([styles.cell, styles.cellGreen])}>
                        <Text style={styles.welcome}>
                            cell3
                        </Text>
                    </View>
                </View>

                <Text>左边固定， 右边固定，中间flex的布局</Text>
                <View style={styles.flexContainer2}>
                    <View style={StyleSheet.flatten([styles.cellfixed, styles.cellRed])}>
                        <Text style={styles.welcome}>
                            fixed
                        </Text>
                    </View>
                    <View style={StyleSheet.flatten([styles.cell, styles.cellBlue])}>
                        <Text style={styles.welcome}>
                            flex
                        </Text>
                    </View>
                    <View style={StyleSheet.flatten([styles.cellfixed, styles.cellGreen])}>
                        <Text style={styles.welcome}>
                            fixed
                        </Text>
                    </View>
                </View>

                <Text>左中右都固定，中间留空</Text>
                <View style={styles.flexContainer2}>
                    <View style={StyleSheet.flatten([styles.cellfixed, styles.cellRed])}>
                        <Text style={styles.welcome}>
                            fixed
                        </Text>
                    </View>
                    <View style={StyleSheet.flatten([styles.cellfixed, styles.cellBlue])}>
                        <Text style={styles.welcome}>
                            fixed
                        </Text>
                    </View>
                    <View style={StyleSheet.flatten([styles.cellfixed, styles.cellGreen])}>
                        <Text style={styles.welcome}>
                            fixed
                        </Text>
                    </View>
                </View>

                <Text>左中右都固定，两边留空</Text>
                <View style={{flexDirection: 'row', justifyContent:'space-around', flex: 1}}>
                    <View style={StyleSheet.flatten([styles.cellfixed, styles.cellRed])}>
                        <Text style={styles.welcome}>
                            fixed
                        </Text>
                    </View>
                    <View style={StyleSheet.flatten([styles.cellfixed, styles.cellBlue])}>
                        <Text style={styles.welcome}>
                            fixed
                        </Text>
                    </View>
                    <View style={StyleSheet.flatten([styles.cellfixed, styles.cellGreen])}>
                        <Text style={styles.welcome}>
                            fixed
                        </Text>
                    </View>
                </View>

                <Text>嵌套的网格</Text>
                <View style={{flexDirection: 'row', height: 200, backgroundColor:"#fefefe", padding: 20}}>
                    <View style={{flex: 1, flexDirection:'column', padding: 15, backgroundColor:"#eeeeee"}}>
                        <View style={{flex: 1, backgroundColor:"#bbaaaa"}}>
                        </View>
                        <View style={{flex: 1, backgroundColor:"#aabbaa"}}>
                        </View>
                    </View>
                    <View style={{flex: 1, padding: 15, flexDirection:'row', backgroundColor:"#eeeeee"}}>
                        <View style={{flex: 1, backgroundColor:"#aaaabb"}}>
                            <View style={{flex: 1, flexDirection:'row', backgroundColor:"#eeaaaa"}}>
                                <View style={{flex: 1, backgroundColor:"#eebbaa"}}>
                                </View>
                                <View style={{flex: 1, backgroundColor:"#bbccee"}}>
                                </View>
                            </View>
                            <View style={{flex: 1, backgroundColor:"#eebbdd"}}>
                            </View>
                        </View>
                        <View style={{flex: 1, backgroundColor:"#aaccaa"}}>
                            <ScrollView style={{flex: 1, backgroundColor:"#bbccdd", padding: 5}}>
                                <View style={{flexDirection: 'row', height: 50, backgroundColor:"#fefefe"}}>
                                    <View style={{flex: 1, flexDirection:'column', backgroundColor:"#eeeeee"}}>
                                        <View style={{flex: 1, backgroundColor:"#bbaaaa"}}>
                                        </View>
                                        <View style={{flex: 1, backgroundColor:"#aabbaa"}}>
                                        </View>
                                    </View>
                                    <View style={{flex: 1, flexDirection:'row', backgroundColor:"#eeeeee"}}>
                                        <View style={{flex: 1, backgroundColor:"#aaaabb"}}>
                                            <View style={{flex: 1, flexDirection:'row', backgroundColor:"#eeaaaa"}}>
                                                <View style={{flex: 1, backgroundColor:"#eebbaa"}}>
                                                </View>
                                                <View style={{flex: 1, backgroundColor:"#bbccee"}}>
                                                </View>
                                            </View>
                                            <View style={{flex: 1, backgroundColor:"#eebbdd"}}>
                                            </View>
                                        </View>
                                        <View style={{flex: 1, backgroundColor:"#aaccaa"}}>
                                        </View>
                                    </View>
                                </View>
                                <Text style={[styles.text, styles.header, {color: '#ffffff', fontSize: 12}]}>
                                    {(function(){
                                        var str = '';
                                        var n = 100;
                                        while(n--) {
                                            str += '嵌套的网格' + '\n';
                                        }
                                        return str;
                                    })()}
                                </Text>
                            </ScrollView>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    flexContainer: {
        // 容器需要添加direction才能变成让子元素flex
        flexDirection: 'row'
    },
    flexContainer2: {
        flexDirection: 'row',
        justifyContent:'space-between',
        flex: 1,
    },
    cell: {
        flex: 1,
        height: 50,
        backgroundColor: '#aaaaaa'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    cellfixed: {
        height: 50,
        width: 80
    },
    cellRed: {
        backgroundColor: 'red'
    },
    cellBlue: {
        backgroundColor: 'blue'
    },
    cellGreen: {
        backgroundColor: 'green'
    },

});

export default Test4;