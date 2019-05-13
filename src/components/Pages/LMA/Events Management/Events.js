import React, { Fragment } from 'react';
// import { Link as RouterLink } from 'react-router-dom';

import { Grid, Button, Typography, Paper, Divider, Input, InputAdornment } from '@material-ui/core';

import EventList from './Events Action/EventsList';
import CreateEvent from './Events Action/CreateEvent';
import UpdateEvent from './Events Action/UpdateEvent';

class Events extends React.Component {

  state = {
    actionView: 'EventList',
      // CourseTitle:'',
      // CourseCode: '',
      // CourseType: '',
      // CEAselectedDateFrom: new Date,
      // CEAselectedDateTo: new Date(),
      // SkillselectedDateFrom: new Date,
      // SkillselectedDateTo: new Date(),
      // selectedDateFrom: new Date(),
      // selectedDateTo: new Date(),
      // Trainer: '',
      // CourseFee: ''
    
  }

  handleFormChange = name => event => {
    this.setState({ [name]: event.target.value });
  };



  handleCourseAction = (action) => {
    this.setState({actionView: action});
  }

  renderActionComponent() {
    let action = this.state.actionView;
    let actionComponent = '';
    if( action=== 'EventList'){
      actionComponent = <EventList handleCourseAction={this.handleCourseAction}/>
    }
    else if( action === 'CreateEvent'){
      actionComponent = <CreateEvent handleCourseAction={this.handleCourseAction} handleChange={this.handleFormChange}/>
    }
    else if ( action === 'UpdateEvent'){
      actionComponent = <UpdateEvent handleCourseAction={this.handleCourseAction} />
    }
    
    return actionComponent;
  }

  renderActionButtons() {
    let action = this.state.actionView;
    let actionComponent = '';
    
    if( action === 'EventList'){
      actionComponent = 
        <Fragment>
          <Grid item style={{padding:'0 10px 0 0'}}>
          <Button style={{backgroundColor:'#60C78F', color:'#fff', width:'95px', fontFamily:'Open Sans'}}
            onClick={() => this.handleCourseAction('CreateEvent')}
          >
            CREATE
          </Button>
        </Grid>
        {/* <Grid item style={{padding:'0 10px 0 0'}}>
          <Button style={{backgroundColor:'#303144', color:'#fff', width:'95px', fontFamily:'Open Sans'}}>
            IMPORT
          </Button>
        </Grid> */}
      </Fragment>
      }
    else if( action === 'CreateEvent'){
      actionComponent = 
      <Fragment>
        <Grid item style={{padding:'0 10px 0 0'}}>
        <Button style={{backgroundColor:'#60C78F', color:'#fff', width:'95px', fontFamily:'Open Sans'}}
          onClick={() => this.tempoSave('EventList')}
        >
          SAVE
        </Button>
      </Grid>
      <Grid item style={{padding:'0 10px 0 0'}}>
        <Button style={{backgroundColor:'#ff8080', color:'#fff', width:'95px', fontFamily:'Open Sans'}}
          onClick={() => this.handleCourseAction('EventList')}
        >
          CANCEL
        </Button>
      </Grid>
    </Fragment>
    }

    else if( action === 'UpdateEvent'){
      actionComponent = 
      <Fragment>
        <Grid item style={{padding:'0 10px 0 0'}}>
        <Button style={{backgroundColor:'#60C78F', color:'#fff', width:'95px', fontFamily:'Open Sans'}}
          onClick={() => this.handleCourseAction('EventList')}
        >
          SAVE
        </Button>
      </Grid>
      <Grid item style={{padding:'0 10px 0 0'}}>
        <Button style={{backgroundColor:'#ff8080', color:'#fff', width:'95px', fontFamily:'Open Sans'}}
          onClick={() => this.handleCourseAction('EventList')}
        >
          CANCEL
        </Button>
      </Grid>
    </Fragment>
    }
    
    return actionComponent;  
  }
    
  createCourse = () => {
    console.log(this.state);
  }

  tempoSave(name){
    this.handleCourseAction(name);
    this.createCourse();
  }

  render() {
    return (
      <Fragment>
        <Grid container>
            <Grid item md={12} lg={12}>
                <Grid container style={{backgroundColor:'#F0F5F8'}}>

                  <Grid item md={12} lg={12}>
                      <Grid container style={{  justifyContent: 'flex-end', backgroundColor:'#fff', padding:'5px' }}>

                          <div className="lma-page-header">
                              EVENTS
                          </div>
                          {
                            this.renderActionButtons()
                          }

                      </Grid>
                  </Grid>

                  {/* Should be a new Component to be rerendered */}
                  <Grid item md={12} lg={12}>
                        {
                          this.renderActionComponent()
                        }
                  </Grid>



                </Grid>
            </Grid>
        
        </Grid>
      
      </Fragment>
    );
  }
}

export default Events;