/**
 * Created by PF-07GLA9 on 2016/8/8.
 */
'use strict';

export function NaviGoBack(navigator){
    if(navigator && navigator.getCurrentRoutes().length>1){
        navigator.pop();
        return true;
    }
    return false;
}