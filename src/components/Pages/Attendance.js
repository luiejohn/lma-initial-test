import React, { Fragment } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { Grid, Button, Typography, Paper, Divider } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import SideMenu from '../common/sideMenu';
import MyCourseTable from '../common/courseTable';

import Header from '../common/Header';
import Footer from '../common/footer';
import Copyright from '../common/copyright'

class LMA extends React.Component {


  render() {
    return (
      <Fragment>
        <Header />
        <Grid container>
            <Grid item lg={2} style={{backgroundColor:'#2E3142'}}>
                <SideMenu />
            </Grid>


            <Grid item lg={10}>
                <Divider />
                <Grid container style={{backgroundColor:'#F0F5F8'}}>

                  <Grid item lg={12}>
                      <Grid container style={{  justifyContent: 'flex-end', backgroundColor:'#fff', padding:'5px' }}>

                          <Typography style={{flexGrow:1, textAlign:'left', fontSize:'18px', fontWeight:600, padding:'5px 0 0 7px',fontFamily:'Open Sans'}}>
                            Attendance
                          </Typography>

                        <Grid item style={{padding:'0 10px 0 0'}}>
                          <Button style={{backgroundColor:'#60C78F', color:'#fff', width:'95px',fontFamily:'Open Sans'}}>
                            CREATE
                          </Button>
                        </Grid>
                        {/* <Grid item style={{padding:'0 10px 0 0'}}>
                          <Button style={{backgroundColor:'#303144', color:'#fff', width:'95px',fontFamily:'Open Sans'}}>
                            IMPORT
                          </Button>
                        </Grid> */}
                      </Grid>
                  </Grid>
                

                  <Grid item lg={12}>
                    <Typography style={{textAlign:'left', marginLeft:'15px', marginTop:'10px',fontFamily:'Open Sans'}}>
                        LMA > Attendance Management > Attendance
                    </Typography>
                  </Grid>

                  <Grid item lg={12}>
                      <Paper style={{margin:'15px'}}>
                        <Grid container style={{height:'50px'}}>
                              <Grid item>

                              </Grid>
                              <Grid item>

                              </Grid>
                        </Grid>
                        <Divider/>
                        <Grid container style={{height:'550px'}}>   

                        </Grid>
                      </Paper>
                  </Grid>



                </Grid>
            </Grid>
        
        </Grid>

      <Copyright />
      </Fragment>
    );
  }
}

export default LMA;