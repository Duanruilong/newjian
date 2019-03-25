// action 生成器
import * as constants from "./constants.js";
import axios from 'axios';
import {fromJS} from 'immutable';


export const searchFocus=()=>({
    type:constants.SEARCH_FOCUS
})

export const searchBlur=()=>({
    type:constants.SEARCH_BLUR
})

const changeList=(data)=>({
    type:constants.CHANGE_LIST,
    data:fromJS(data)
})

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