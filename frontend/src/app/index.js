import { combineReducers } from 'redux'
import user from '../user/UserReducer'

export const URL = 'http://localhost:8210/'

export default combineReducers({
    user
})