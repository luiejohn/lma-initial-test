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
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs };
}

const rows = [
  createData(1.1, 'C.1 Dual Representation & Estate Agent Act ($35)', 'CPD', '3.00'),
  createData(1.1, 'C.1 Dual Representation & Estate Agent Act ($35)', 'CPD', '3.00'),
  createData(1.1, 'C.1 Dual Representation & Estate Agent Act ($35)', 'CPD', '3.00'),
  createData(1.1, 'C.1 Dual Representation & Estate Agent Act ($35)', 'CPD', '3.00'),
  createData(1.1, 'C.1 Dual Representation & Estate Agent Act ($35)', 'CPD', '3.00'),
  createData(1.1, 'C.1 Dual Representation & Estate Agent Act ($35)', 'CPD', '3.00'),
  createData(1.1, 'C.1 Dual Representation & Estate Agent Act ($35)', 'CPD', '3.00'),
  createData(1.1, 'C.1 Dual Representation & Estate Agent Act ($35)', 'CPD', '3.00'),
  createData(1.1, 'C.1 Dual Representation & Estate Agent Act ($35)', 'CPD', '3.00'),
  createData(1.1, 'C.1 Dual Representation & Estate Agent Act ($35)', 'CPD', '3.00'),
];

function courseTable(props) {
  const { classes } = props;

  return (
    // <Paper className={classes.root}>
      <Table className={classes.table} style={{fontFamily:'Open Sans'}}>
        <TableHead>
          <TableRow >
            <TableCell align="left"><b>LMA Course Code</b></TableCell>
            <TableCell align="left">Course Name</TableCell>
            <TableCell align="left">Course Type</TableCell>
            <TableCell align="left">Duration</TableCell>
          </TableRow>
        </TableHead>
        <TableBody style={{fontFamily:'Open Sans'}}>
          {rows.map(row => (
            row.id % 2 === 0 
            ?
            <TableRow key={row.id}>
              <TableCell align="left" component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.calories}</TableCell>
              <TableCell align="left">{row.fat}</TableCell>
              <TableCell align="left">{row.carbs}</TableCell>
              <TableCell align="right" style={{paddingRight:0}}>
                <Link>
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
                <TableCell align="left" component="th" scope="row">
                {row.name}
                </TableCell>
                <TableCell align="left">{row.calories}</TableCell>
                <TableCell align="left">{row.fat}</TableCell>
                <TableCell align="left">{row.carbs}</TableCell>
                <TableCell align="right" style={{paddingRight:0}}>
                  <Link>
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