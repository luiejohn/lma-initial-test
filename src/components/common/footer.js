import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import ArrowDown from '@material-ui/icons/ArrowDropDownOutlined';
import Location from '@material-ui/icons/LocationOnOutlined';
import Phone from '@material-ui/icons/PhoneOutlined';
import Mail from '@material-ui/icons/MailOutlined';
import { CssBaseline } from '@material-ui/core';

const styles = {
    text: {
        fontSize: '12px',
        backgroundColor: '#f2f2f2',
        height:'45px',
        alignItem: 'center',
        paddingTop: '25px',
        color: '#333333'
    }
};


export default withStyles(styles)((props) => {
    const { classes } = props;
    return (
            <Fragment>
                <CssBaseline />
                <Grid container style={{postion:'relative', border: '1px solid black'}} >

                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <div style={{textAlign:'left', backgroundColor:'#fff'}} className={classes.text}>
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
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <div style={{textAlign:'left', backgroundColor:'#fff'}} className={classes.text}>
                            <b>CONNECT WITH US</b>
                            <Grid container>
                                <Grid item>
                                    <Location style={{color:'#BA5757'}}/>
                                </Grid>
                                <Grid item>
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
                                <Grid item>
                                    +65 6255 6091
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item>
                                    <Mail style={{color:'#BA5757'}}/>
                                </Grid>
                                <Grid item>
                                    info@lifemasteryacademy.com
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <div style={{textAlign:'left', backgroundColor:'#fff'}} className={classes.text}>
                            <b>LIFE MASTER ACADEMY PTE LTD</b>
                            <div>
                                Life Mastery Academy was formed based on the conviction 
                                that we can master our life's experiences to transform possibilities into 
                                actuality. We have blended two worlds in our programmers, melding the 
                                experience gained from the unstructured but challenging arena of 
                                enterprise with structure and rigour of the military.
                            </div>
                        </div>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <div style={{textAlign:'left', backgroundColor:'#fff'}} className={classes.text}>
                            <b>Copy</b>
                        </div>
                    </Grid>
                </Grid>

            </Fragment>
    )
})
