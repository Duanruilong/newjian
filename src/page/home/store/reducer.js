import { fromJS } from "immutable";
import * as constants from './constants';

const defaultState = fromJS({
    topicList:[],
    articleList:[],
    recommendList:[],
    articlePage: 1,  // 当前页
    showScroll: false,

})


const changeHomeData = (state, action) => {
	return state.merge({
		topicList: fromJS(action.topicList),
		articleList: fromJS(action.articleList),
		recommendList: fromJS(action.recommendList)
	});
};

const addArticleList = (state, action) =>{
    console.log('action===',action);
    
    return state.merge({
        'articleList': state.get('articleList').concat(action.list),
        'articlePage': action.nextPage
    })
}

export default (state = defaultState, action) =>{
    switch (action.type) {
        // 获取数据
        case constants.CHANGE_HOME_DATA:
            return changeHomeData(state, action);
        // 加载更多
        case constants.ADD_ARTICLE_LIST:
			return addArticleList(state, action);
        // 返回顶部
        case constants.TOGGLE_SCROLL_TOP:
			return state.set('showScroll', action.show);
        default:
            return state;
    }
}