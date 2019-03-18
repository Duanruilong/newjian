

// combineReducers 合并小的reduce
import { combineReducers } from 'redux';
import {reducer as headerReducer } from '../common/header/store'

const reducer = combineReducers({
    header:headerReducer,
})

export default reducer;