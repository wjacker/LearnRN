/**
 * Created by PF-07GLA9 on 2016/8/8.
 */
'use strict'

import React, {Component} from 'react';
import{
    View,
    Text,
    StyleSheet,
    InteractionManager,
    }from 'react-native'

import HorizontalOptionBar from '../component/HorizontalOptionBar'
import Test1 from '../demo/Test1';
import Test2 from '../demo/Test2';
import Test3 from '../demo/Test3';
import Test4 from '../demo/Test4';
import Test5 from '../demo/Test5';
import Test6 from '../demo/Test6';
import Test7 from '../demo/Test7';
import Test8 from '../demo/Test8';

class Order extends Component {
    // 构造
    constructor(props) {
        super(props);
       
    }

    onItemPress(index){
        var {navigator}=this.props;

        switch (index){
            case 0:
                InteractionManager.runAfterInteractions(()=>{
                    navigator.push({
                        component:Test1,
                        name:'Test1'
                    })
                });
                break;
            case 1:
                InteractionManager.runAfterInteractions(()=>{
                    navigator.push({
                        component:Test2,
                        name:'test2'
                    })
                });
                break;
            case 2:
                InteractionManager.runAfterInteractions(()=>{
                    navigator.push({
                        component:Test3,
                        name:'test3'
                    })
                });
                break;
            case 3:
                InteractionManager.runAfterInteractions(()=>{
                    navigator.push({
                        component:Test4,
                        name:'test4'
                    })
                });
                break;
            case 4:
                InteractionManager.runAfterInteractions(()=>{
                    navigator.push({
                        component:Test5,
                        name:'test5'
                    })
                });
                break;
            case 5:
                InteractionManager.runAfterInteractions(()=>{
                    navigator.push({
                        component:Test6,
                        name:'Test6'
                    })
                });
                break;
            case 6:
                InteractionManager.runAfterInteractions(()=>{
                    navigator.push({
                        component:Test7,
                        name:'Test7'
                    })
                });
                break;
            case 7:
                InteractionManager.runAfterInteractions(()=>{
                    navigator.push({
                        component:Test8,
                        name:'Test8'
                    })
                });
                break;
        }
    }

    render() {
        return (
            <View style={{flex:1, marginTop:10}}>
                <View style={styles.horizontal_divide_line}/>
                <HorizontalOptionBar title='宽度单位和像素密度' onPress={this.onItemPress.bind(this, 0)}/>
                <View style={styles.horizontal_divide_line}/>
                <HorizontalOptionBar title='Flex布局之默认宽度' onPress={this.onItemPress.bind(this, 1)}/>
                <View style={styles.horizontal_divide_line}/>
                <HorizontalOptionBar title='Flex布局之水平垂直居中' onPress={this.onItemPress.bind(this, 2)}/>
                <View style={styles.horizontal_divide_line}/>
                <HorizontalOptionBar title='Flex布局之网格布局' onPress={this.onItemPress.bind(this, 3)}/>
                <View style={styles.horizontal_divide_line}/>
                <HorizontalOptionBar title='图片布局' onPress={this.onItemPress.bind(this, 4)}/>
                <View style={styles.horizontal_divide_line}/>
                <HorizontalOptionBar title='绝对定位和相对定位' onPress={this.onItemPress.bind(this, 5)}/>
                <View style={styles.horizontal_divide_line}/>
                <HorizontalOptionBar title='padding和margin' onPress={this.onItemPress.bind(this, 6)}/>
                <View style={styles.horizontal_divide_line}/>
                <HorizontalOptionBar title='文本元素' onPress={this.onItemPress.bind(this, 7)}/>
                <View style={styles.horizontal_divide_line}/>
            </View>

        );
    }

}

const styles=StyleSheet.create({
    horizontal_divide_line:{
        height: 1,
        backgroundColor: '#ccc'
    }
});

export default Order;
