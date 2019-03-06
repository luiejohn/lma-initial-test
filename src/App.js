import React, { Component } from 'react';
import {  BrowserRouter, Switch } from 'react-router-dom';

import { Route } from 'react-router-dom';

import './App.css';

import Header from './components/common/Header';
import Footer from './components/common/footer';
import SignUp from './components/Pages/SignUp';
import Login from './components/Pages/Login';
import ResetPassword from './components/Pages/ResetPassword';
import Copyright from './components/common/copyright';
import Dashboard from './components/Pages/Dashboard';
import ManageUsers from './components/Pages/ManageUsers';
import LMA from './components/Pages/LMA';
import Home from './components/Pages/Home';

class App extends Component {
  render() {
    
    return (
      <BrowserRouter>
          <div className="App">
            <Header />
              <Route path="/login" exact component={Login} />
              <Route path="/signup" exact component={SignUp} />
              <Route path="/reset-password" exact component={ResetPassword} />

              <Route path="/dashboard" exact component={Dashboard} />
              <Route path="/lma" exact component={LMA} />
              <Route path="/manage-users" exact component={ManageUsers} />
              <Route path="/" exact component={Home} />

            <Footer />
            <Copyright/>
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
