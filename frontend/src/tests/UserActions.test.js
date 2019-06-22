import * as Types from './../user/action-types'
import * as Actions from './../user/UserActions'
import configureMockStore from 'redux-mock-store'
import fetchMock from 'fetch-mock'
import thunk from 'redux-thunk'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)


describe('User Actions', () => {
    it('Should create a next action', () => {
        const expectedAction = {
            type: Types.NEXT,
        }
        expect(Actions.next()).toEqual(expectedAction)
    })

    it('Should create a previous action', () => {
        const expectedAction = {
            type: Types.PREVIOUS
        }
        expect(Actions.previous()).toEqual(expectedAction)
    })

    it('Sould create a select profile action', () => {
        const id= 0
        const expectedAction = {
            type: Types.SELECT_PROFILE,
            id: 0,
        }
        expect(Actions.selectProfile(id)).toEqual(expectedAction)
    })

    it('Should create a profiles loaded action', () => {
        const payload = [
            {
                id: 0,
                profile: 'dev',
            }
        ]
        const expectedAction = {
            type: Types.PROFILES_LOADED,
            profiles: [
                {
                    id: 0,
                    profile: 'dev'
                }
            ]
        }
        expect(Actions.profilesLoaded(payload)).toEqual(expectedAction)
    })

    it('Should create a form change action', () => {
        const key = 'email'
        const value = 'test@email.com'
        const expectedAction = {
            type: Types.FORM_CHANGED,
            key: 'email',
            value: 'test@email.com',
        }
        expect(Actions.formChanged(key, value)).toEqual(expectedAction)
    })
})

describe('Async actions', () => {
    afterEach(() => {
        fetchMock.restore()
    })
})