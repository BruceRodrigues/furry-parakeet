import {
    SAVE_USER,
    USER_SAVED,
} from './action-types'
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
        type: USER_SAVED,
    }
)