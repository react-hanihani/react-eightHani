import {combineReducers} from 'redux'

import aa from '../components/classify/classifyReducers.js'
import detail from '../components/detail/detailReducer.js'
import backtrack from '../components/backtrack/backtrackReducer.js'
import mine from '../components/mine/mineReducer.js'
import homeReducer from '../components/home/homeReducer.js'
import {carlistGoods,dataChange,carlistUrl,Price,good_arrs,writePHP} from '../components/carlist/carlist_reducer/carlistReducer.js' 


export default combineReducers({
    backtrack,
    mine,
    aa,
    detail,
    homeReducer,
    carlistGoods,
    carlistUrl,
    dataChange,
    Price,
    good_arrs,
    writePHP,
})

