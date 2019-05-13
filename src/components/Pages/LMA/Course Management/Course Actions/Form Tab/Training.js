import React, { Fragment } from 'react';

import { Grid, TextField } from '@material-ui/core';

const TrainingCoordinator = () => {
    return(
        <Fragment>
            <Grid item lg={9} style={{borderLeft:'1px solid #ccc', textAlign:'left'}}>
                <Grid container>
                        <Grid item lg={6} style={{textAlign:'left', padding:'25px'}}>
                              <div><b>Name</b></div>
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
                
                        <Grid item lg={6} style={{textAlign:'left', padding:'25px'}}>
                              <div><b>Email Address</b></div>
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
                        
                </Grid>

                
            </Grid>
        </Fragment>
    )
}

export default TrainingCoordinator;