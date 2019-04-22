import { fromJS } from "immutable";
import * as constants from './constants';

const defaultState = fromJS({
    topicList:[
        {
            id:1,
            title:'社会热点',
            imgUrl:'//upload.jianshu.io/collections/images/591309/%E5%8C%BA%E5%9D%97%E9%93%BE.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp'
        },
        {
            id:2,
            title:'摄影',
            imgUrl:'//upload.jianshu.io/users/upload_avatars/13107163/66bea4f2-8267-445e-b6d7-a67a2ed761e8?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp'
        }
    ]
})


export default (state = defaultState, action) =>{
    switch (action.type) {
        
        default:
            return state;
    }
}