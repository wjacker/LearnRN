/**
 * Created by PF-07GLA9 on 2016/8/15.
 */

'use strict';

import React, {Component} from 'react';
import{
    View,
    Text,
    ListView,
    Image,
    }from 'react-native';

const ITEM_LIST=['日常心理学', '电影日报'];

class DrawerNavigation extends Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            dataSource:new ListView.DataSource({
                rowHasChanged: (r1, r2)=>r1!==r2
            }),
        };
      }

    render(){
        return(
            <ListView
                renderHeader={this.renderHeader.bind(this)}
                renderRow={this.renderRow.bind(this)}
                dataSource={this.state.dataSource==='undefined'?[]:ITEM_LIST}/>
        );
    }

    renderHeader(){
        <View>
            <View style={{flexDirection:'row'}}>
                <Image style={{width:50,height:50}} source={require('../../images/comment_avatar.png')}/>
                <Text style={{fontSize:16, color:'white',marginLeft:10}}>请登录</Text>
            </View>
        </View>
    }

    renderRow(){
        <View>
            <Text></Text>
        </View>
    }
}

export default DrawerNavigation;