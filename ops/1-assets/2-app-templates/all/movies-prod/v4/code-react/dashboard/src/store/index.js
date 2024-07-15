import {createStore, combineReducers} from 'redux'
import Mode from './mode/rtlmode'
export default createStore(
    combineReducers({
        mode: Mode
    })
)
