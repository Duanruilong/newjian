
import * as constants from "./constants.js";
import {fromJS} from 'immutable';
// immutable 对象
// set 方法，会结合之前immutable对象的值 和设置的值，返回一个新的对象（不会修改原来数据）

const defaultState = fromJS({
    focused:false,
    list: [],
    mouseIn:false, // 鼠标移入
    page:1, // 页面
    totalPage:1, // 页码总数
});

export default (state = defaultState, action)=>{
    switch(action.type) {
		case constants.SEARCH_FOCUS:
			return state.set('focused', true);
		case constants.SEARCH_BLUR:
			return state.set('focused', false);
		case constants.CHANGE_LIST:
        // / return state.set('list',action.data)
        return state.merge({  // 组合赋值
				list: action.data,
				totalPage: action.totalPage
			});
		case constants.MOUSE_ENTER:
			return state.set('mouseIn', true);
		case constants.MOUSE_LEAVE:
			return state.set('mouseIn', false);
		case constants.CHANGE_PAGE:
			return state.set('page', action.page);
		default:
			return state;
	}
}