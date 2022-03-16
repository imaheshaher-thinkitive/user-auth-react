import {applyMiddleware, compose, createStore} from 'redux'
import reducers  from './reducers'
import Thunk from "redux-thunk";
// import * as reduxThunk from "redux-thunk";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers,
    composeEnhancers(applyMiddleware(Thunk))
)

// let store = createStore(reducers)
store.subscribe(() => console.log(store.getState()))

export default store;