import * as Types from './action-types'

import { URL } from '../app/index'
import axios from 'axios'

//tests
const profiles = [
  {
    id: 0,
    noPerfil: 'Gerente de projeto',
    dsIcon: 'people',
    dsPerfil:
      'Como gerente de projetos você é capaz de criar e monitorar novos projetos',
  },
  {
    id: 1,
    noPerfil: 'Desenvolvedor',
    dsIcon: 'code',
    dsPerfil:
      'Como desenvolvedor você pode monitorar seus projetos, alterando seu percentual de execução',
  },
  {
    id: 2,
    noPerfil: 'Analista',
    dsIcon: 'devices_other',
    dsPerfil:
      'Como analista você pode adicionar novos documentos ao seus projetos',
  },
]

export const saveUser = user => {
  return dispatch => {
    axios.post(`${URL}/user/add`, user).then(dispatch(userSaved))
  }
}

const userSaved = {
  type: Types.USER_SAVED,
}

export const formChanged = (key, value) => ({
  type: Types.REGISTER_FORM_CHANGED,
  key: key,
  value: value,
})

export const loadProfiles = () => {
  // return profilesLoaded(profiles)
  return dispatch => {
    dispatch({ type: Types.LOAD_PROFILES })
    axios
      .get(`${URL}/profile/all`)
      .then(res => dispatch(profilesLoaded(res.data)))
  }
}

export const profilesLoaded = data => ({
  type: Types.PROFILES_LOADED,
  profiles: data,
})

export const selectProfile = id => ({
  type: Types.SELECT_PROFILE,
  id: id,
})

export const next = () => ({
  type: Types.NEXT,
})

export const previous = () => ({
  type: Types.PREVIOUS,
})
