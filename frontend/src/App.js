import React from 'react';
import './App.css';
import MainView from './main/Main'
import UserView from './user/UserView'
import LoginView from './login/LoginView'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/user" component={UserView} />
        <Route path="/login" component={LoginView} />
      </Router>
    </div>
  );
}

export default App;
