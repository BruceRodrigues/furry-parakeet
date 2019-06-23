import * as Types from './action-types'

const defaultState = {
    step: 0,
    name: '',
    username: '',
    password: '',
    cep: '',
    municipio: '',
    ibge: '',
    uf: '',
    logradouro: '',
    bairro: '',
    complemento: '',
    numero: '',
    loadingProfiles: false,
    profiles: [],
    profileSelected: null,
}

const user = (state = defaultState, action) => {
    switch (action.type) {
        case Types.USER_SAVED:
            return {...state}
        case Types.FORM_CHANGED:
            return {...state,
                [action.key]: action.value}
        case Types.LOAD_PROFILES:
            return {...state,
                loadingProfiles: true,
            }
        case Types.PROFILES_LOADED:
            return {...state,
                profiles: action.profiles,
                loadingProfiles: false,
            }
        case Types.SELECT_PROFILE:
            return {...state,
                profileSelected: action.id,
            }
        case Types.NEXT:
            return {...state,
                step: state.step+1,
            }
        case Types.PREVIOUS: 
            return {...state,
                step: state.step === 0 ? 0 : state.step-1,
            }
        default:
            return {...state}
    }
}

export default user