

import React, {Component} from 'react';
import Toast from '../component/Toast.js'
import{
    View,
    Text,
    Dimensions,
    PixelRatio,
    TouchableHighlight,
    StyleSheet,
}from 'react-native'

var {height, width} =Dimensions.get('window');

class NativeModuleDemo extends Component{

    render(){
        return(
            <View style={{marginTop:30}}>
            	<TouchableHighlight onPress={() => {
		          	Toast.showLoading('Loading');
		        }}>
			        <View>
			          	<Text style={styles.textStyle}>Show Toast</Text>
			        </View>
		      	</TouchableHighlight>

                <TouchableHighlight onPress={() => {
		          	Toast.hideLoading('Loading');
		        }}>
			        <View>
			          	<Text style={styles.textStyle}>Hide Toast</Text>
			        </View>
		      	</TouchableHighlight>

		      	<TouchableHighlight onPress={() => {
		          	Toast.show('Message');
		        }}>
			        <View>
			          	<Text style={styles.textStyle}>Show Message</Text>
			        </View>
		      	</TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
});

export default NativeModuleDemo;