import thunk from 'redux-thunk'
import {createStore, applyMiddleware} from 'redux'
import boardReducer from './reducers/boardReducer'

const store = createStore(boardReducer, applyMiddleware(thunk))

export default store