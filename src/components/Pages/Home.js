import React, { Component, Fragment } from 'react';
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link';

import { Grid, Divider, Button, Typography } from '@material-ui/core';

import Playarrow from '@material-ui/icons/PlayArrow';

import Header from '../common/Header';
import Footer from '../common/footer';
import Copyright from '../common/copyright';

import '../../../src/App.css';

import vision from '../../assets/images/eyeglasses-red.png';
import mission from '../../assets/images/flag-red.png';
import coreValues from '../../assets/images/respect-red.png';
import quote from '../../assets/images/quote.png';

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
                            <Grid item lg={3}>
                                <Grid container style={{height:'100%'}}>
                                    <Grid item lg={9} style={{backgroundColor:'#2E3142', borderRadius:'5px'}}>
                                        <Typography align="right" style={{fontSize:'35px',color: '#fff', fontWeight:'600',padding:'40px 20px 0 0', fontFamily:'Open Sans'}}>
                                            About<br/>
                                            Us
                                        </Typography>
                                    </Grid>
                                    <Grid item lg={3}>

                                    </Grid>
                                </Grid>

                            </Grid>
                            <Grid item lg={4}>
                                <Typography style={{padding:'70px 40px 0 0', fontFamily:'Open Sans', textAlign:'left', fontSize:'16px', align:'justify', letterSpacing:'1px', lineHeight:'1.6'}}>
                                Life Mastery Academy (LMA) was founded on one firm belief - training is the most powerful way to positively contribute to people’s lives. 
                                Training also helps them realise their dreams and achieve their true potential.

                                <br /><br/>
                                Since the inception of LMA, our greatest satisfaction stems from seeing the thousands who have benefited both professionally and personally from our insightful training programmes. 
                                It is what motivates us to continually bring in the best trainers, industry experts, experienced coaches and 
                                training programmes to help our trainees accelerate their success.

                                </Typography>

                            </Grid>
                            <Grid item lg={4} className="aboutImage">
                            
                            </Grid>
                            <Grid item lg={1}>
                            
                            </Grid>
                        </Grid>

                    </Grid>

                    <Grid item lg={12} style={{margin:'100px 0'}}>
                        <Grid container style={{height:'600px', fontFamily:'Open Sans'}}>
                            <Grid item lg={4}>
                                <Grid container>
                                    <Grid item lg={12} style={{paddingTop:'145px'}}>
                                        <img style={{height:'100px', width:'100px'}} src={vision} alt="logo" />

                                        <p style={{fontSize:'25px', fontWeight:600}}>VISION</p>
                                    </Grid>
                                    <Grid item lg={12} style={{padding:'0 25px'}}>
                                        <p>
                                            To become Asia's foremost personal, professional and success development agency
                                        </p>
                                    </Grid>
                                    
                                </Grid>
                            </Grid>
                            <Grid item lg={4} style={{borderRight:'1px solid #ccc', borderLeft:'1px solid #ccc'}}>
                                <Grid container>
                                    <Grid item lg={12} style={{paddingTop:'145px'}}>
                                        <img style={{height:'100px', width:'100px'}} src={mission} alt="logo" />

                                        <p style={{fontSize:'25px', fontWeight:600}}>MISSION</p>
                                    </Grid>
                                    <Grid item lg={12} style={{padding:'0 25px'}}>
                                        <p>
                                            We are commited to empowering lives and bringing out the highest potential in every person, helping them turn to
                                            Possibility into Actuality and Dreams into Realities
                                        </p>
                                    </Grid>
                                    
                                </Grid>
                            </Grid>
                            <Grid item lg={4}>
                            <Grid container>
                                <Grid item lg={12} style={{paddingTop:'145px'}}>
                                        <img style={{height:'100px', width:'100px'}} src={coreValues} alt="logo" />

                                        <p style={{fontSize:'25px', fontWeight:600}}>CORE VALUES</p>
                                    </Grid>
                                    <Grid item lg={12} style={{padding:'0 35px', textAlign:'left', fontSize:'17px'}}>
                                        <p style={{wordSpacing:'3px', letterSpacing:1}}>
                                            <b>L:</b> Lifelong Learning <br />
                                            <b>E:</b> Enriching Lives <br />
                                            <b>A:</b> Achieving Goals <br />
                                            <b>R:</b> Respect Others <br />
                                            <b>N:</b> Nurturing Talents
                                        </p>
                                    </Grid>
                                    
                                </Grid>
                            

                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item lg={12} style={{margin:'50px 0'}}>
                        <Grid container style={{height:'500px', fontFamily:'Open Sans'}}>
                            <Grid item lg={10}>
                                <Grid container style={{paddingTop:'5%'}}>
                                    <Grid item lg={1}>

                                    </Grid>
                                    <Grid item lg={3}>
                                        <Grid container style={{padding:'20px 30px 20px 30px'}}>
                                            <Grid item lg={2}>
                                                <img src={quote} style={{height:'80%', width:'80%'}} alt="quote"/>
                                            </Grid>
                                            <Grid item lg={10}>

                                            </Grid>
                                        </Grid>

                                        <Grid container style={{padding:'20px 30px 20px 30px'}}>
                                            <Grid item lg={12}>
                                                <Typography style={{fontSize:'17px', textAlign:'left'}}>
                                                 <em>Thank you for helping me pass the RES Exams in just one sitting!</em>
                                                </Typography>
                                            </Grid>
                                            <Grid item lg={12}>
                                                <Typography style={{fontSize:'18px', textAlign:'left', paddingTop:'15px'}}>
                                                    Christina
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item lg={4}>
                                        <Grid container style={{padding:'20px 30px 20px 30px'}}>
                                            <Grid item lg={2}>
                                                <img src={quote} style={{height:'80%', width:'80%'}} alt="quote"/>
                                            </Grid>
                                            <Grid item lg={10}>

                                            </Grid>
                                        </Grid>

                                        <Grid container style={{padding:'20px 30px 20px 30px'}}>
                                            <Grid item lg={12}>
                                                <Typography style={{fontSize:'17px', textAlign:'left'}}>
                                                <em>
                                                    I would like to thank Sathia and Kelli for their good and wonderful support whenever I come here.
                                                </em>
                                                </Typography>
                                            </Grid>
                                            <Grid item lg={12}>
                                                <Typography style={{fontSize:'18px', textAlign:'left', paddingTop:'15px'}}>
                                                    Jimmy
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item lg={3}>
                                        <Grid container style={{padding:'20px 30px 20px 30px'}}>
                                            <Grid item lg={2}>
                                                <img src={quote} style={{height:'80%', width:'80%'}} alt="quote"/>
                                            </Grid>
                                            <Grid item lg={10}>

                                            </Grid>
                                        </Grid>

                                        <Grid container style={{padding:'20px 30px 20px 30px'}}>
                                            <Grid item lg={12}>
                                                <Typography style={{fontSize:'17px', textAlign:'left'}}>
                                                    <em>
                                                        Life Mastery Academy is a good training centre. Thank you for the useful notes and materials. I like to attend CPD courses here.
                                                        <br/><br/>
                                                        John is a good trainer
                                                        <br/><br/>
                                                        Thank you LMA!
                                                    </em>
                                                </Typography>
                                            </Grid>
                                            <Grid item lg={12}>
                                                <Typography style={{fontSize:'18px', textAlign:'left', paddingTop:'15px'}}>
                                                    Kelvin
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid item lg={1}>
                                    
                                    </Grid>



                                    <Grid item lg={12}>
                                        Two buttons here
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item lg={2} style={{border:'1px solid #ccc', backgroundColor:'#2E3142', borderRadius:'5px 0 0 5px'}}>
                                <Typography style={{fontSize:'30px', textAlign:'left', padding:'20px 0 0 15px', color:'#fff', fontWeight:600, fontFamily:'Open Sans'}}>
                                    Client and
                                    Testimonials
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>


                    <Grid item lg={12} style={{margin:'50px 0'}}>
                        <Grid container style={{height:'600px'}}>
                            <Grid item lg={3}>
                                <Grid container style={{height:'100%'}}>
                                    <Grid item lg={9} style={{backgroundColor:'#2E3142', borderRadius:'5px'}}>
                                        <Typography align="right" style={{fontSize:'30px',color: '#fff', fontWeight:'600',padding:'40px 20px 0 0', fontFamily:'Open Sans',letterSpacing:'1px'}}>
                                            Where's<br/>
                                            LMA
                                        </Typography>
                                    </Grid>
                                    <Grid item lg={3}>

                                    </Grid>
                                </Grid>

                            </Grid>

                            <Grid item lg={8}>
                                <Grid container>
                                    <Grid item lg={12} style={{width:'100%', height:'350px', background:'#ccc'}}>

                                    </Grid>
                                    <Grid item lg={4} style={{padding:'15px'}}>
                                        <div style={{textAlign:'left', fontSize:'16px', fontFamily:'Open Sans'}}>
                                            <b>Life Mastery Academy Training Centre</b><br/>
                                            <p style={{padding:'5px 0 5px 8px', margin:'7px 0'}}>
                                                Blk 190 Lorong 6, Toa Payoh<br/>

                                                #02-510<br/>

                                                S(310190)<br/>
                                            </p>
                                            (the block opposite Starbucks, HDB Hub. Take the lift behind the Grand  Optical to the 2nd floor, turn left)  
                                        </div>
                                    </Grid>
                                    <Grid item lg={4} style={{padding:'15px'}}>
                                        <div style={{textAlign:'left', fontSize:'16px'}}>
                                                <b>{`Phone:   `}</b> {`  +65 6255 6083`}<br/>

                                                <div style={{marginLeft:'57px'}}>+65 6255 6091</div>
                                                <b>Email:</b>
                                                <br />
                                                info@lifemasteryacademy.com

                                                (General Enquiry)

                                                cpd@lifemasteryacademy.com

                                                (CPD Enquiry)

                                                res@lifemasteryacademy.com

                                                (RES Enquiry)
                                        </div>
                                    </Grid>
                                    <Grid item lg={4} style={{padding:'15px'}}>
                                        <div style={{textAlign:'left', fontSize:'16px'}}>
                                                <b>Office Hours</b><br/>

                                                Blk 190 Lorong 6, Toa Payoh<br/>

                                                #02-510<br/>

                                                S(310190)<br/>

                                                (the block opposite Starbucks, HDB Hub. Take the lift behind the Grand  Optical to the 2nd floor, turn left)  
                                        </div>
                                    </Grid>

                                </Grid>

                            </Grid>
                            <Grid item lg={1}>

                            </Grid>
                        </Grid>
                    </Grid>



                    <Grid item lg={12} style={{margin:'20px 0'}}>
                        <Grid container style={{height:'200px'}}>
                            <Grid item lg={10} style={{border:'1px solid #ccc'}}>

                            </Grid>
                            <Grid item lg={2} style={{border:'1px solid #ccc'}}>

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