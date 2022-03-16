import {combineReducers} from 'redux'

import {countReducer} from "./countReducer"
const reducers = combineReducers({
    countReducer:countReducer
})
export default reducers