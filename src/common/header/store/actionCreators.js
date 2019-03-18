// action 生成器
import * as constants from "./constants.js";

export const searchFocus=()=>({
    type:constants.SEARCH_FOCUS
})

export const searchBlur=()=>({
    type:constants.SEARCH_BLUR
})