import React, { Fragment } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { Grid, Button, Typography, Paper, Divider } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import SideMenu from './sideMenu';


// EDIT TO CREATE COURSE COMPONENT

class LMA extends React.Component {


  render() {
    return (
      <Fragment>
        <Grid container>
            <Grid item lg={2} style={{backgroundColor:'#2E3142'}}>
                <SideMenu />
            </Grid>



            <Grid item lg={10}>
                <Divider />
                <Grid container>

                  <Grid item lg={12}>
                      <Grid container lg={12}style={{  justifyContent: 'flex-end', backgroundColor:'#fff', padding:'5px' }}>
                        <Grid item style={{padding:'0 10px 0 0'}}>
                          <Button style={{backgroundColor:'#60C78F', color:'#fff', width:'95px'}}>
                            Save
                          </Button>
                        </Grid>
                        <Grid item style={{padding:'0 10px 0 0'}}>
                          <Button style={{backgroundColor:'#303144', color:'#fff', width:'95px'}}>
                            Discard
                          </Button>
                        </Grid>
                      </Grid>
                  </Grid>
                
                  <Grid item lg={12}>
                    <Typography style={{textAlign:'left', marginLeft:'15px'}}>
                        LMA > Course Management > Courses
                    </Typography>
                  </Grid>

                  <Grid item lg={12}>
                      <Paper style={{margin:'15px'}}>
                        <Grid container style={{height:'550px'}}>

                        </Grid>
                      </Paper>
                  </Grid>



                </Grid>
            </Grid>
        
        </Grid>

      </Fragment>
    );
  }
}

export default LMA;