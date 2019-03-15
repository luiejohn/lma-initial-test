import React, { Fragment } from 'react';
// import { Link as RouterLink } from 'react-router-dom';

import { Grid, Button, Typography, Paper, Divider, Input, InputAdornment } from '@material-ui/core';

import CreateSession from './Session Actions/CreateSession';
import SessionList from './Session Actions/SessionList';
// import UpdateCourse from './Course Actions/UpdateCourse';

class Courses extends React.Component {

  state = {
    actionView: 'SessionList',
      CourseTitle:'',
      CourseCode: '',
      CourseType: '',
      CEAselectedDateFrom: new Date,
      CEAselectedDateTo: new Date(),
      SkillselectedDateFrom: new Date,
      SkillselectedDateTo: new Date(),
      selectedDateFrom: new Date(),
      selectedDateTo: new Date(),
      Trainer: '',
      CourseFee: ''
    
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
    if( action=== 'SessionList'){
      actionComponent = <SessionList handleCourseAction={this.handleCourseAction}/>
    }
    else if( action === 'CreateSession'){
      actionComponent = <CreateSession handleCourseAction={this.handleCourseAction} handleChange={this.handleFormChange}/>
    }
    else if ( action === 'UpdateCourse'){
      // actionComponent = <UpdateCourse handleCourseAction={this.handleCourseAction} />
    }
    
    return actionComponent;
  }

  renderActionButtons() {
    let action = this.state.actionView;
    let actionComponent = '';
    
    if( action=== 'SessionList'){
      actionComponent = 
        <Fragment>
          <Grid item style={{padding:'0 10px 0 0'}}>
          <Button style={{backgroundColor:'#60C78F', color:'#fff', width:'95px', fontFamily:'Open Sans'}}
            onClick={() => this.handleCourseAction('CreateSession')}
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
    else if( action === 'CreateSession'){
      actionComponent = 
      <Fragment>
        <Grid item style={{padding:'0 10px 0 0'}}>
        <Button style={{backgroundColor:'#60C78F', color:'#fff', width:'95px', fontFamily:'Open Sans'}}
          onClick={() => this.tempoSave('SessionList')}
        >
          SAVE
        </Button>
      </Grid>
      <Grid item style={{padding:'0 10px 0 0'}}>
        <Button style={{backgroundColor:'#ff8080', color:'#fff', width:'95px', fontFamily:'Open Sans'}}
          onClick={() => this.handleCourseAction('SessionList')}
        >
          CANCEL
        </Button>
      </Grid>
    </Fragment>
    }

    else if( action === 'UpdateSession'){
      actionComponent = 
      <Fragment>
        <Grid item style={{padding:'0 10px 0 0'}}>
        <Button style={{backgroundColor:'#60C78F', color:'#fff', width:'95px', fontFamily:'Open Sans'}}
          onClick={() => this.handleCourseAction('SessionList')}
        >
          SAVE
        </Button>
      </Grid>
      <Grid item style={{padding:'0 10px 0 0'}}>
        <Button style={{backgroundColor:'#ff8080', color:'#fff', width:'95px', fontFamily:'Open Sans'}}
          onClick={() => this.handleCourseAction('SessionList')}
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
            <Grid item lg={12}>
                <Grid container style={{backgroundColor:'#F0F5F8'}}>

                  <Grid item lg={12}>
                      <Grid container style={{  justifyContent: 'flex-end', backgroundColor:'#fff', padding:'5px' }}>

                          <Typography style={{flexGrow:1, textAlign:'left', fontSize:'18px', fontWeight:600, padding:'5px 0 0 7px', fontFamily:'Open Sans'}}>
                              SESSIONS
                          </Typography>
                          {
                            this.renderActionButtons()
                          }

                      </Grid>
                  </Grid>

                  {/* Should be a new Component to be rerendered */}
                  <Grid item lg={12}>
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

export default Courses;