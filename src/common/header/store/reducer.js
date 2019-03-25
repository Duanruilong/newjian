
import * as constants from "./constants.js";
import {fromJS} from 'immutable';
// immutable 对象
// set 方法，会结合之前immutable对象的值 和设置的值，返回一个新的对象（不会修改原来数据）

const defaultState = fromJS({
    focused:false,
    list: [],
});

export default (state = defaultState, action)=>{
    if (action.type === constants.SEARCH_FOCUS) {
        return state.set('focused',true)
    }
    if (action.type === constants.SEARCH_BLUR) {
        return state.set('focused',false)

    }
    if (action.type === constants.CHANGE_LIST) {
        console.log('constants.CHANGE_LIST',action);
        return state.set('list',action.data)
    }
    return state;
}