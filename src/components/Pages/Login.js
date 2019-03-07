import React, { Component, Fragment } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { Grid, Typography, Link } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';

import Header from '../common/Header';
import Footer from '../common/footer';
import Copyright from '../common/copyright';

class Login extends Component {
    state = {
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
      };

      handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
      };
    
      handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
      };


    render(){
        return(
        <Fragment>
            <Header />

            <Grid container>
                <Grid item sm={12} md={5} lg={5} style={{backgroundColor: '#000033'}}>
                    <Grid container style={{height:550, flexFlow:'row',alignItems:'center', justifyContent:'center'}}>
                        <Grid item sm={12} md={12} lg={12}>
                            <Typography variant="headline" style={{color: '#fff', padding:''}}>
                                Don't have an account?
                            </Typography>
                            <Typography style={{color: '#fff', padding:'20px'}} variant="caption">
                                Lorem Ipsum is the single greatest threat. We are not - we are <br/>not keeping up with other websites.
                            </Typography>
                            <Link component={RouterLink} underline="none" to="/signup">
                                <Button variant="outlined" style={{border:'2px solid #fff', color:'#fff'}}>
                                    SIGN UP
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item sm={12} md={7} lg={7} >
                    <Grid container style={{height:500, flexFlow:'row',alignItems:'center', justifyContent:'center'}}>

                            <Grid item sm={12} md={12} lg={12}>
                                <Typography variant="display1">
                                    Login
                                </Typography>
                                <FormControl style={{width:'50%', height:'50px', marginTop:'25px'}}>
                                    <Input style={{border:'1px solid #cccccc', borderRadius:'5px', padding:'10px 10px 8px 13px'}}
                                        id="adornment-password"
                                        placeholder="Email"
                                    />
                                </FormControl>
                                <br/>
                                <FormControl style={{width:'50%', height:'50px', marginTop:'25px'}}>
                                    <Input style={{border:'1px solid #cccccc', borderRadius:'5px', padding:'10px 10px 8px 13px'}}
                                        id="adornment-password"
                                        placeholder="Password"
                                        type={this.state.showPassword ? 'text' : 'password'}
                                        value={this.state.password}
                                        onChange={this.handleChange('password')}
                                        endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                            aria-label="Toggle password visibility"
                                            onClick={this.handleClickShowPassword}
                                            >
                                            {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                        }
                                    />
                                </FormControl>

                                <Typography style={{marginTop:'13px'}} variant="caption">
                                    <Link component={RouterLink} to="/reset-password">
                                        Forgot Password?
                                    </Link>
                                </Typography>

                                <Link component={RouterLink} underline="none" to="/dashboard">
                                    <Button variant="contained" style={{marginTop:'30px', backgroundColor:'#BA5757', color:'#fff'}}>
                                        LOGIN
                                    </Button>
                                </Link>

                            </Grid>
                            <Grid>

                            </Grid>
                        </Grid>

                </Grid>

            </Grid>

            <Footer />
            <Copyright />
        </Fragment>                                        
        )
    }
}

  
export default Login;
