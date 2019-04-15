// action 生成器
import * as constants from "./constants.js";
import axios from 'axios';
import {fromJS} from 'immutable';

const changeList=(data)=>({
    type:constants.CHANGE_LIST,
    data:fromJS(data),
    totalPage:Math.ceil(data.length /10),
    
})

export const searchFocus=()=>({
    type:constants.SEARCH_FOCUS
})

export const searchBlur=()=>({
    type:constants.SEARCH_BLUR
})

export const mouseEnter=()=>({
    type:constants.MOUSE_ENTER
})

export const mouseLeave = () => ({
	type: constants.MOUSE_LEAVE
});

// 换一换
export const changePage= (page) => ({
    type: constants.CHANGE_PAGE,
    page
});

export const getlist=()=>{
    return (dispatch)=>{
        axios.get('api/headerList.json').then((res)=>{
            console.log('res',res.data);
            dispatch(changeList(res.data.data))
        }).catch((error)=>{
            console.log(error);
            
        })
    }
}