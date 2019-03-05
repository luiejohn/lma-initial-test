import React from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    flexGrow: 1,
  },
};

const foot2 = (props) => {
    const { classes } = props;
    return(
        <div>
          Copyright
        </div>
    )
}

foot2.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(foot2);