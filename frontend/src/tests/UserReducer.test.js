import * as Types from './../user/action-types'
import reducer from './../user/UserReducer'

const initialState = {
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
    profiles: [],
    profileSelected: null,
}

describe('User reducer', () => {
    
    it('Should return de initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState)
    })

    it('Should handle next action', () => {
        expect(reducer(initialState, {type: Types.NEXT}))
            .toEqual({...initialState, step: 1})
    })

    it('Should handle previous action', () => {
        let state = {...initialState, step: 1}
        expect(reducer(state, {type: Types.PREVIOUS}))
            .toEqual({...initialState, step: 0})

        state = {...initialState, step: 0}
        expect(reducer(state, {type: Types.PREVIOUS}))
            .toEqual({...state, step: 0})
    })

    it('Should handle select profile action', () => {
        expect(reducer(initialState, {type: Types.SELECT_PROFILE, id: 0}))
            .toEqual({...initialState, profileSelected: 0})
    })

    it('Should handle profiles loaded action', () => {
        expect(reducer(undefined, {
            type: Types.PROFILES_LOADED,
            profiles: [{id: 0}, {id: 1}]
        })).toEqual({...initialState, profiles: [{id: 0}, {id: 1}]})
    })

    it('Should handle form changed action', () => {
        expect(reducer(initialState, {
            type: Types.FORM_CHANGED,
            key: 'email',
            value: 'email@test.com'
        })).toEqual({...initialState, email: 'email@test.com'})
    })

    it('Should handle save action', () => {
        expect(reducer(initialState, {
            type: Types.USER_SAVED,
        })).toEqual({...initialState})
    })

})