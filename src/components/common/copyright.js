import React from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    flexGrow: 1,
  },
};

const foot2 = (props) => {
    return(
      <Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} style={{fontSize:'12px', backgroundColor:'#e6e6e6', padding:'20px 0',fontFamily:'Open Sans'}}>
              Copyright© LIFE MASTERY ACADEMY PTE LTD
          </Grid>
      </Grid>
    )
}

foot2.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(foot2);