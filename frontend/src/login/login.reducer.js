import * as Types from './../user/action-types'

import DefaultState from './login.state'

const user = (state = DefaultState, action) => {
  switch (action.type) {
    case Types.LOGIN_FORM_CHANGED:
      return { ...state, [action.key]: action.value }
    case Types.SIGN_IN:
      return { ...state, authenticated: true }
    default:
      return { ...state }
  }
}

export default user
