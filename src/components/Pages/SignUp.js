import React, { Component, Fragment } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { Grid, Typography, Link } from '@material-ui/core';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import '../../../src/App.css';

import Header from '../common/Header';
import Footer from '../common/footer';
import Copyright from '../common/copyright';


class SignUp extends Component {

    render(){
        return(
        <Fragment>
            <Header />
            <Grid container style={{position:'relative'}}>
                <Grid item sm={12} md={7} lg={7}>
                        <Grid container style={{justifyContent:'center', paddingTop:'35px', paddingBottom:'35px'}}>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <Typography  align="center" style={{fontFamily:'Open Sans', fontSize:'30px', fontWeight:600, color:'#404040', marginBottom:'25px'}}>
                                    Sign Up
                                </Typography>
                                <TextField 
                                    style={{width:'65%', height:'45px'}}
                                    id="outlined-bare"
                                    placeholder="Email"
                                    margin="normal"
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <TextField 
                                    style={{width:'65%', height:'45px'}}
                                    id="outlined-bare"
                                    placeholder="Password"
                                    margin="normal"
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <TextField 
                                    style={{width:'65%', height:'45px'}}
                                    id="outlined-bare"
                                    placeholder="Confirm Password"
                                    margin="normal"
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid item xs={12} sm={12} md={12} lg={12} style={{paddingLeft:'18%', marginTop:'15px'}}>
                                <Typography variant="body2" align="left" style={{fontFamily:'Open Sans', color:'#666666', fontSize:'15px'}} >
                                        Password should contain:
                                    </Typography>
                                    <Typography  variant="caption" align="left" style={{color:'#666666'}}>
                                        <ul style={{fontFamily:'Open Sans', fontSize:'14px'}}>
                                            <li>at least 8-12 characters</li>
                                            <li>at least one uppercase</li>
                                            <li>at least one lowercase</li>
                                            <li>at least one number</li>
                                            <li>one special character(s) - !@#$$%</li>
                                        </ul>
                                </Typography>
                            </Grid>

                            <Grid item sm={12} md={12} lg={12}>
                                <Button variant="contained" style={{marginTop:'30px', backgroundColor:'#BA5757', color:'#fff', fontFamily:'Open Sans', width:'160px', fontWeight:600}}>
                                    Sign Up
                                </Button>
                            </Grid>

                        </Grid>
                </Grid>

                <Grid item xs={12} sm={12} md={5} lg={5} className="signupImage" style={{padding:'85px'}}>
                    <Grid container style={{height:550, flexFlow:'row',alignItems:'center', justifyContent:'center'}}>
                        <Grid item sm={12} md={12} lg={12}>
                            <Typography variant="headline" style={{color: '#fff', fontSize:'27px', fontWeight:600, fontFamily:'Open Sans'}}>
                                Already have an account?
                            </Typography>
                            <Typography style={{color: '#fff', padding:'20px', fontSize:'15px', textAlign:'left'}} variant="caption">
                                Lorem Ipsum is the single greatest threat. We are not we are not keeping up with other websites.
                            </Typography>

                            <Link component={RouterLink} underline="none" to="/login">
                                <Button variant="outlined" style={{border:'2px solid #fff', color:'#fff', fontFamily:'Open Sans', width:'165px', fontWeight:600}}>
                                    LOG IN
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>

            <Footer />
            <Copyright/>
        </Fragment>
        )
    }
}

  
export default SignUp;
