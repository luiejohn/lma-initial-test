import React, { Component, Fragment } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { Grid, Typography, Link } from '@material-ui/core';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import '../../../src/App.css';

import Header from '../common/Header';
import Footer from '../common/footer';
import Copyright from '../common/copyright';

import { graphql } from 'react-apollo';
import { createNewUser } from '../queries/queries';

class SignUp extends Component {
    constructor(props){
        super(props)

        this.state = {
            email:'',
            emailMessage:' ',
            passwordMessage: '',
            password:'',
            confirmPassword: '',
            isPasswordMatch: '',
            showPassword: false,
            regSuccess:'',
            regFail:'',
            graphQuery:''
          };
    }

    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
        if(prop === 'email'){
            this.validateEmail(this.state.email);
        }
        else if (prop === 'password'){
            this.validatePassword(this.state.password);
        }
        else if (prop === 'confirmPassword'){
            
        }

        console.log(prop);
      };


    validateEmail = (email) => {
        //emailregex.com
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        const isEmailValid = re.test(email);
        console.log(isEmailValid);
        {isEmailValid ? this.state.emailMessage =" ": this.state.emailMessage ="Please use a valid email"}

        this.setState({isEmailValid: isEmailValid})

        return isEmailValid;
    }

    validatePassword = (password) => {
        const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,12}$/;
        // should contain at least one digit
        // should contain at least one lower case
        // should contain at least one upper case
        // should contain at least 8 from the mentioned characters
        // should contain at least 1 character [#$^+=!*()@%&]
        const isPasswordValid = re.test(password);
        console.log(isPasswordValid);
        {isPasswordValid ? this.setState({passwordMessage: " "}) : this.setState({passwordMessage: "Please use a valid password" })}
        return isPasswordValid;
    }

    signUp = () => {
        
        let email = this.validateEmail(this.state.email);
        let password = this.validatePassword(this.state.password);
        if(this.state.password !== this.state.confirmPassword){
            this.setState({isPasswordMatch:'Password did not matched!'});
            return
        }

        if(email && password){
            //GraphQL mutation!
            // query variables to be passed to createNewUser as argument
            this.props.createNewUser({
                variables: {
                    email: this.state.email,
                    password: this.state.password
                }
            }).then((data) => {
                console.log(data);
                this.setState({graphQuery:'Success'});
            }).catch((error) => {
                if(error){
                    console.log('I got an error!');
                    this.setState({graphQuery:'Failed'});
                }
            });
        }
        else {
            return
        }
        
    }

    renderQueryResponse = () => {

        if(this.state.graphQuery === 'Success'){
            return (
                    <div style={{color:'#80ff80', fontSize:'14px'}}>
                        Registration Sunccessful. An email has been sent to {this.state.email}
                    </div>
                    )
        }
        else if (this.state.graphQuery === 'Failed'){
            return (<div style={{color:'#ff6666', fontSize:'14px'}}> 
                        Error! Email already exists. Try using different email!
                    </div>)
        }
        else {
            return
        }
    }



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
                                    onChange={this.handleChange('email')}
                                />

                                { 
                                    <div style={{fontSize:'12px', color:'red', textAlign:'left',marginLeft:'17.5%'}}>{this.state.emailMessage}</div>
                                }

                            </Grid>

                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <TextField 
                                    style={{width:'65%', height:'45px'}}
                                    id="outlined-bare"
                                    placeholder="Password"
                                    type="password"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.handleChange('password')}
                                />

                                { 
                                    <div style={{fontSize:'12px', color:'red', textAlign:'left',marginLeft:'17.5%'}}>{this.state.passwordMessage}</div>
                                }

                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <TextField 
                                    style={{width:'65%', height:'45px'}}
                                    id="outlined-bare"
                                    type="password"
                                    placeholder="Confirm Password"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.handleChange('confirmPassword')}
                                />

                                { 
                                    <div style={{fontSize:'12px', color:'red', textAlign:'left',marginLeft:'17.5%'}}>{this.state.isPasswordMatch}</div>
                                }   

                            </Grid>

                            <Grid item xs={12} sm={12} md={12} lg={12} style={{paddingLeft:'18%', marginTop:'15px'}}>
                                <Typography variant="body2" align="left" style={{fontFamily:'Open Sans', color:'#666666', fontSize:'15px'}} >
                                        Password should contain:
                                    </Typography>
                                    <Typography  variant="caption" align="left" style={{color:'#666666'}}>
                                        <ul style={{fontFamily:'Open Sans', fontSize:'14px'}}>
                                            <li>should be 8-12 characters</li>
                                            <li>at least one uppercase</li>
                                            <li>at least one lowercase</li>
                                            <li>at least one number</li>
                                            <li>one special character - #$^+=!*()@%&amp;</li>
                                        </ul>
                                </Typography>
                            </Grid>

                            { 
                                this.renderQueryResponse() 
                            }

                            <Grid item sm={12} md={12} lg={12}>
                                <Button variant="contained" style={{marginTop:'30px', backgroundColor:'#BA5757', color:'#fff', fontFamily:'Open Sans', width:'160px', fontWeight:600}}
                                    onClick={this.signUp}
                                >
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

  
export default graphql(createNewUser, {name: 'createNewUser'})(SignUp);
