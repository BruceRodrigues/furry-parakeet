import * as Types from './action-types'

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
        case Types.USER_SAVED:
            return {...state}
        case Types.FORM_CHANGED:
            return {...state,
                [action.key]: action.value}
        default:
            return {...state}
    }
}

export default user