import React, { Component, Fragment } from 'react';
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link';

import { Grid, Paper, Divider } from '@material-ui/core';

import Header from '../common/Header';
import Copyright from '../common/copyright';

import LMA from '../../assets/images/1.png';
import Link2 from '../../assets/images/2.png';
import Link3 from '../../assets/images/3.png';
import Link4 from '../../assets/images/4.png';

import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class Dashboard extends Component {

    render() {

        return(
            <Fragment>
                <Header />
                <Divider />
                <Grid container>
                    <Grid item lg={1}>
                        <Grid container style={{minHeight:'650px', width:'50%', backgroundColor:'#2E3142', flexFlow:'column'}}>
                            <Grid item style={{width:'50%', height:'55px'}}>
                                <Link title="LMA Page" component={RouterLink} to="/lma" style={{padding:'15px', color:'#fff'}}>
                                    <div style={{width:'50px', height:'50px'}}>
                                        <img src={LMA} alt="LMA" style={{width:'25px', height:'25px'}}/>
                                    </div>
                                </Link>

                            </Grid>
                            <Grid item style={{width:'50%', height:'55px'}}>
                                <Link title="User Management Page" component={RouterLink} to="/manage-users" style={{padding:'15px', color:'#fff'}}>
                                    <div style={{width:'50px', height:'50px'}}>
                                        <img src={Link2} alt="Link2" style={{width:'25px', height:'25px'}}/>
                                    </div>
                                </Link>
                            </Grid>
                            <Grid item style={{width:'50%', height:'55px'}}>
                                <Link component={RouterLink} to="/dashboard" style={{padding:'15px', color:'#fff'}}>
                                    <div style={{width:'50px', height:'50px'}}>
                                        <img src={Link3} alt="Link3" style={{width:'25px', height:'25px'}}/>
                                    </div>
                                </Link>
                            </Grid>
                            <Grid item style={{width:'50%', height:'55px'}}>
                                <Link component={RouterLink} to="/dashboard" style={{padding:'15px', color:'#fff'}}>
                                    <div style={{width:'50px', height:'50px'}}>
                                        <img src={Link4} alt="Link4" style={{width:'25px', height:'25px'}}/>  
                                    </div>
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={11}>
                        <Grid container>
                            <Grid item lg={12} style={{backgroundColor:'#fff', textAlign:'left', padding:'15px', fontWeight:600, marginLeft:'-30px'}}>
                                DASHBOARD
                            </Grid>
                            <Grid item lg={12}>
                                <Paper>
                                    <Grid container style={{minHeight:'600px'}}>

                                    </Grid>
                                </Paper>

                                <Grid item lg={12} style={{height:'30px'}}>

                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid> 

                </Grid>

                {/* <div style={{height:'500px'}}>
                    <h1>This is the Dashboard Page!</h1>

                    <div>
                        LMA Page here!
                        <Link component={RouterLink} to="/lma">
                            <button>Let's Go!</button>
                        </Link>
                    </div>

                    <div>
                        Manage Users here!
                        <Link component={RouterLink} to="/manage-users">
                            <button>Let's Go!</button>
                        </Link>
                    </div>
                </div> */}

                <Copyright />
            </Fragment>

        )
    }
}

export default Dashboard;
