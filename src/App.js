import React, { Component } from 'react';
import {  BrowserRouter } from 'react-router-dom';

import { Route } from 'react-router-dom';

import './App.css';

import Header from './components/common/Header';
import Footer from './components/common/footer';
import SignUp from './components/Pages/SignUp';
import Login from './components/Pages/Login';
import ResetPassword from './components/Pages/ResetPassword';
import Copyright from './components/common/copyright';
import Dashboard from './components/Pages/Dashboard';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div className="App">
            <Header />
              <Route path="/login" exact component={Login} />
              <Route path="/signup" exact component={SignUp} />
              <Route path="/resetpassword" exact component={ResetPassword} />
              <Route path="/dashboard" exact component={Dashboard} />
              <Route path="/" exact render={()=> <h3>Homepage still work in progress</h3>} />
            <Footer />
            <Copyright/>
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
