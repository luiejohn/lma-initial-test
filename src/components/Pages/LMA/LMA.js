import React, { Fragment } from 'react';
// import { Link as RouterLink } from 'react-router-dom';

import { Grid, Button, Typography, Paper, Divider } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import SideMenu from '../../common/sideMenu';
import MyCourseTable from '../../common/courseTable';

import AdminNav from '../../common/adminNav';
import Copyright from '../../common/copyright'

import Courses from './Course Management/Courses';
import Events from './Events Management/Events';
import Sessions from './Events Management/Sessions';
import Participant from './Registration Management/Participant';
import Corporate from './Registration Management/Corporate';
import Invoices from './Registration Management/Invoices';
import TransferCourse from './Registration Management/TransferCourse';
import RefundCourse from './Registration Management/RefundCourse';
import Participants from './Participant Management/Participants';
import ImportData from './Participant Management/ImportData';
import Trainers from './Trainer Management/Trainers';
import Trainings from './Trainer Management/Trainings';
import Members from './Member Management/Members';
import Activities from './Marketing Management/Activities';
import Inventory from './Marketing Management/Inventory';
import EmailBlasts from './Marketing Management/EmailBlasts';
import Promos from './Sales Management/Promos';
import Attendance from './Attendance Management/Attendance';
import FeedbackForm from './Post Course Management/FeedbackForm';
import FeedBackResults from './Post Course Management/FeedBackResults';
import Certificates from './Post Course Management/Certificates';
import Rooms from './Room Management/Rooms';
import Offices from './Office Management/Offices';
import Accounts from './Accounts Management/Accounts';

import AdminMenu from '../../common/adminMenu';

class LMA extends React.Component {
  state = {
    currentView: 'Courses',
    pageInfo: `LMA`,
    homeIconPath: '/dashboard'

  }

  handleSelectView = (view) => {
    this.setState({
      currentView: view
    })
  }


  renderSecondPanel(){
    let viewPage = '';
    if(this.state.currentView === 'Courses'){
      viewPage = <Courses />
    }
    else if (this.state.currentView === 'Events'){
      viewPage = <Events />
    }
    else if (this.state.currentView === 'Sessions'){
      viewPage = <Sessions />
    }
    else if (this.state.currentView === 'Participant'){
      viewPage = <Participant />
    }
    else if (this.state.currentView === 'Corporate'){
      viewPage = <Corporate />
    }
    else if (this.state.currentView === 'Invoices'){
      viewPage = <Invoices />
    }
    else if (this.state.currentView === 'TransferCourse'){
      viewPage = <TransferCourse />
    }
    else if (this.state.currentView === 'RefundCourse'){
      viewPage = <RefundCourse />
    }
    else if (this.state.currentView === 'Participants'){
      viewPage = <Participants />
    }
    else if (this.state.currentView === 'ImportData'){
      viewPage = <ImportData />
    }
    else if (this.state.currentView === 'Trainers'){
      viewPage = <Trainers />
    }
    else if (this.state.currentView === 'Trainings'){
      viewPage = <Trainings />
    }
    else if (this.state.currentView === 'Members'){
      viewPage = <Members />
    }
    else if (this.state.currentView === 'Activities'){
      viewPage = <Activities />
    }
    else if (this.state.currentView === 'Inventory'){
      viewPage = <Inventory />
    }
    else if (this.state.currentView === 'EmailBlasts'){
      viewPage = <EmailBlasts />
    }
    else if (this.state.currentView === 'Promos'){
      viewPage = <Promos />
    }
    else if (this.state.currentView === 'Attendance'){
      viewPage = <Attendance />
    }
    else if (this.state.currentView === 'FeedbackForm'){
      viewPage = <FeedbackForm />
    }
    else if (this.state.currentView === 'FeedbackResults'){
      viewPage = <FeedBackResults />
    }
    else if (this.state.currentView === 'Certificates'){
      viewPage = <Certificates />
    }
    else if (this.state.currentView === 'Rooms'){
      viewPage = <Rooms />
    }
    else if (this.state.currentView === 'Offices'){
      viewPage = <Offices />
    }
    else if (this.state.currentView === 'Accounts'){
      viewPage = <Accounts />
    }
    return viewPage;
    
  }

  render() {
    console.log(this.state.currentView)
    return (
      <Fragment>
        <AdminNav 
          pageInfo={this.state.pageInfo} homeIconPath={this.state.homeIconPath}
        
        />
        <Grid container>
            <Grid item md={2} lg={2} style={{backgroundColor:'#2E3142'}}>
                <SideMenu 
                  selectView={this.handleSelectView}
                />
            </Grid>
            {/* <Grid item lg={12}>
                <AdminMenu
                  selectView={this.handleSelectView}
                />
            </Grid> */}
            <Grid item md={10} lg={10}>
                <Divider />
                <Grid container style={{backgroundColor:'#F0F5F8'}}>
                  {
                    this.renderSecondPanel()
                  }
                </Grid>
            </Grid>
        
        </Grid>

      {/* <Copyright /> */}
      </Fragment>
    );
  }
}

export default LMA;