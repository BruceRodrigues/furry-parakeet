import { combineReducers } from 'redux'
import login from './../login/login.reducer'
import user from '../user/user.reducer'

export const URL = 'http://localhost:8210'

export default combineReducers({
  user,
  login,
})
