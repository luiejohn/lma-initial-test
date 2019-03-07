import React, { Component } from 'react';
import {  BrowserRouter, Switch } from 'react-router-dom';

import { Route } from 'react-router-dom';

import './App.css';

import Header from './components/common/Header';
import Copyright from './components/common/copyright';
import Footer from './components/common/footer';

import SignUp from './components/Pages/SignUp';
import Login from './components/Pages/Login';
import ResetPassword from './components/Pages/ResetPassword';
import Dashboard from './components/Pages/Dashboard';
import ManageUsers from './components/Pages/ManageUsers';
import LMA from './components/Pages/LMA';
import Home from './components/Pages/Home';
import Courses from './components/Pages/Courses';
import Events from './components/Pages/Events';
import CourseRegistration from './components/Pages/CourseRegistration';
import PartRegForm from './components/Pages/PartRegForm';
import CorpRegForm from './components/Pages/CorpRegForm';
import CustomerInvoices from './components/Pages/CustomerInvoice';
import TransferCourse from './components/Pages/TransferCourse';
import RefundCourse from './components/Pages/RefundCourse';
import Participants from './components/Pages/Participants';
import PartImportDatabase from './components/Pages/PartImportDatabase.js';
import Trainers from './components/Pages/Trainers';
import Trainings from './components/Pages/Trainings';
import Members from './components/Pages/Members';
import activities from './components/Pages/Activities';
import inventory from './components/Pages/Inventory';
import EmailBlasts from './components/Pages/EmailBlasts';
import Promos from './components/Pages/Promos';
import Attendance from './components/Pages/Attendance';
import FeedBackForm from './components/Pages/FeedbackForm';
import FeedBackResults from './components/Pages/FeedBackResults';
import Certificate from './components/Pages/CertificatesOfAttendance';
import Rooms from './components/Pages/Rooms';
import Office from './components/Pages/OfficeManagement';
import Accounts from './components/Pages/AccountManagement';

class App extends Component {
  render() {
    
    return (
      <BrowserRouter>
          <div className="App">
            {/* <Header /> */}
              <Route path="/login" exact component={Login} />
              <Route path="/signup" exact component={SignUp} />
              <Route path="/reset-password" exact component={ResetPassword} />
              <Route path="/" exact component={Home} />

              <Route path="/dashboard" exact component={Dashboard} />
              <Route path="/lma" exact component={LMA} />
              <Route path="/manage-users" exact component={ManageUsers} />

              <Route path="/dashboard/courses" exact component={Courses}/>
              <Route path="/dashboard/events" exact component={Events}/>
              {/* //Session page */}
              <Route path="/dashboard/all-course-registration" exact component={CourseRegistration}/>

              <Route path="/dashboard/participant-registration-form" exact component={PartRegForm}/>
              <Route path="/dashboard/corporate-registration-form" exact component={CorpRegForm}/>
              <Route path="/dashboard/customer-invoices" exact component={CustomerInvoices}/>
              <Route path="/dashboard/transfer-course" exact component={TransferCourse}/>
              <Route path="/dashboard/refund-course" exact component={RefundCourse}/>

              <Route path="/dashboard/participants" exact component={Participants}/>
              <Route path="/dashboard/import-database" exact component={PartImportDatabase}/>

              <Route path="/dashboard/trainers" exact component={Trainers}/>
              <Route path="/dashboard/trainings" exact component={Trainings}/>

              <Route path="/dashboard/members" exact component={Members}/>

              <Route path="/dashboard/activities" exact component={activities}/>
              <Route path="/dashboard/inventory" exact component={inventory}/>
              <Route path="/dashboard/email-blasts" exact component={EmailBlasts}/>

              <Route path="/dashboard/promos" exact component={Promos}/>

              <Route path="/dashboard/attendance" exact component={Attendance}/>

              <Route path="/dashboard/feedback-form" exact component={FeedBackForm}/>
              <Route path="/dashboard/feedback-results" exact component={FeedBackResults}/>
              <Route path="/dashboard/certificate-of-attendance" exact component={Certificate}/>
              <Route path="/dashboard/rooms" exact component={Rooms}/>
              <Route path="/dashboard/office-management" exact component={Office}/>
              <Route path="/dashboard/account-management" exact component={Accounts}/>
            {/* <Footer />
            <Copyright/> */}
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
