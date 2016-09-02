/**
 * Created by PF-07GLA9 on 2016/8/18.
 */

'use strict';

import React, {Component} from 'react';
import{
    View,
    Text,
    AsyncStorage,
    TouchableOpacity,
    StyleSheet,
    ToastAndroid,
    }from 'react-native';

var STORAGE_KEY = 'key';

import TestCustomView from '../component/TestCustomView'

class TestAsyncStorage extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            msg: []
        };
    }

    storageData() {
        AsyncStorage.setItem(STORAGE_KEY, '我是老王', (error)=> {
            if (error) {
                this.appendMsg('AsyncStorage错误' + error.message);
            } else {
                this.appendMsg('保存到存储的数据为：' + '我是老王');
            }
        });
    }

    getData(){
        AsyncStorage.getItem(STORAGE_KEY, (error, value)=>{
            if(error){
                this.appendMsg('获取存储数据失败');
            }else{
                this.appendMsg('取得的数据：'+value);
            }
        })
    }

    deleteData() {
        AsyncStorage.removeItem(STORAGE_KEY, (error)=> {
            if (error) {
                this.appendMsg('AsyncStorage错误' + error.message);
            } else {
                this.appendMsg('数据删除成功');
            }
        });
    }

    appendMsg(msg) {
        this.setState({
            msg: this.state.msg.concat(msg)
        });
    }

    render() {
        return (
            <View>
                <Text>AsyncStorage使用实例</Text>
                <TouchableOpacity style={styles.item}
                                  onPress={this.storageData.bind(this)}>
                    <Text>点击存储数据_我是老王</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.item}
                                  onPress={this.getData.bind(this)}>
                    <Text>点击获取存储数据</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.item}
                                  onPress={this.deleteData.bind(this)}>
                    <Text>点击删除数据</Text>
                </TouchableOpacity>
                <View>
                    <Text>信息为：</Text>
                    {this.state.msg.map((m)=><Text key={m}>{m}</Text>)}
                </View>

                <Text>信息为：</Text>
                <TestCustomView msg='TestCustomView' onPress={()=>{ToastAndroid.show('我被点击了', ToastAndroid.SHORT)}}/>
                <TestCustomView/>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'white', height: 45, justifyContent: 'center', marginTop: 10
    }
});

export default TestAsyncStorage;