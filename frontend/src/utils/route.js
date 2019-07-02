import {Redirect, Route} from 'react-router'

import React from 'react'
import {store} from './../'

export const PrivateRoute = ({component: C, ...args}) => (
    <Route
        {...args}
        render={
            props => store.getState().login.authenticated ?
                <C {...props} /> :
                <Redirect to="/login" />
        } 
    />
)