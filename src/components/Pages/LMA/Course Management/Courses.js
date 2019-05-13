import React, { Fragment } from 'react';
// import { Link as RouterLink } from 'react-router-dom';

import { Grid, Button, Typography, Paper, Divider, Input, InputAdornment } from '@material-ui/core';

import CreateCourse from './Course Actions/CreateCourse';
import CourseList from './Course Actions/CourseList';
import UpdateCourse from './Course Actions/UpdateCourse';

class Courses extends React.Component {

  state = {
    actionView: 'CourseList',
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
    if( action=== 'CourseList'){
      actionComponent = <CourseList handleCourseAction={this.handleCourseAction}/>
    }
    else if( action === 'CreateCourse'){
      actionComponent = <CreateCourse handleCourseAction={this.handleCourseAction} handleChange={this.handleFormChange}/>
    }
    else if ( action === 'UpdateCourse'){
      actionComponent = <UpdateCourse handleCourseAction={this.handleCourseAction} />
    }
    
    return actionComponent;
  }

  renderActionButtons() {
    let action = this.state.actionView;
    let actionComponent = '';
    
    if( action=== 'CourseList'){
      actionComponent = 
        <Fragment>
          <Grid item style={{padding:'0 10px 0 0'}}>
          <Button style={{backgroundColor:'#60C78F', color:'#fff', width:'95px', fontFamily:'Open Sans'}}
            onClick={() => this.handleCourseAction('CreateCourse')}
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
    else if( action === 'CreateCourse'){
      actionComponent = 
      <Fragment>
        <Grid item style={{padding:'0 10px 0 0'}}>
        <Button style={{backgroundColor:'#60C78F', color:'#fff', width:'95px', fontFamily:'Open Sans'}}
          onClick={() => this.tempoSave('CourseList')}
        >
          SAVE
        </Button>
      </Grid>
      <Grid item style={{padding:'0 10px 0 0'}}>
        <Button style={{backgroundColor:'rgb(255, 102, 102)', color:'#fff', width:'95px', fontFamily:'Open Sans'}}
          onClick={() => this.handleCourseAction('CourseList')}
        >
          CANCEL
        </Button>
      </Grid>
    </Fragment>
    }

    else if( action === 'UpdateCourse'){
      actionComponent = 
      <Fragment>
        <Grid item style={{padding:'0 10px 0 0'}}>
        <Button style={{backgroundColor:'#60C78F', color:'#fff', width:'95px', fontFamily:'Open Sans'}}
          onClick={() => this.handleCourseAction('CourseList')}
        >
          SAVE
        </Button>
      </Grid>
      <Grid item style={{padding:'0 10px 0 0'}}>
        <Button style={{backgroundColor:'rgb(255, 102, 102)', color:'#fff', width:'95px', fontFamily:'Open Sans'}}
          onClick={() => this.handleCourseAction('CourseList')}
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
                              COURSES
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

export default Courses;