import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import {testReducer} from './test.reducer'

export default combineReducers({
  routing: routerReducer,
  testReducer: testReducer
})