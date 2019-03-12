import React, { Fragment } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { Grid, Button, Typography, Paper, Divider, Input, InputAdornment } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

import MyCourseTable from '../../../common/courseTable';


class Courses extends React.Component {
  render() {
    return (
      <Fragment>
        <Grid container>
            <Grid item lg={12}>
                <Grid container style={{backgroundColor:'#F0F5F8'}}>

                  <Grid item lg={12}>
                      <Grid container style={{  justifyContent: 'flex-end', backgroundColor:'#fff', padding:'5px' }}>

                          <Typography style={{flexGrow:1, textAlign:'left', fontSize:'18px', fontWeight:600, padding:'5px 0 0 7px', fontFamily:'Open Sans'}}>
                              COURSES
                          </Typography>

                        <Grid item style={{padding:'0 10px 0 0'}}>
                          <Button style={{backgroundColor:'#60C78F', color:'#fff', width:'95px', fontFamily:'Open Sans'}}>
                            CREATE
                          </Button>
                        </Grid>
                        {/* <Grid item style={{padding:'0 10px 0 0'}}>
                          <Button style={{backgroundColor:'#303144', color:'#fff', width:'95px', fontFamily:'Open Sans'}}>
                            IMPORT
                          </Button>
                        </Grid> */}
                      </Grid>
                  </Grid>
                

                  <Grid item lg={12}>
                    <Typography style={{textAlign:'left', marginLeft:'15px', marginTop:'10px', fontFamily:'Open Sans', fontSize:'13px'}}>
                        LMA > Course Management > Courses
                    </Typography>
                  </Grid>


                  {/* Should be a new Component to be rerendered */}
                  <Grid item lg={12}>
                      <Paper style={{margin:'15px'}}>
                        <Grid container style={{height:'60px', flexFlow:'row', justifyContent:'space-between', alignItems:'right'}}>
                        <Grid item style={{margin: '14px 25px', textAlign:'left'}} lg={4}>
                                  <Input type="search" disableUnderline style={{border:'1px solid #ccc', borderRadius:'10px', padding:'3px 10px 3px 14px', height:'25px',fontSize:'13px', color:'#666'}} 
                                    endAdornment={
                                      <InputAdornment position="end">
                                          <SearchIcon />
                                      </InputAdornment>
                                    }
                                  
                                  />
                              </Grid>
                              <Grid item style={{margin: '10px 30px'}}>
                                  Pages
                              </Grid>
                        </Grid>
                        <Divider/>
                        <Grid container style={{height:'550px'}}>   
                          <MyCourseTable />
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

export default Courses;