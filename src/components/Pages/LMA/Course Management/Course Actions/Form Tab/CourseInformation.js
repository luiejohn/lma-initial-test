import React, { Fragment } from 'react';

import { Grid, TextField } from '@material-ui/core';

const CourseInformation = () => {
    return(
        <Fragment>
            <Grid item lg={9} style={{borderLeft:'1px solid #ccc', textAlign:'left'}}>
                <Grid container>
                        <Grid item lg={6} style={{textAlign:'left', padding:'0 25px'}}>
                              <div><b>Category</b></div>
                              <TextField 
                                    style={{width:'90%', height:'45px'}}
                                    id="outlined-bare"
                                    type="text"
                                    placeholder=""
                                    margin="dense"
                                    variant="outlined"
                                    // onChange={handleChange('CourseTitle')}
                                />
                        </Grid>
                
                        <Grid item lg={6} style={{textAlign:'left', padding:'0 25px'}}>
                              <div><b>Level</b></div>
                              <TextField 
                                    style={{width:'100%', height:'45px'}}
                                    id="outlined-bare"
                                    type="text"
                                    placeholder=""
                                    margin="dense"
                                    variant="outlined"
                                    // onChange={handleChange('CourseTitle')}
                                />
                        </Grid>
                
                </Grid>

                <Grid container>
                        <Grid item lg={6} style={{textAlign:'left', padding:'0 25px'}}>
                              <div><b>CPD Type</b></div>
                              <TextField 
                                    style={{width:'90%', height:'45px'}}
                                    id="outlined-bare"
                                    type="text"
                                    placeholder=""
                                    margin="dense"
                                    variant="outlined"
                                    // onChange={handleChange('CourseTitle')}
                                />
                        </Grid>
                
                        <Grid item lg={6} style={{textAlign:'left', padding:'0 25px'}}>
                              <div><b>CPD Hours</b></div>
                              <TextField 
                                    style={{width:'100%', height:'45px'}}
                                    id="outlined-bare"
                                    type="text"
                                    placeholder=""
                                    margin="dense"
                                    variant="outlined"
                                    // onChange={handleChange('CourseTitle')}
                                />
                        </Grid>
                </Grid>

                <Grid container>
                        <Grid item lg={12} style={{textAlign:'left', padding:'15px 25px'}}>
                              <div><b>Course Overview</b></div>
                              <TextField 
                                    style={{width:'100%'}}
                                    id="outlined-multiline-static"
                                    multiline
                                    rows="4"
                                    placeholder=""
                                    margin="dense"
                                    variant="outlined"
                                    // onChange={handleChange('CourseTitle')}
                                />
                        </Grid>
                </Grid>

                <Grid container>
                        <Grid item lg={12} style={{textAlign:'left', padding:'15px 25px'}}>
                              <div><b>Terms and Conditions</b></div>
                              <TextField 
                                    style={{width:'100%'}}
                                    id="outlined-multiline-static"
                                    multiline
                                    rows="4"
                                    placeholder=""
                                    margin="dense"
                                    variant="outlined"
                                    // onChange={handleChange('CourseTitle')}
                                />
                        </Grid>
                </Grid>

            </Grid>
        </Fragment>
    )
}

export default CourseInformation;