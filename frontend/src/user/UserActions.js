import * as Types from './action-types'
import { URL } from '../app/index'

import axios from 'axios'

export const saveUser = (user) => {
    return dispatch => {
        axios.post(`${URL}/user/add`, user)
            .then(dispatch(userSaved))
    }
}

const userSaved = () => (
    {
        type: Types.USER_SAVED,
    }
)

export const formChanged = (key, value) => (
    {
        type: Types.FORM_CHANGED,
        key: key,
        value: value
    }
)