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



class CreateCourse extends Component {
  constructor(props){
    super(props);
    this.state = {

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


  handleChange




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
                                  <b>Create Course</b>
                              </Grid>
                        </Grid>
                        <Divider/>

                        <Grid container style={{padding:'25px 75px'}}>  
                          <Grid item lg={12} style={{textAlign:'left', padding:'25px'}}>
                              <div><b>Course Title</b></div>
                              <TextField 
                                    style={{width:'90%', height:'45px'}}
                                    id="outlined-bare"
                                    type="text"
                                    placeholder="Title"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={handleChange('CourseTitle')}
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
                                          onChange={handleChange('CourseCode')}
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
                                        onChange={handleChange('CourseType')}
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
                                      <Grid item lg={12} style={{textAlign:'left', padding:'25px'}}>                            
                                      <div><b>Status</b></div>
                                          <div style={{marginTop:'28px'}}>
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



                                <Grid item lg={12} style={{minHeight:'200px', margin:'40px 0'}}>
                                   <Grid container>
                                          <Grid item lg={3} style={{ paddingRight:'35px', textAlign:'right'}}>
                                            <div style={{padding:'7px'}}>Course Fee</div>
                                            <div style={{padding:'7px'}}>Training Coordinator</div>
                                            <div style={{padding:'7px'}}>Trainer Details</div>
                                            <div style={{padding:'7px'}}>Course Information</div>
                                            <div style={{padding:'7px'}}>Action</div>

                                          </Grid>
                                          <Grid item lg={9} style={{borderLeft:'1px solid #ccc', textAlign:'left'}}>
                                                <Grid container style={{marginTop:'15px'}}>
                                                    <Grid item lg={6}>
                                                        
                                                        <FormControl style={{width:'85%', margin:'0 0 0 5%'}}>
                                                        <b>Type</b>
                                                            <TextField
                                                                id="outlined-select-currency-native"
                                                                select
                                                                value={this.state.currency}
                                                                onChange={handleChange('CourseCode')}
                                                                SelectProps={{
                                                                  native: true,
                                                                }}
                                                                margin="normal"
                                                                variant="outlined"
                                                                style={{height:'45px', fontFamily:'Open Sans', marginTop:'10px'}}
                                                            >
                                                                {currencies.map(option => (
                                                                  <option key={option.value} value={option.value}>
                                                                    {option.label}
                                                                  </option>
                                                                ))}
                                                              </TextField>
                                                        </FormControl>
                                                    </Grid>
                                                    <Grid item lg={6}>
                                                        <b>Valid From</b>
                                                        <DatePicker
                                                              margin="normal"
                                                              value={selectedDateTo}
                                                              variant="outlined"
                                                              onChange={this.handleDateChangeTo}
                                                              style={{width:'90%', borderRadius:'5px', padding:'5px 5px 0 5px', marginTop:'5px', height:'45px'}}
                                                          />
                                                    </Grid>

                                                    </Grid>


                                                  <Grid container style={{marginTop:'15px'}}>

                                                    <Grid item lg={6} style={{paddingLeft:'20px'}}>
                                                        <div><b>Amount</b></div>
                                                        <TextField 
                                                              style={{width:'90%', height:'45px', marginTop:'10px'}}
                                                              id="outlined-bare"
                                                              type="number"
                                                              placeholder="Number"
                                                              margin="normal"
                                                              variant="outlined"
                                                              onChange={handleChange('CourseTitle')}
                                                          />
                                                    </Grid>
                                                    <Grid item lg={6}>
                                                        <b>Valid From</b>
                                                            <DatePicker
                                                                  margin="normal"
                                                                  value={selectedDateTo}
                                                                  variant="outlined"
                                                                  onChange={this.handleDateChangeTo}
                                                                  style={{width:'90%', borderRadius:'5px', padding:'5px 5px 0 5px', marginTop:'5px', height:'45px'}}
                                                              />
                                                    </Grid>
                                                  </Grid>

                                                  <Grid container style={{margin:'15px 0'}}>
                                                      <Grid item lg={12}>
                                                          <Button style={{backgroundColor: 'rgb(96, 199, 143)', color: '#fff', width:'100px', marginLeft:'20px'}}>ADD</Button>
                                                      </Grid>                    
                                                  </Grid>


                                                  <Grid container>
                                                      <Table style={{margin:'15px 25px'}}>
                                                        <TableHead>
                                                          <TableRow style={{backgroundColor:'rgb(46, 49, 66)'}}>
                                                            <TableCell style={{color:'#f2f2f2'}}>Type</TableCell>
                                                            <TableCell style={{color:'#f2f2f2'}}>Amount</TableCell>
                                                            <TableCell style={{color:'#f2f2f2'}}>Valid From</TableCell>
                                                            <TableCell style={{color:'#f2f2f2'}}>Valid To</TableCell>
                                                            <TableCell style={{color:'#f2f2f2'}}>Action</TableCell>
                                                          </TableRow>
                                                        </TableHead>
                                                        <TableBody>

                                                            <TableRow>
                                                              <TableCell component="th" scope="row">
                                                                Member Fee
                                                              </TableCell>
                                                              <TableCell>$40</TableCell>
                                                              <TableCell>1/10/2018</TableCell>
                                                              <TableCell>12/31/2018</TableCell>
                                                              <TableCell></TableCell>
                                                            </TableRow>

                                                            <TableRow style={{backgroundColor: '#d9d9d9' }}>
                                                              <TableCell component="th" scope="row">
                                                                Total
                                                              </TableCell>
                                                              <TableCell>$40</TableCell>
                                                              <TableCell></TableCell>
                                                              <TableCell></TableCell>
                                                              <TableCell></TableCell>
                                                            </TableRow>
                                                        </TableBody>
                                                      </Table>
                                                  </Grid>

                                          </Grid>

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
