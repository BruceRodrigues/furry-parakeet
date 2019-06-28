import * as Types from './../user/action-types'

import DefaultState from './login.state'

const user = (state = DefaultState, action) => {
  switch (action.type) {
    case Types.LOGIN_FORM_CHANGED:
      return { ...state, [action.key]: action.value }
    default:
      return { ...state }
  }
}

export default user
