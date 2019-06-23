import React from 'react';
import './App.css';
import UserView from './user/UserView'
import LoginView from './login/LoginView'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ForgotMyPassword from './user/ForgotMyPassword';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/user" component={UserView} />
        <Route path="/login" component={LoginView} />
        <Route path="/remember" component={ForgotMyPassword} />
      </Router>
    </div>
  );
}

export default App;
