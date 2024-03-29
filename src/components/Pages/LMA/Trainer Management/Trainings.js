import React, { Fragment } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { Grid, Button, Typography, Paper, Divider } from '@material-ui/core';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

class LMA extends React.Component {


  render() {
    return (
      <Fragment>
        <Grid container>
            <Grid item lg={12}>
                <Grid container style={{backgroundColor:'#F0F5F8'}}>

                  <Grid item lg={12}>
                      <Grid container style={{  justifyContent: 'flex-end', backgroundColor:'#fff', padding:'5px' }}>

                          <div className="lma-page-header">
                              Trainings
                          </div>

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

      </Fragment>
    );
  }
}

export default LMA;