import { combineReducers } from 'redux'
import user from '../user/UserReducer'

export const URL = 'http://localhost:8081/'

export default combineReducers({
    user
})