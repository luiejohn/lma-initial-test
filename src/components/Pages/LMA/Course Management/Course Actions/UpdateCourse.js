import React, { Component, Fragment } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { Grid, Button, Typography, Paper, Divider, TextField, Link } from '@material-ui/core';
// import MyCourseTable from '../../../../common/courseTable';

import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import { DatePicker } from "material-ui-pickers";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


import CourseFeeTab from './Form Tab/CourseFeeTab';
import TrainingCoordinatorTab from './Form Tab/Training';
import CourseInformation from './Form Tab/CourseInformation';
import TrainerDetails from './Form Tab/TrainerDetails';

class CreateCourse extends Component {
  constructor(props){
    super(props);
    this.state = {
      viewFormTab:'CourseFee',

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
      CourseFee: '',
      selectedValue: 'a',
    };
  }

  handleChange = event => {
    this.setState({ selectedValue: event.target.value });
  };
  
  // handleChange = name => event => {
  //   this.setState({ [name]: event.target.value });
  // };

  CEAhandleDateChangeFrom = date => {
    this.setState({ CEAselectedDateFrom: date });
  };

  CEAhandleDateChangeTo = date => {
    this.setState({ CEAselectedDateTo: date });
  };
  
  SkillhandleDateChangeFrom = date => {
    this.setState({ SkillselectedDateFrom: date });
  };

  SkillhandleDateChangeTo = date => {
    this.setState({ SkillselectedDateTo: date });
  };


  handleDateChangeFrom = date => {
    this.setState({ selectedDateFrom: date });
  };

  handleDateChangeTo = date => {
    this.setState({ selectedDateTo: date });
  };


  handleChangeFormChange = action => {
    this.setState({viewFormTab: action});

  }

  renderFormComponent() {
    let action = this.state.viewFormTab;
    let actionComponent = '';
    if( action=== 'CourseFee'){
      actionComponent = <CourseFeeTab />
    }
    else if( action === 'TrainingCoor'){
      actionComponent = <TrainingCoordinatorTab />
    }
    else if ( action === 'CourseInformation'){
      actionComponent = <CourseInformation />
    }
    else if ( action === 'TrainerDetails'){
      actionComponent = <TrainerDetails />
    }
    
    return actionComponent;
  }

  render() {
    const currencies = [
      {
        value: 1,
        label: 'Option 1',
      },
      {
        value: 2,
        label: 'Option 2',
      },
      {
        value: 3,
        label: 'Option 3',
      },
      {
        value: 4,
        label: 'Option 4',
      },
    ];
    const { selectedDateFrom, selectedDateTo,
            CEAselectedDateFrom,
            CEAselectedDateTo } = this.state;

    const { handleChange } = this.props;
      console.log(this.props);

    return (
      <Fragment>
        <Grid container style={{fontFamily:'Open Sans'}}>
            <Grid item lg={12}>
                <Grid container style={{backgroundColor:'#F0F5F8'}}>
                  {/* Should be a new Component to be rerendered */}
                  <Grid item lg={12}>
                      <Paper style={{margin:'15px'}}>
                        <Grid container style={{height:'60px', flexFlow:'row', justifyContent:'space-between', alignItems:'right'}}>
                              <Grid item style={{margin: '20px 25px', textAlign:'left'}} lg={4}>
                                  <b>Update Course</b>
                              </Grid>
                        </Grid>
                        <Divider/>

                        <Grid container style={{padding:'25px 75px'}}>  
                          <Grid item lg={12} style={{textAlign:'left', padding:'25px'}}>
                              <div><b>Course Title</b></div>
                              <TextField 
                                    style={{width:'94%', height:'45px', marginLeft:'2%'}}
                                    id="outlined-bare"
                                    type="text"
                                    placeholder="Title"
                                    margin="normal"
                                    variant="outlined"
                                    // onChange={handleChange('CourseTitle')}
                                />
                          </Grid>

                          <Grid item lg={12}>
                            <Grid container>
                                <Grid item lg={6} style={{textAlign:'left', padding:'25px'}}>
                                <div><b>LMA Course Code</b></div>
                                  <FormControl style={{width:'85%', margin:'0 0 0 5%'}}>
                                      <TextField
                                          id="outlined-select-currency-native"
                                          select
                                          value={this.state.currency}
                                          // onChange={handleChange('CourseCode')}
                                          SelectProps={{
                                            native: true,
                                          }}
                                          helperText="Please select an option"
                                          margin="normal"
                                          variant="outlined"
                                          style={{height:'70px', fontFamily:'Open Sans'}}
                                      >
                                          {currencies.map(option => (
                                            <option key={option.value} value={option.value}>
                                              {option.label}
                                            </option>
                                          ))}
                                        </TextField>
                                  </FormControl>

                                </Grid>

                                <Grid item lg={6} style={{textAlign:'left', padding:'25px'}}>
                                  <div><b>Course Type</b></div>
                                  <FormControl style={{width:'85%', margin:'0 0 0 5%'}}>
                                    
                                    <TextField
                                        id="outlined-select-currency-native"
                                        select
                                        value={this.state.currency}
                                        // onChange={handleChange('CourseType')}
                                        SelectProps={{
                                          native: true,
                                        }}
                                        helperText="Please select an option"
                                        margin="normal"
                                        variant="outlined"
                                        style={{height:'70px'}}
                                    >
                                        {currencies.map(option => (
                                          <option key={option.value} value={option.value}>
                                            {option.label}
                                          </option>
                                        ))}
                                      </TextField>
                                </FormControl>
 
                                </Grid>

                                <Grid item lg={6} style={{textAlign:'left', padding:'25px'}}>
                                      <div><b>CEA</b></div>
                                      <Grid container>
                                          
                                          <Grid item lg={5} style={{margin:'10px 4% 0 4%'}}>
                                            <div style={{fontSize:'13px', color:'#666'}}>Valid From</div>
                                            <DatePicker
                                              margin="normal"
                                              value={CEAselectedDateFrom}
                                              variant="outlined"
                                              onChange={this.CEAhandleDateChangeFrom}
                                              style={{width:'90%', borderRadius:'5px', padding:'5px 5px 0 5px', marginTop:'5px', height:'45px'}}
                                            />
                                          </Grid>
                                          <Grid item lg={5} style={{margin:'10px 4% 0 4%'}}>
                                          <div style={{fontSize:'13px', color:'#666'}}>Valid To</div>
                                            <DatePicker
                                                margin="normal"
                                                value={CEAselectedDateTo}
                                                variant="outlined"
                                                onChange={this.CEAhandleDateChangeTo}
                                                style={{width:'90%', borderRadius:'5px', padding:'5px 5px 0 5px', marginTop:'5px', height:'45px'}}
                                            />
                                          </Grid>
                                      </Grid>
                                      <div style={{marginTop:'15px'}}><b>Skills Future</b></div>
                                      <Grid container>
                                        
                                          <Grid item lg={5} style={{margin:'10px 4% 0 4%'}}>
                                          <div style={{fontSize:'13px', color:'#666'}}>Valid From</div>
                                            <DatePicker
                                              margin="normal"
                                              value={selectedDateFrom}
                                              variant="outlined"
                                              onChange={this.handleDateChangeFrom}
                                              style={{width:'90%', borderRadius:'5px', padding:'5px 5px 0 5px', marginTop:'5px', height:'45px'}}
                                            />
                                          </Grid>
                                          <Grid item lg={5} style={{margin:'10px 4% 0 4%'}}>
                                          <div style={{fontSize:'13px', color:'#666'}}>Valid To</div>
                                            <DatePicker
                                                margin="normal"
                                                value={selectedDateTo}
                                                variant="outlined"
                                                onChange={this.handleDateChangeTo}
                                                style={{width:'90%', borderRadius:'5px', padding:'5px 5px 0 5px', marginTop:'5px', height:'45px'}}
                                            />
                                          </Grid>
                                      </Grid>
 
                                </Grid>

                                <Grid item lg={6} style={{textAlign:'left', padding:'25px'}}>
                                      <div><b>NTUC</b></div>
                                      <Grid container>
                                          
                                          <Grid item lg={5} style={{margin:'10px 4% 0 4%'}}>
                                          <div style={{fontSize:'13px', color:'#666'}}>Valid From</div>
                                            <DatePicker
                                              margin="normal"
                                              value={selectedDateFrom}
                                              variant="outlined"
                                              onChange={this.handleDateChangeFrom}
                                              style={{width:'90%', borderRadius:'5px', padding:'5px 5px 0 5px', marginTop:'5px', height:'45px'}}
                                            />
                                          </Grid>
                                          <Grid item lg={5} style={{margin:'10px 4% 0 4%'}}>
                                          <div style={{fontSize:'13px', color:'#666'}}>Valid To</div>
                                            <DatePicker
                                                margin="normal"
                                                value={selectedDateTo}
                                                variant="outlined"
                                                onChange={this.handleDateChangeTo}
                                                style={{width:'90%', borderRadius:'5px', padding:'5px 5px 0 5px', marginTop:'5px', height:'45px'}}
                                            />
                                          </Grid>
                                    </Grid>

                                    <Grid container>
                                      <Grid item lg={12} style={{textAlign:'left', padding:'25px 25px 25px 0'}}>                            
                                      <div><b>Status</b></div>
                                          <div style={{marginTop:'22px'}}>
                                            <Radio
                                                checked={this.state.selectedValue === 'a'}
                                                onChange={this.handleChange}
                                                value="a"
                                                name="radio-button-demo"
                                                aria-label="A"
                                                label="Active"
                                              /><span>Active</span>
                                            <Radio
                                                checked={this.state.selectedValue === 'b'}
                                                onChange={this.handleChange}
                                                value="b"
                                                name="radio-button-demo"
                                                aria-label="B"
                                                style={{marginLeft:'30px'}}
                                              /> <span>Inactive</span>
                                          </div>
                                        </Grid>
                                    </Grid>

                                </Grid>

                                <Grid item lg={12} style={{minHeight:'500px', margin:'40px 0'}}>
                                  <Grid container>
                                    <Grid item lg={3} style={{ paddingRight:'35px', textAlign:'right'}}>
                                      <Link underline="none" onClick={()=> this.handleChangeFormChange('CourseFee')} style={{color:'#000'}}>
                                          <div style={{padding:'7px'}}>
                                                {
                                                  this.state.viewFormTab==='CourseFee' ?
                                                  <b>Course Fee</b> : 'Course Fee'
                                                }
                                              </div>
                                      </Link>
                                      <Link underline="none" onClick={() => this.handleChangeFormChange('TrainingCoor')} style={{color:'#000'}}>
                                          <div style={{padding:'7px'}}>
                                                {
                                                  this.state.viewFormTab==='TrainingCoor' ?
                                                  <b>Training Coordinator</b> : 'Training Coordinator'
                                                }
                                          </div>
                                      </Link>
                                      <Link underline="none" onClick={() => this.handleChangeFormChange('TrainerDetails')} style={{color:'#000'}}>
                                          <div style={{padding:'7px'}}>
                                                {
                                                  this.state.viewFormTab==='TrainerDetails' ?
                                                  <b>Trainer Details</b> : 'Trainer Details'
                                                }
                                          </div>
                                      </Link>
                                      <Link underline="none" onClick={() => this.handleChangeFormChange('CourseInformation')} style={{color:'#000'}}>
                                          <div style={{padding:'7px'}}>
                                                {
                                                  this.state.viewFormTab==='CourseInformation' ?
                                                  <b>Course Information</b> : 'Course Information'
                                                }
                                          
                                          </div>
                                      </Link>
                                      <Link underline="none" style={{color:'#000'}}>
                                          <div style={{padding:'7px'}}>Accounting</div>
                                      </Link>
                                    </Grid>

                                   {
                                     this.renderFormComponent()
                                   }
                                </Grid>
                              </Grid>



                            </Grid>
                          </Grid>

                        </Grid>
                      </Paper>
                  </Grid>



                </Grid>
            </Grid>
        
        </Grid>

      </Fragment>
    )
  }
}


export default CreateCourse;
