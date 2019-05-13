import React, { Fragment } from 'react';
import { Grid, Button, Typography, Paper, Divider, TextField, Link } from '@material-ui/core';

import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import { DatePicker } from "material-ui-pickers";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const CourseFee = () => {
    return(
        <Fragment>
                <Grid item lg={9} style={{borderLeft:'1px solid #ccc', textAlign:'left'}}>
                    <Grid container style={{marginTop:'15px'}}>
                        <Grid item lg={6}>
                            
                            <FormControl style={{width:'85%', margin:'0 0 0 5%'}}>
                            <b>Type</b>
                                <TextField
                                    id="outlined-select-currency-native"
                                    select
                                    // value={this.state.currency}
                                    // onChange={handleChange('CourseCode')}
                                    SelectProps={{
                                        native: true,
                                    }}
                                    margin="dense"
                                    variant="outlined"
                                    style={{height:'45px', fontFamily:'Open Sans', marginTop:'10px'}}
                                >

                                        <option>
                                            Option 1
                                        </option>
                                    </TextField>
                            </FormControl>
                        </Grid>
                        <Grid item lg={6}>
                            <b>Valid From</b>
                            <DatePicker
                                    margin="dense"
                                    // value={selectedDateTo}
                                    variant="outlined"
                                    // onChange={this.handleDateChangeTo}
                                    style={{width:'90%', borderRadius:'5px', padding:'5px 5px 0 5px', marginTop:'5px', height:'45px'}}
                                />
                        </Grid>

                        </Grid>


                        <Grid container style={{marginTop:'15px'}}>

                        <Grid item lg={6} style={{paddingLeft:'20px'}}>
                            <div><b>Amount</b></div>
                            <TextField 
                                    style={{width:'90%', height:'45px', marginTop:'10px'}}
                                    id="outlined-bare"
                                    type="number"
                                    placeholder="Number"
                                    margin="dense"
                                    variant="outlined"
                                    // onChange={handleChange('CourseTitle')}
                                />
                        </Grid>
                        <Grid item lg={6}>
                            <b>Valid From</b>
                                <DatePicker
                                        margin="dense"
                                        // value={selectedDateTo}
                                        variant="outlined"
                                        // onChange={this.handleDateChangeTo}
                                        style={{width:'90%', borderRadius:'5px', padding:'5px 5px 0 5px', marginTop:'5px', height:'45px'}}
                                    />
                        </Grid>
                        </Grid>

                        <Grid container style={{margin:'15px 0'}}>
                            <Grid item lg={12}>
                                <Button style={{backgroundColor: 'rgb(96, 199, 143)', color: '#fff', width:'100px', marginLeft:'20px'}}>ADD</Button>
                            </Grid>                    
                        </Grid>


                        <Grid container>
                            <Table style={{margin:'15px 25px'}}>
                            <TableHead>
                                <TableRow style={{backgroundColor:'rgb(46, 49, 66)'}}>
                                <TableCell style={{color:'#f2f2f2'}}>Type</TableCell>
                                <TableCell style={{color:'#f2f2f2'}}>Amount</TableCell>
                                <TableCell style={{color:'#f2f2f2'}}>Valid From</TableCell>
                                <TableCell style={{color:'#f2f2f2'}}>Valid To</TableCell>
                                <TableCell style={{color:'#f2f2f2'}}>Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>

                                <TableRow>
                                    <TableCell component="th" scope="row">
                                    Member Fee
                                    </TableCell>
                                    <TableCell>$40</TableCell>
                                    <TableCell>1/10/2018</TableCell>
                                    <TableCell>12/31/2018</TableCell>
                                    <TableCell></TableCell>
                                </TableRow>

                                <TableRow style={{backgroundColor: '#d9d9d9' }}>
                                    <TableCell component="th" scope="row">
                                    <b>Total</b>
                                    </TableCell>
                                    <TableCell><b>$40</b></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            </TableBody>
                            </Table>
                        </Grid>

                </Grid>
    </Fragment>

    )
}

export default CourseFee;