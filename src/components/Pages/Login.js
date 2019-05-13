import React, { Component, Fragment } from 'react';
import { Link as RouterLink, Redirect } from 'react-router-dom';

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

import { graphql } from 'react-apollo';
import { login } from '../queries/queries'; //From getUserQuery, I changed it to login


class Login extends Component {
    constructor(props){
        super(props)

        this.state = {
            email:'',
            password:'',
            showPassword: false,
            loginError:'',
            loginSuccess:''
          };
    }

      handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
      };
    
      handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
      };


      logIn = () => {
          console.log(this.state);
          //Sends data towards login function in mutations
          //test mail luie1@mail.com
          //test pass Test1111
          if(this.state.password === '' || this.state.email===''){
              this.setState({loginError: 'Please enter an email or password.'});
              return
          }
          this.props.login({
            variables: {
                data:{
                    username: this.state.email, //Instead of email, I used username kay mao nang nakabutang didto sa backend sa pagkuha ug login inputs
                    password: this.state.password
                }
            }
        }).then((data) => {
            /*Fetch data from user credentials*/
            console.log(data);
            localStorage.setItem('AUTH_TOKEN', "Test");
            // localStorage.setItem('AUTH_TOKEN', JSON.stringify(data.data.login.access_token));
            this.setState({loginError: '', loginSuccess: true});
        }
        ).catch((error) =>{
            if(error){
                this.setState({loginError: 'Incorrect Email or Password'});
            }
        }   
        );
          
      }
    

    render(){
        let redirect = null;
        if (this.state.loginSuccess){
            redirect = <Redirect to="/dashboard" />
        }
        return(
        <Fragment>
            <Header />
            { redirect }
            <Grid container>
                <Grid item sm={12} md={5} lg={5} className="loginImage" style={{padding:'85px'}}>
                    <Grid container style={{height:400, flexFlow:'row',alignItems:'center', justifyContent:'center'}}>
                        <Grid item sm={12} md={12} lg={12}>
                            <Typography style={{color: '#fff', fontSize:'27px', fontWeight:600, fontFamily:'Open Sans'}}>
                                Don't have an account?
                            </Typography>
                            <Typography style={{color: '#fff', padding:'20px', fontSize:'15px', textAlign:'left'}} variant="caption">
                                Lorem Ipsum is the single greatest threat. We are not we are not keeping up with other websites.
                            </Typography>
                            <Link component={RouterLink} underline="none" to="/signup">
                                <Button variant="outlined" style={{border:'2px solid #fff', color:'#fff', fontFamily:'Open Sans', width:'165px', fontWeight:600}}>
                                    SIGN UP
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item sm={12} md={7} lg={7} >
                    <Grid container style={{height:500, flexFlow:'row',alignItems:'center', justifyContent:'center'}}>

                            <Grid item sm={12} md={12} lg={12}>
                                <Typography style={{fontFamily:'Open Sans', fontSize:'30px', fontWeight:600, color:'#404040', marginBottom:'25px'}}>
                                    Login
                                </Typography>
                                <FormControl style={{width:'50%', height:'50px', marginTop:'25px'}}>
                                    <Input style={{border:'1px solid #cccccc', borderRadius:'5px', padding:'9px 10px 6px 13px',boxSizing:'border-box',fontFamily:'Open Sans'}}
                                        id="adornment-password"
                                        margin="dense"
                                        placeholder="Email"
                                        onChange={this.handleChange('email')}
                                    />
                                </FormControl>
                                <br/>
                                <FormControl style={{width:'50%', height:'50px', marginTop:'25px'}}>
                                    <Input style={{border:'1px solid #cccccc', borderRadius:'5px', padding:'9px 10px 6px 13px'}}
                                        id="adornment-password"
                                        margin="dense"
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

                                <Typography style={{marginTop:'13px',textAlign:'right', paddingRight:'25%'}} variant="caption">
                                    <Link component={RouterLink} to="/reset-password" style={{fontFamily:'Open Sans'}}>
                                        Forgot Password?
                                    </Link>
                                </Typography>
                                    {(
                                        <div style={{color:'#ff6666', fontSize:'14px'}}>{this.state.loginError}</div>
                                    )}
                                    <Button variant="contained" style={{marginTop:'10px', backgroundColor:'#BA5757', color:'#fff', fontFamily:'Open Sans', width:'160px', fontWeight:600}}
                                        onClick={this.logIn}
                                    >
                                        LOGIN
                                    </Button>

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

  
export default graphql(login, {name:'login'})(Login); //I just copied the code pattern from SignUp.js
