import React, { Fragment } from 'react';

import AdminNav from '../common/adminNav';
import { Grid, Paper, Divider, Button, Link } from '@material-ui/core';

import logo from '../../assets/images/LOGO.png'
import glasses from '../../assets/images/eyeglasses-red.png'

const UserProfile = () => {
    return (
        <Fragment>
            <AdminNav 
                pageInfo="My Account" homeIconPath="/dashboard"
            />
                <Grid container style={{backgroundColor:'#ccc', fontFamily:'Open Sans'}}>
                        <Grid item lg={12} style={{minHeight:'500px'}}>
                            <Paper style={{margin:'2% 5% 5% 5%'}}>
                                <Grid container>
                                    <Grid item lg={12} style={{textAlign:'left', padding:'30px', fontSize:'30px', fontWeight:600, color:'#404040', backgroundColor: ''}}>
                                        Account Settings
                                        
                                    </Grid>
                                </Grid>
                                <Divider />
                                <Grid container>
                                    <Grid item lg={3} style={{height:'relative', borderRight: '1px solid #ccc'}}>
                                        <Grid container>
                                            <Grid item lg={12} style={{height:'250px'}}>
                                                <img src={glasses}  style={{height:'86%', width:'70%', margin:'25px', borderRadius:'50%', border:'1px solid #ccc'}}/> 
                                            </Grid>
                                            <Grid item lg={12} style={{padding:'35px 0'}}>
                                                <Button style={{backgroundColor: 'rgb(96, 199, 143)', width:'135px', color:'#fff'}}>Upload</Button>
                                            </Grid>
                                        </Grid>

                                    </Grid>


                                    <Grid item lg={9}>
                                        <Grid container style={{padding:'5%'}}>
                                            <Grid item lg={12} style={{textAlign:'left', fontSize:'27px', fontWeight:600, color:'#404040'}}>
                                                Personal Information
                                            </Grid>
                                            <Grid container style={{textAlign:'left', fontSize:'16px',padding:'35px 0'}}>
                                                <Grid item lg={6} style={{color:'#404040'}}>
                                                    <b>Full Name</b>
                                                </Grid>
                                                <Grid item lg={6} style={{color:'#404040'}}>
                                                    <b>Email Address</b>
                                                </Grid>
                                                <Grid item lg={6} style={{padding:'15px 15px 15px 0', color:'#737373', fontSize:'15px'}}>
                                                    John Doe
                                                </Grid>
                                                <Grid item lg={6} style={{padding:'15px 15px 15px 0', color:'#737373', fontSize:'15px'}}>
                                                    Administrator@test.com
                                                </Grid>
                                            </Grid>

                                            <Grid container style={{textAlign:'left', fontSize:'16px'}}>
                                                <Grid item lg={6} style={{color:'#404040'}}>
                                                    <b>Phone Number</b>
                                                </Grid>
                                                <Grid item lg={6} style={{color:'#404040'}}>
                                                    <b>Account Type</b>
                                                </Grid>
                                                <Grid item lg={6} style={{padding:'15px 15px 15px 0', color:'#737373', fontSize:'15px'}}>
                                                    +1-202-555-0187
                                                </Grid>
                                                <Grid item lg={6} style={{padding:'15px 15px 15px 0', color:'#737373', fontSize:'15px'}}>
                                                    Administrator
                                                </Grid>
                                            </Grid>
                                            <Grid item lg={12} style={{textAlign:'left', fontSize:'27px', fontWeight:600, color:'#404040', padding:'35px 25px 35px 0'}}>
                                                Account Security
                                            </Grid>
                                            <Grid container style={{textAlign:'left', fontSize:'16px'}}>
                                                <Grid item lg={6} style={{color:'#404040'}}>
                                                    <b>Password</b>
                                                </Grid>
                                                <Grid item lg={6} style={{color:'#404040'}}>
                                                    <b>Recovery Email</b>
                                                </Grid>
                                                <Grid item lg={6} style={{padding:'15px 15px 15px 0', color:'#737373', fontSize:'15px'}}>
                                                    Your 8-10 digit password
                                                </Grid>
                                                <Grid item lg={6} style={{padding:'15px 15px 15px 0', color:'#737373', fontSize:'15px'}}>
                                                    alternat.mail@test.com
                                                </Grid>
                                            </Grid>

                                            <Grid item lg={12} style={{textAlign:'left', fontSize:'25px', fontWeight:600, color:'#404040', padding:'25px 25px 25px 0'}}>
                                                Deactivate Account
                                            </Grid>
                                            <Grid container style={{textAlign:'left', fontSize:'15px'}}>
                                                <Grid item lg={12} style={{color:'#404040'}}>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                                                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                                                    culpa qui officia deserunt mollit anim id est laborum
                                                </Grid>
                                                <Grid item lg={12} style={{padding:'30px 15px 25px 0', color:'#737373', fontSize:'15px'}}>
                                                    <Link underline="none">
                                                        <Button style={{backgroundColor:'#ff6666',color:'#fff', width:'135px'}}> 
                                                            Deactivate
                                                        </Button>
                                                    </Link>
                                                </Grid>
                                            </Grid>

                                        </Grid>


                                    </Grid>

                                </Grid>
                                
                            </Paper>
                        </Grid>

                </Grid>
        </Fragment>
    )
}

export default UserProfile;