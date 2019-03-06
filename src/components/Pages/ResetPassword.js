import React from 'react'
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const resetPassword = () => {
    return (
                    <Grid container style={{marginTop:'100px', marginBottom: '100px'}}>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <Typography  align="center" variant="display1">
                                    Reset Password?
                                </Typography>
                                <TextField 
                                    style={{width:'33%', height:'45px'}}
                                    id="outlined-bare"
                                    placeholder="New Password"
                                    margin="normal"
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <TextField 
                                    style={{width:'33%', height:'45px'}}
                                    id="outlined-bare"
                                    placeholder="Confirm Password"
                                    margin="normal"
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <Button variant="contained" style={{marginTop:'30px', width:'33%', backgroundColor:'#BA5757', color: '#fff'}}>
                                    Reset Password
                                </Button>
                            </Grid>


                    </Grid>
    )
}


export default resetPassword;