import * as Types from './action-types'
import { URL } from '../app/index'

import axios from 'axios'

//tests
const profiles = [
    {
        id: 0,
        dsPerfil: "Admin",
        dsIcon: "add_circle",
    },
    {
        id: 1,
        dsPerfil: "Gestor",
        dsIcon: "add_circle",
    },
    {
        id: 2,
        dsPerfil: "Par",
        dsIcon: "add_circle",
    },
]

export const saveUser = (user) => {
    return dispatch => {
        axios.post(`${URL}/user/add`, user)
            .then(dispatch(userSaved))
    }
}

const userSaved = () => ({
        type: Types.USER_SAVED,
})

export const formChanged = (key, value) => ({
        type: Types.FORM_CHANGED,
        key: key,
        value: value
})

export const loadProfiles = () => {
return profilesLoaded(profiles)
    // return dispatch => {
    //     axios.get(`${URL}/profile/all`)
    //         .then(res => dispatch(profilesLoaded(res.data)))
    // }   
}

export const profilesLoaded = (data) => ({
    type: Types.PROFILES_LOADED,
    profiles: data,
})

export const selectProfile = (id) => ({
    type: Types.SELECT_PROFILE,
    id: id,
})

export const next = () => ({
    type: Types.NEXT,
})

export const previous = () => ({
    type: Types.PREVIOUS,
})