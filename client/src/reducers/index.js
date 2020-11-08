import { combineReducers } from 'redux'
import tokenReducer from './tokenReducer'
const rootReducers = combineReducers({
    token: tokenReducer,
})
export default rootReducers;