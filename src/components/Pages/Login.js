import React, { Component } from 'react';
import { Grid, Typography } from '@material-ui/core';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class Login extends Component {

    render(){
        return(

            <Grid container style={{height:'500px', margin:'1px solid yellow'}}>
                
                <Grid item sm={12} md={6} lg={6} style={{backgroundColor: '#000033', margin:'1px solid black'}}>
                    <Typography variant="headline" style={{color: '#fff'}}>
                        Do you have an account?
                    </Typography>

                    <Typography style={{color: '#fff'}}>
                          Lorem Ipsum is the single greatest threat. We are not - we are not keeping up with other websites.
                    </Typography>
                    <Button variant="contained" color="secondary">Sign Up</Button>
                </Grid>

                <Grid item sm={12} md={6} lg={6} style={{margin:'1px solid black'}}>
                        <Grid container>
                            <Grid item sm={12} md={12} lg={12}>
                                <TextField
                                    id="outlined-bare"
                                    placeholder="Username"
                                    margin="normal"
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item sm={12} md={12} lg={12}>
                                <TextField
                                    id="outlined-bare"
                                    placeholder="Password"
                                    margin="normal"
                                    variant="outlined"
                                />
                                <Typography style={{marginLeft:'115px'}}>
                                    <a href="#">Forgot Password</a>
                                </Typography>

                                <Button variant="contained" style={{marginTop:'30px', backgroundColor:'#BA5757'}}>
                                    Login
                                </Button>
                            </Grid>
                            <Grid>

                            </Grid>
                        </Grid>

                </Grid>

            </Grid>

        )
    }
}

  
export default Login;
