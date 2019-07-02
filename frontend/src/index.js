import './index.css';

import * as serviceWorker from './serviceWorker';

import { applyMiddleware, createStore } from 'redux'

import App from './App';
import { Provider } from 'react-redux'
import React from 'react';
import ReactDOM from 'react-dom';
import ReduxThunk from 'redux-thunk'
import app from './app/index'

export const store = createStore(app, {}, applyMiddleware(ReduxThunk))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
