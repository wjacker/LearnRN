/**
 * Created by PF-07GLA9 on 2016/8/30.
 */

'use strict';
import{
    AsyncStorage,
    }from 'react-native';

const KEY_CORP_NAME = 'corp_name';
const KEY_USER_ID = 'user_id';
const KEY_USER_KEY='user_key';
const KEY_TOKEN='token';
const KEY_CUSTOMER_ID='customer_id';
const KEY_PWD='pwd';


export function saveCorpName(corpName) {
    AsyncStorage.setItem(KEY_CORP_NAME, corpName).catch(error=> {
        console.error(error.message);
    });
}

export function getCorpName(callback) {
    AsyncStorage.getItem(KEY_CORP_NAME).then(result=> {
        console.log('corpName='+result);
        if(callback){
            callback(result);
        }
    }).catch(error=> {
        console.error(error.message);
    });
}

export function saveUserId(userId) {
    AsyncStorage.setItem(KEY_USER_ID, userId).catch(error=> {
        console.error(error.message);
    });
}

export function getUserId(callback) {
    AsyncStorage.getItem(KEY_USER_ID).then(result=> {
        console.log('userId='+result);
        if(callback){
            callback(result);
        }
    }).catch(error=> {
        console.error(error.message);
    });
}

export function saveUserKey(userKey){
    AsyncStorage.setItem(KEY_USER_KEY, userKey).catch(error=>{
        console.error(error.message);
    });
}

export function getUserKey(callback){
    AsyncStorage.getItem(KEY_USER_KEY).then(result=>{
        if(callback){
            callback(result);
        }
    }).catch(error=>{
        console.error(error.message);
    });
}

export function saveToken(token){
    AsyncStorage.setItem(KEY_TOKEN, token).catch(error=>{
        console.error(error.message);
    });
}

export function getToken(callback){
    AsyncStorage.getItem(KEY_TOKEN).then(result=>{
        if(callback){
            callback(result);
        }
    }).catch(error=>{
        console.error(error.message);
    });
}

export function deleteToken(){
    AsyncStorage.removeItem(KEY_TOKEN);
}

export function saveCustomerId(customerId){
    AsyncStorage.setItem(KEY_CUSTOMER_ID, customerId).catch(error=>{
        console.error(error.message);
    });
}

export function getCustomerId(callback){
    AsyncStorage.getItem(KEY_CUSTOMER_ID).then(result=>{
        if(callback){
            callback(result);
        }
    }).catch(error=>{
        console.error(error.message);
    });
}

export function savePwd(pwd){
    AsyncStorage.setItem(KEY_PWD, pwd).catch(error=>{
        console.error(error.message);
    });
}

export function getPwd(callback){
    AsyncStorage.getItem(KEY_PWD).then(result=>{
        if(callback){
            callback(result);
        }
    }).catch(error=>{
        console.error(error.message);
    });
}