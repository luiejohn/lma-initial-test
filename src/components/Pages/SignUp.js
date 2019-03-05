import React, { Component, Fragment } from 'react';
import { Grid, Typography } from '@material-ui/core';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


import FormSelect from '../Forms/Input_Select';

class SignUp extends Component {

    render(){
        return(
        <Fragment>
            <Grid container style={{position:'relative'}}>
                <Grid item sm={12} md={7} lg={7}>
                        <Grid container style={{justifyContent:'center', paddingTop:'35px', paddingBottom:'35px'}}>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <Typography  align="center" variant="display2">
                                    Sign Up
                                </Typography>
                                <TextField 
                                    style={{width:'60%', height:'45px'}}
                                    id="outlined-bare"
                                    placeholder="Email"
                                    margin="normal"
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <FormSelect/>
                            </Grid>

                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <TextField 
                                    style={{width:'60%', height:'45px'}}
                                    id="outlined-bare"
                                    placeholder="Password"
                                    margin="normal"
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <TextField 
                                    style={{width:'60%', height:'45px'}}
                                    id="outlined-bare"
                                    placeholder="Confirm Password"
                                    margin="normal"
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid item xs={12} sm={12} md={12} lg={12} style={{paddingLeft:'20%'}}>
                                <Typography variant="body2" align="left"  >
                                        Password should contain:
                                    </Typography>
                                    <Typography  variant="caption" align="left" style={{marginLeft: ''}}>
                                        <ul>
                                            <li>at least 8-12 characters</li>
                                            <li>at least one uppercase</li>
                                            <li>at least one lowercase</li>
                                            <li>at least one number</li>
                                            <li>one special character(s) - !@#$$%</li>
                                        </ul>
                                </Typography>
                            </Grid>

                            <Grid item sm={12} md={12} lg={12}>
                                <Button variant="contained" style={{marginTop:'30px', backgroundColor:'#BA5757', color:'#fff'}}>
                                    Sign Up
                                </Button>
                            </Grid>

                        </Grid>
                </Grid>

                <Grid item xs={12} sm={12} md={5} lg={5} style={{backgroundColor: '#000033'}}>
                    <Grid container style={{height:550, flexFlow:'row',alignItems:'center', justifyContent:'center'}}>
                        <Grid item sm={12} md={12} lg={12}>
                            <Typography variant="headline" style={{color: '#fff', padding:''}}>
                                Already have an account?
                            </Typography>
                            <Typography style={{color: '#fff', padding:'20px'}} variant="caption">
                                Lorem Ipsum is the single greatest threat. We are not - we are <br/>not keeping up with other websites.
                            </Typography>
                            <Button variant="outlined" style={{border:'2px solid #fff', color:'#fff'}}>LOG IN</Button>
                        </Grid>
                    </Grid>
                </Grid>


            </Grid>
        </Fragment>
        )
    }
}

  
export default SignUp;
