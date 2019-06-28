import * as Types from './../user/action-types'

import axios from 'axios'

export const signIn = user => {
  return dispatch => {
    axios.post(`${URL}/signin`, user).then(dispatch(userLogged))
  }
}

const userLogged = () => ({
  type: Types.SIGN_IN,
})

export const onFormChanged = (key, value) => ({
  type: Types.LOGIN_FORM_CHANGED,
  key: key,
  value: value,
})
