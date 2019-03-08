import React, { Component, Fragment } from 'react';
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link';

import { Grid, Divider, Button, Typography } from '@material-ui/core';

import Playarrow from '@material-ui/icons/PlayArrow';

import Header from '../common/Header';
import Footer from '../common/footer';
import Copyright from '../common/copyright';

import '../../../src/App.css';
// import imageOne from '../../assets/images/home-header.jpg'

class Dashboard extends Component {


    render() {
        return(
            <Fragment>
                <Header/>
                <Grid container>
                    <Grid item lg={12} className="homeImage" style={{height:'720px'}}>
                        {/* <img src={imageOne} alt="1" style={{postion:'absolute', zIndex:'-5', height:'100%', width:'100%'}}/> */}
                        <Grid container style={{height:'510px'}}>
                            <Grid item lg={8}>

                            </Grid>

                            <Grid item lg={3} style={{textAlign:'left', fontSize:'35px',color:'#fff', fontWeight:'500', flexFlow:'row', justifyContent:'center'}}>
                                <Grid container style={{height:'100%', flexFlow:'row',alignItems:'center', justifyContent:'center'}}>
                                    <Grid item lg={12}>
                                        <Typography className="myFont" style={{fontSize:'35px',color:'#fff', fontWeight:'600', marginBottom:'35px', marginLeft:'-25px', fontFamily:'Open Sans'}}>
                                            LET US GUIDE YOU<br/>
                                            TO GREATER<br />
                                            HEIGHTS<br />
                                        </Typography>
                                        <Link component={RouterLink} underline="none" to="/signup" style={{marginTop:'135px'}}>
                                            <Button variant="outlined" style={{border:'2px solid #fff', padding: '3px 30px',  color:'#fff', marginLeft:'-25px', fontFamily:'Open Sans'}}>
                                                Enroll Now
                                            </Button>
                                        </Link>
                                    </Grid>
                                </Grid>
                            
                            </Grid>
                            <Grid item>

                            </Grid>
                        </Grid>
                        <Grid container style={{height:'210px'}}>
                            <Grid item lg={1} style={{flexGrow:1}}>

                            </Grid>
                            <Grid item style={{flexGrow:1, paddingLeft:'25px'}}>
                                <Typography style={{fontSize:'25px', color: '#fff', fontWeight:550, marginTop:'30px', borderRight:'3px solid #fff', fontFamily:'Open Sans'}} align="left">
                                    2019<br/>
                                    FEB. 20<br /><br />

                                    Lorem ipsum dolor
                                </Typography>
                            </Grid>
                            <Grid item style={{flexGrow:1, paddingLeft:'25px'}}>
                                <Typography style={{fontSize:'25px', color: '#fff', fontWeight:550, marginTop:'30px',borderRight:'3px solid #fff', fontFamily:'Open Sans'}} align="left">
                                    2019<br/>
                                    FEB. 20<br /><br />

                                    Lorem ipsum dolor
                                </Typography>
                            </Grid>
                            <Grid item style={{flexGrow:1, paddingLeft:'25px'}}>
                                <Typography style={{fontSize:'25px', color: '#fff', fontWeight:550, marginTop:'30px',borderRight:'3px solid #fff', fontFamily:'Open Sans'}} align="left">
                                    2019<br/>
                                    FEB. 20<br /><br />

                                    Lorem ipsum dolor
                                </Typography>
                            </Grid>
                            <Grid item style={{flexGrow:1, paddingLeft:'25px'}}>
                                <Typography style={{fontSize:'25px', color: '#fff', fontWeight:550, marginTop:'30px', fontFamily:'Open Sans'}} align="left">
                                    2019<br/>
                                    FEB. 20<br /><br />

                                    <span style={{fontSize:'23px'}}>Lorem ipsum dolor</span>
                                </Typography>
                            </Grid>
                            <Grid item lg={1}>

                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={12} style={{height:'400px'}}>
                        <Grid container style={{height:'300px'}}>
                            <Grid item lg={4} style={{border:'1px solid #ccc'}}>
                                <Grid container>
                                    <Grid item lg={12} style={{textAlign:'left', padding:'25px 0 0 30px', fontSize:'25px', fontWeight:600, fontFamily:'Open Sans'}}>
                                        Real Estate Salesperson<br/>
                                        (RES) Course
                                    </Grid>
                                    <Grid item lg={12} style={{textAlign:'left', padding:'25px 0 0 30px'}}>
                                        <Divider  style={{width:'15%', backgroundColor:'pink', height:'6px'}}/>
                                    </Grid>
                                    <Grid item lg={12} style={{textAlign:'left', padding:'25px 0 0 25px', fontFamily:'Open Sans'}}>
                                        Agents to be
                                    </Grid>

                                    <Grid item lg={12}>
                                        <Grid container style={{height:'100%', flexFlow:'column', justifyContent:'flex-end'}}>
                                            <Grid item lg={12} style={{height:'125px'}}>
                                            
                                            </Grid>
                                            <Grid item lg={12}>
                                                <Typography style={{textAlign:'right', marginRight:'10px'}}>
                                                    <Playarrow style={{fontSize:'40px'}}/>  
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                </Grid>
                            </Grid>
                            <Grid item lg={4} style={{border:'1px solid #ccc'}}>
                                <Grid container>
                                    <Grid item lg={12} style={{textAlign:'left', padding:'25px 0 0 30px', fontSize:'25px', fontWeight:600, fontFamily:'Open Sans'}}>
                                        Continuing Professional <br/>
                                        Development (CPD) Course
                                    </Grid>
                                    <Grid item lg={12} style={{textAlign:'left', padding:'25px 0 0 30px'}}>
                                        <Divider  style={{width:'15%', backgroundColor:'pink', height:'6px'}}/>
                                    </Grid>
                                    <Grid item lg={12} style={{textAlign:'left', padding:'25px 0 0 25px'}}>
                                        Existing Agents
                                    </Grid>

                                    <Grid item lg={12}>
                                        <Grid container style={{height:'100%', flexFlow:'column', justifyContent:'flex-end'}}>
                                                <Grid item lg={12} style={{height:'125px'}}>
                                                
                                                </Grid>
                                                <Grid item lg={12}>
                                                    <Typography style={{textAlign:'right', marginRight:'10px'}}>
                                                        <Playarrow style={{fontSize:'40px'}}/>  
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                    </Grid>

                                </Grid>
                            </Grid>
                            <Grid item lg={4} style={{border:'1px solid #ccc'}}>
                                <Grid container>
                                    <Grid item lg={12} style={{textAlign:'left', padding:'25px 0 0 30px', fontSize:'25px', fontWeight:600}}>
                                        Fundamentals of Facility<br/>
                                        Management (FFM) Course
                                    </Grid>
                                    <Grid item lg={12} style={{textAlign:'left', padding:'25px 0 0 30px'}}>
                                        <Divider  style={{width:'15%', backgroundColor:'pink', height:'6px'}}/>
                                    </Grid>
                                    <Grid item lg={12} style={{textAlign:'left', padding:'25px 0 0 25px'}}>
                                        Other Courses
                                    </Grid>

                                    <Grid item lg={12}>
                                        <Grid container style={{height:'100%', flexFlow:'column', justifyContent:'flex-end'}}>
                                            <Grid item lg={12} style={{height:'125px'}}>
                                            
                                            </Grid>
                                            <Grid item lg={12}>
                                                <Typography style={{textAlign:'right', marginRight:'10px'}}>
                                                    <Playarrow style={{fontSize:'40px'}}/>  
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                </Grid>
                            </Grid>
                        </Grid>

                    </Grid>

                    <Grid item lg={12}>
                        <Grid container style={{height:'500px'}}>
                            <Grid item lg={1}>
                            
                            </Grid>
                            <Grid item lg={2} style={{border:'1px solid #ccc', backgroundColor:'#2E3142', borderRadius:'5px'}}>
                                <Typography align="right" style={{fontSize:'20px',color: '#fff', fontWeight:'600',padding:'40px 20px 0 0', fontFamily:'Open Sans'}}>
                                    About<br/>
                                    Us
                                </Typography>
                            </Grid>
                            <Grid item lg={4}>
                                <Typography style={{padding:'70px 40px 0 40px', fontFamily:'Open Sans'}}>
                                Life Mastery Academy (LMA) was founded on one firm belief - training is the most powerful way to positively contribute to people’s lives. 
                                Training also helps them realise their dreams and achieve their true potential.

                                <br /><br/>
                                Since the inception of LMA, our greatest satisfaction stems from seeing the thousands who have benefited both professionally and personally from our insightful training programmes. 
                                It is what motivates us to continually bring in the best trainers, industry experts, experienced coaches and 
                                training programmes to help our trainees accelerate their success.

                                </Typography>

                            </Grid>
                            <Grid item lg={4} style={{border:'1px solid #ccc', backgroundColor:'#ccc'}}>
                            
                            </Grid>
                            <Grid item lg={1}>
                            
                            </Grid>
                        </Grid>

                    </Grid>

                    <Grid item lg={12} style={{margin:'50px 0'}}>
                        <Grid container style={{height:'500px'}}>
                            <Grid item lg={4}>

                            </Grid>
                            <Grid item lg={4} style={{borderRight:'1px solid #ccc', borderLeft:'1px solid #ccc'}}>

                            </Grid>
                            <Grid item lg={4}>

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

export default Dashboard;