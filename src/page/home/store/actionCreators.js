import axios from 'axios';
import * as constants from './constants';
import { fromJS } from 'immutable';

const changHomeData = (result) => ({
	type: constants.CHANGE_HOME_DATA,
	topicList: result.topicList,
	articleList: result.articleList,
	recommendList: result.recommendList
});


const addHomeList = (list, nextPage) => ({
	type: constants.ADD_ARTICLE_LIST,
	list: fromJS(list),
	nextPage
})

// 获取列表数据
export const getHomeinfo =()=>{
	return (dispatch)=>{
		axios.get('/api/home.json').then((res)=>{
			const result = res.data.data;
			dispatch(changHomeData(result))
		})
	}
}

// 返回顶部
export const toggleTopShow=(show)=>({
	type: constants.TOGGLE_SCROLL_TOP,
	show
})

// 加载更多

export const getMoreList = (page) =>{
	return (dispatch)=>{
		axios.get('/api/homeList.json?page='+ page).then((res)=>{
			const result = res.data.data;
			dispatch(addHomeList(result,page+1))
		})
	}
}
