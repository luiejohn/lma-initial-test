import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Modal from '@material-ui/core/Modal';


import { Grid, Link } from '@material-ui/core';
// import Paper from '@material-ui/core/Paper';

import EditIcon from '@material-ui/icons/EditOutlined';
import DeleteIcon from '@material-ui/icons/DeleteOutlined';

const styles = theme => ({
  root: {
    width: '100%',
    // marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

let id = 0;
function createData( Ename, courseid, session, status) {
  id += 1;
  return { id, Ename, courseid, session, status };
}

const rows = [
  createData( 'C.1 Dual Representation & Estate Agent Act ($35)', 'C.1', 3, 'Active'),
  createData( 'C.1 Dual Representation & Estate Agent Act ($35)', 'C.1', 4, 'Active'),
  createData( 'C.1 Dual Representation & Estate Agent Act ($35)', 'C.1', 6, 'Active'),
  createData( 'C.1 Dual Representation & Estate Agent Act ($35)', 'C.1', 1, 'Active'),
  createData( 'C.1 Dual Representation & Estate Agent Act ($35)', 'C.1', 2, 'Active'),
  createData( 'C.1 Dual Representation & Estate Agent Act ($35)', 'C.1', 3, 'Active'),
  createData( 'C.1 Dual Representation & Estate Agent Act ($35)', 'C.1', 5, 'Active'),
  createData( 'C.1 Dual Representation & Estate Agent Act ($35)', 'C.1', 5, 'Active'),
  createData( 'C.1 Dual Representation & Estate Agent Act ($35)', 'C.1', 2, 'Active'),
  createData( 'C.1 Dual Representation & Estate Agent Act ($35)', 'C.1', 1, 'Active'),
  createData( 'C.1 Dual Representation & Estate Agent Act ($35)', 'C.1', 1, 'Active'),
  createData( 'C.1 Dual Representation & Estate Agent Act ($35)', 'C.1', 1, 'Active'),
  createData( 'C.1 Dual Representation & Estate Agent Act ($35)', 'C.1', 2, 'Active'),
  createData( 'C.1 Dual Representation & Estate Agent Act ($35)', 'C.1', 3, 'Active'),
  createData( 'C.1 Dual Representation & Estate Agent Act ($35)', 'C.1', 4, 'Active'),
  createData( 'C.1 Dual Representation & Estate Agent Act ($35)', 'C.1', 5, 'Active'),
  createData( 'C.1 Dual Representation & Estate Agent Act ($35)', 'C.1', 3, 'Active'),
  createData( 'C.1 Dual Representation & Estate Agent Act ($35)', 'C.1', 3, 'Active'),
  createData( 'C.1 Dual Representation & Estate Agent Act ($35)', 'C.1', 2, 'Active'),
  createData( 'C.1 Dual Representation & Estate Agent Act ($35)', 'C.1', 2, 'Active'),
  createData( 'C.1 Dual Representation & Estate Agent Act ($35)', 'C.1', 1, 'Active'),
  createData( 'C.1 Dual Representation & Estate Agent Act ($35)', 'C.1', 2, 'Active'),
  createData( 'C.1 Dual Representation & Estate Agent Act ($35)', 'C.1', 3, 'Active'),

];

function courseTable(props) {
  const { classes, handleCourseAction } = props;

  return (
    // <Paper className={classes.root}>
      <Table className={classes.table} style={{fontFamily:'Open Sans'}}>
        <TableHead>
          <TableRow >
            <TableCell align="left" style={{paddingRight:'10px'}}><b>Event ID</b></TableCell>
            <TableCell align="left" style={{paddingRight:'10px'}}><b>Event Name</b></TableCell>
            <TableCell align="left" style={{paddingRight:'10px'}}><b>Course ID</b></TableCell>
            <TableCell align="left" style={{paddingRight:'10px'}}><b>Sessions</b></TableCell>
            <TableCell align="left" style={{paddingRight:'10px'}}><b>Status</b></TableCell>
            <TableCell align="left" style={{paddingRight:'10px'}}><b>Actions</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody style={{fontFamily:'Open Sans'}}>
          {rows.map(row => (
            row.id % 2 === 0 
            ?
            <TableRow key={row.id}>
              <TableCell style={{paddingRight:'10px'}} align="left" component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="left" style={{paddingRight:'10px'}}>{row.Ename}</TableCell>
              <TableCell align="left" style={{paddingRight:'10px'}}>{row.courseid}</TableCell>
              <TableCell align="left" style={{paddingRight:'10px'}}>{row.session}</TableCell>
              <TableCell align="left" style={{paddingRight:'10px'}}>{row.status}</TableCell>
              <TableCell align="right" style={{paddingRight:0}}>
                <Link onClick={() => handleCourseAction('UpdateCourse')}>
                  <Grid container style={{borderBottom:'0'}}>
                    <Grid item>
                      <EditIcon style={{fontSize:'20px'}}/>
                    </Grid>
                    <Grid item>
                      Edit
                    </Grid>
                  </Grid>
                </Link>
                </TableCell>
                <TableCell align="left" style={{paddingLeft:0, paddingRight:0}}>
                  <Link>
                    <Grid container style={{borderBottom:'0'}}>
                      <Grid item>
                        <DeleteIcon style={{fontSize:'20px', color:'#ff8080'}}/>
                      </Grid>
                      <Grid item>
                        Deactivate
                      </Grid>
                    </Grid>
                  </Link>
                </TableCell>
            </TableRow>
            :
            <TableRow key={row.id} style={{backgroundColor:'#F2F2F2'}}>
                <TableCell align="left" style={{paddingRight:'10px'}} component="th" scope="row">
                {row.id}
                </TableCell>
                <TableCell align="left" style={{paddingRight:'10px'}}>{row.Ename}</TableCell>
                <TableCell align="left" style={{paddingRight:'10px'}}>{row.courseid}</TableCell>
                <TableCell align="left" style={{paddingRight:'10px'}}>{row.session}</TableCell>
                <TableCell align="left" style={{paddingRight:'10px'}}>{row.status}</TableCell>
                <TableCell align="right" style={{paddingRight:0}}>
                  <Link onClick={() => handleCourseAction('UpdateCourse')}>
                    <Grid container style={{borderBottom:'0'}}>
                      <Grid item>
                        <EditIcon style={{fontSize:'20px'}}/>
                      </Grid>
                      <Grid item>
                        Edit
                      </Grid>
                    </Grid>
                    </Link>
                </TableCell>
                <TableCell align="left" style={{paddingLeft:0, paddingRight:0}}>
                  <Link>
                    <Grid container style={{borderBottom:'0'}}>
                      <Grid item>
                        <DeleteIcon style={{fontSize:'20px', color:'#ff8080'}}/>
                      </Grid>
                      <Grid item>
                        Deactivate
                      </Grid>
                    </Grid>
                  </Link>
                </TableCell>
          </TableRow>

          ))}
        </TableBody>
      </Table>
    // </Paper>
  );
}

courseTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(courseTable);