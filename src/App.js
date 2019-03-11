import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import SignUp from './components/Pages/SignUp';
import Login from './components/Pages/Login';
import ResetPassword from './components/Pages/ResetPassword';
import Dashboard from './components/Pages/Dashboard';
import ManageUsers from './components/Pages/Manage Users/ManageUsers';
import LMA from './components/Pages/LMA/LMA';
import Home from './components/Pages/Home';
// import Courses from './components/Pages/Course Management/Courses';
// import Events from './components/Pages/Events Management/Events';
// import CourseRegistration from './components/Pages/CourseRegistration';
// import PartRegForm from './components/Pages/PartRegForm';
// import CorpRegForm from './components/Pages/CorpRegForm';
// import CustomerInvoices from './components/Pages/CustomerInvoice';
// import TransferCourse from './components/Pages/Registration Management/TransferCourse';
// import RefundCourse from './components/Pages/Registration Management/RefundCourse';
// import Participants from './components/Pages/Registration Management/Participants';
// import PartImportDatabase from './components/Pages/PartImportDatabase.js'; 
// import Trainers from './components/Pages/Trainer Management/Trainers';
// import Trainings from './components/Pages/Trainer Management/Trainings';
// import Members from './components/Pages/Member Management/Members';
// import activities from './components/Pages/Marketing Management/Activities';
// import inventory from './components/Pages/Marketing Management/Inventory';
// import EmailBlasts from './components/Pages/Marketing Management/EmailBlasts';
// import Promos from './components/Pages/Promos';
// import Attendance from './components/Pages/Attendance Management/Attendance';
// import FeedBackForm from './components/Pages/Post Course Management/FeedbackForm';
// import FeedBackResults from './components/Pages/Post Course Management/FeedBackResults';
// import Certificate from './components/Pages/Post Course Management/CertificatesOfAttendance';
// import Rooms from './components/Pages/Room Management/Rooms';
// import Office fro./components/Pages/Office Management/Ofiicesent';
// import Accounts fro./components/Pages/Accountsent';

class App extends Component {
  render() {
    
    return (
            <div className="App">
              {/* <Header /> */}
                <Route path="/login" exact component={Login} />
                <Route path="/signup" exact component={SignUp} />
                <Route path="/reset-password" exact component={ResetPassword} />
                <Route path="/" exact component={Home} />

                <Route path="/dashboard" exact component={Dashboard} />
                <Route path="/lma" exact component={LMA} />
                <Route path="/manage-users" exact component={ManageUsers} />

                {/* <Route path="/dashboard/courses" exact component={Courses}/> */}
                {/* <Route path="/dashboard/events" exact component={Events}/> */}
                {/* //Session page */}
                {/* <Route path="/dashboard/all-course-registration" exact component={CourseRegistration}/> */}

                {/* <Route path="/dashboard/participant-registration-form" exact component={PartRegForm}/> */}
                {/* <Route path="/dashboard/corporate-registration-form" exact component={CorpRegForm}/> */}
                {/* <Route path="/dashboard/customer-invoices" exact component={CustomerInvoices}/> */}
                {/* <Route path="/dashboard/transfer-course" exact component={TransferCourse}/> */}
                {/* <Route path="/dashboard/refund-course" exact component={RefundCourse}/> */}

                {/* <Route path="/dashboard/participants" exact component={Participants}/> */}
                {/* <Route path="/dashboard/import-database" exact component={PartImportDatabase}/> */}

                {/* <Route path="/dashboard/trainers" exact component={Trainers}/> */}
                {/* <Route path="/dashboard/trainings" exact component={Trainings}/> */}

                {/* <Route path="/dashboard/members" exact component={Members}/> */}

                {/* <Route path="/dashboard/activities" exact component={activities}/> */}
                {/* <Route path="/dashboard/inventory" exact component={inventory}/> */}
                {/* <Route path="/dashboard/email-blasts" exact component={EmailBlasts}/> */}

                {/* <Route path="/dashboard/promos" exact component={Promos}/> */}

                {/* <Route path="/dashboard/attendance" exact component={Attendance}/> */}

                {/* <Route path="/dashboard/feedback-form" exact component={FeedBackForm}/> */}
                {/* <Route path="/dashboard/feedback-results" exact component={FeedBackResults}/> */}
                {/* <Route path="/dashboard/certificate-of-attendance" exact component={Certificate}/> */}
                {/* <Route path="/dashboard/rooms" exact component={Rooms}/> */}
                {/* <Route path="/dashboard/office-management" exact component={Office}/> */}
                {/* <Route path="/dashboard/account-management" exact component={Accounts}/> */}
              {/* <Footer />
              <Copyright/> */}
            </div>
    );
  }
}

export default App;
