import { fromJS } from "immutable";
// import * as constants from './constants';

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
    ],
    articleList:[
        {
            id:1,
            title:'胡歌出演电影《李娜》男主，成史上最帅姜山！女主并非汤唯赵薇',
            imgUrl:'http://upload-images.jianshu.io/upload_images/9146831-354c46c4372596ed?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
            desc:'自从胡歌出道以来，出演了许多影视剧，塑造了很多经典的角色，比如说《仙剑奇侠传》中的李逍遥，《天外飞仙》中的地瓜哥哥董永，《琅琊榜》中的麒麟才子梅'
        },
        {
            id:2,
            title:'胡歌出演电影《李娜》男主，成史上最帅姜山！女主并非汤唯赵薇',
            imgUrl:'http://upload-images.jianshu.io/upload_images/9146831-354c46c4372596ed?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
            desc:'自从胡歌出道以来，出演了许多影视剧，塑造了很多经典的角色，比如说《仙剑奇侠传》中的李逍遥，《天外飞仙》中的地瓜哥哥董永，《琅琊榜》中的麒麟才子梅'
        },
    ],
    recommendList:[
        {
            id:1,
            imgUrl:'http://cdn2.jianshu.io/assets/web/banner-s-3-7123fd94750759acf7eca05b871e9d17.png'
        },
        {
            id:2,
            imgUrl:'http:////cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png'
        }
        
    ]
})


export default (state = defaultState, action) =>{
    switch (action.type) {
        
        default:
            return state;
    }
}