import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Location from '@material-ui/icons/LocationOnOutlined';
import Phone from '@material-ui/icons/PhoneOutlined';
import Mail from '@material-ui/icons/MailOutlined';
import { CssBaseline } from '@material-ui/core';

const styles = {
    text: {
        fontSize: '12px',
        backgroundColor: '#f2f2f2',
        alignItem: 'center',
        color: '#333333'
    }
};


export default withStyles(styles)((props) => {
    const { classes } = props;
    return (
            <Fragment>
                <CssBaseline />
                <Grid container style={{padding: '35px 80px', position:'relative'}}>

                    <Grid item xs={12} sm={12} md={4} lg={4} style={{padding:'15px 0'}}>
                        <div style={{textAlign:'left', backgroundColor:'#fff', fontFamily:'Open Sans'}} className={classes.text}>
                            <b>OUR PRODUCTS &amp; SERVICES</b>
                            
                            <div style={{textDecoration: 'underline', paddingTop:'15px'}}>
                                RES
                            </div>
                            
                            <div style={{textDecoration: 'underline', paddingTop:'15px'}}>
                                CPD
                            </div>
                            
                            <div style={{textDecoration: 'underline', paddingTop: '15px'}}>
                                Other Professional Development Courses
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} style={{padding:'15px 0'}}>
                            <Grid container>
                                <Grid item lg={12} style={{textAlign:'left', fontSize:'12px', fontWeight:700, color:'#333333', fontFamily:'Open Sans'}}>
                                    Connect With Us
                                </Grid>
                                <Grid item>
                                    <Location style={{color:'#BA5757'}}/>
                                </Grid>
                                <Grid item style={{textAlign:'left', fontSize: '12px', color:'#333333', fontFamily:'Open Sans'}}>
                                    Blk 190 Lor 6 Toa Payoh<br/>
                                    #02-510<br/>
                                    310190<br />
                                    Singapore
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item>
                                    <Phone style={{color:'#BA5757'}}/>
                                </Grid>
                                <Grid item style={{fontSize:'12px', fontFamily:'Open Sans'}}>
                                    +65 6255 6091
                                </Grid>
                            </Grid>
                            <Grid container style={{fontSize:'12px'}}>
                                <Grid item>
                                    <Mail style={{color:'#BA5757'}}/>
                                </Grid>
                                <Grid item style={{fontFamily:'Open Sans'}}>
                                    info@lifemasteryacademy.com
                                </Grid>
                            </Grid>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} style={{padding:'15px 0'}}>
                        <div style={{textAlign:'left', backgroundColor:'#fff', fontFamily:'Open Sans'}} className={classes.text}>
                            <b>LIFE MASTER ACADEMY PTE LTD</b>
                            <div style={{fontFamily:'Open Sans'}}>
                                Life Mastery Academy was formed based on the conviction 
                                that we can master our life's experiences to transform possibilities into 
                                actuality. We have blended two worlds in our programmers, melding the 
                                experience gained from the unstructured but challenging arena of 
                                enterprise with structure and rigour of the military.
                            </div>
                        </div>
                    </Grid>
            </Grid>
            </Fragment>
    )
})
