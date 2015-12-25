import { combineReducers, createStore } from 'redux'
import initialState from './initial-state'
import countReducer from './reducers/count'

var reducers = combineReducers({
    count: countReducer
})

var store = createStore(reducers, initialState)

export default store
