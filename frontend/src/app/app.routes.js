import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import ForgotMyPassword from './../user/ForgotMyPassword'
import LoginView from './../login/LoginView'
import MainView from './../main/MainView'
import { PrivateRoute } from './../utils/route'
import React from 'react'
import UserView from './../user/UserView'

export default () => (
    <Router>
        <Switch>
        <Route path="/user" component={UserView} />
        <Route path="/login" component={LoginView} />
        <PrivateRoute path='/main' component={MainView} />
        <Route path="/remember" component={ForgotMyPassword} />
        </Switch>
    </Router>
)