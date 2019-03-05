import React, { Component } from 'react';
import './App.css';

import Header from './components/common/Header';
import Footer from './components/common/footer';
import Grid from '@material-ui/core/Grid';
import SignUp from './components/Pages/SignUp';
// import Login from './components/Login';
// import SignUp from './components/SignUp';
// import ResetPassword from './components/ResetPassword';
// import Copyright from './components/common/copyright';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SignUp />
        <Footer />
      </div>
    );
  }
}

export default App;
