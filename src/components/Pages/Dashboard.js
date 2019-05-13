import React, { Component, Fragment } from 'react';
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link';

import { Grid, Paper, Divider } from '@material-ui/core';

import Header from '../common/Header';
import AdminNav from '../common/adminNav';
import Copyright from '../common/copyright';

import LMA from '../../assets/images/1.png';
import Link2 from '../../assets/images/2.png';
import Link3 from '../../assets/images/3.png';
import Link4 from '../../assets/images/4.png';

// import { withStyles } from '@material-ui/core/styles';
// import Tooltip from '@material-ui/core/Tooltip';
// import PropTypes from 'prop-types';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
import { RegistrationIcon } from '@material-ui/icons/RecentActorsTwoTone';

class Dashboard extends Component {
    state = {
        pageInfo:'Dashboard',
        homeIconPath:"/"
    }

    render() {

        return(
            <Fragment>
                <AdminNav pageInfo={this.state.pageInfo} homeIconPath={this.state.homeIconPath}/>
                <Divider />
                <Grid container>
                    <Grid item md={1} lg={1}>
                        <Grid container style={{minHeight:'910px', width:'60%', backgroundColor:'#2E3142', flexFlow:'column', textAlign:'center'}}>
                            <Grid item style={{ height:'65px'}}>
                                <Link title="LMA Page" component={RouterLink} to="/lma" style={{padding:'15px', color:'#fff'}}>
                                    <div style={{width:'100%', height:'100%'}}>
                                        <img src={LMA} alt="LMA" style={{width:'28px', height:'28px'}}/>
                                    </div>
                                </Link>

                            </Grid>
                            <Grid item style={{ height:'55px'}}>
                                <Link title="User Management Page" component={RouterLink} to="/manage-users" style={{padding:'15px', color:'#fff'}}>
                                    <div style={{width:'100%', height:'100%'}}>
                                        <img src={Link2} alt="Link2" style={{width:'28px', height:'28px'}}/>
                                    </div>
                                </Link>
                            </Grid>
                            <Grid item style={{ height:'55px', margin:'10px 0'}}>
                                <Link component={RouterLink} to="/dashboard" style={{padding:'15px 25px', color:'#fff'}}>
                                    <div style={{width:'100%', height:'100%'}}>
                                        <img src={Link3} alt="Link3" style={{width:'28px', height:'28px'}}/>
                                    </div>
                                </Link>
                            </Grid>
                            <Grid item style={{ height:'55px', margin:'10px 0'}}>
                                <Link component={RouterLink} to="/dashboard" style={{padding:'15px', color:'#fff'}}>
                                    <div style={{width:'100%', height:'100%'}}>
                                        <img src={Link4} alt="Link4" style={{width:'28px', height:'28px'}}/>  
                                    </div>
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={11} lg={11}>
                        <Grid container>
                            <Grid item md={12} lg={12} style={{backgroundColor:'#fff', textAlign:'left', padding:'15px', fontWeight:600, marginLeft:'-30px'}}>
                                DASHBOARD
                            </Grid>
                            <Grid item md={12} lg={12} style={{marginRight:'35px'}}>
                                
                                <Grid container>
                                    <Grid item md={4} lg={4}>
                                        <Paper className="dashboard-stat-sm" style={{backgroundColor:'#74b9ff'}}>
                                            <div className="text-left">Courses</div>
                                        </Paper>               
                                    </Grid>

                                    <Grid item md={4} lg={4}>
                                        <Paper className="dashboard-stat-sm" style={{backgroundColor:'#ff7675'}}>
                                            <div className="text-left">Events</div>
                                        </Paper>               
                                    </Grid>

                                    <Grid item md={4} lg={4}>
                                        <Paper className="dashboard-stat-sm" style={{backgroundColor:'#00b894'}}>
                                            <div className="text-left">Participants</div>
                                        </Paper>               
                                    </Grid>
                                </Grid>
                                
                                <Grid container>
                                    <Grid item md={12} lg={12} >
                                        <Paper className="dashboard-stat-lg">
                                            <div className="text-left">Statistics</div>
                                        </Paper>               
                                    </Grid>
                                </Grid>

                                <Grid container>
                                    <Grid item md={12} lg={12}>
                                        <Paper className="dashboard-stat-lg">
                                            <div className="text-left">Registration</div>
                                        </Paper>               
                                    </Grid>
                                </Grid>

                            </Grid>


                    
                        </Grid>
                    </Grid> 

                </Grid>

            </Fragment>

        )
    }
}

export default Dashboard;
