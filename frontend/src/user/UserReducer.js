import {USER_SAVED} from './action-types'

const defaultState = {
    step: 1,
    name: '',
    username: '',
    password: '',
    cep: '',
    municipio: '',
    ibge: '',
    uf: 'SC',
    logradouro: '',
    bairro: '',
    complemento: 'Complemento',
    numero: '',
}

const user = (state = defaultState, action) => {
    switch (action.type) {
        case USER_SAVED:
            console.log('USUARIO SALVO')
            return {...state}
        default:
            return {...state}
    }
}

export default user