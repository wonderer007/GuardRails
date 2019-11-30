import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/index'

const allReducer = combineReducers({results: rootReducer})

const initialStates = {
  results: {
    listing: []
  }
}

const middleware = [thunk]
const store = createStore(allReducer, initialStates, applyMiddleware(...middleware))
export default store
