import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import UserAccount from '@material-ui/icons/AccountCircleOutlined';
import ArrowDown from '@material-ui/icons/ArrowDropDownOutlined';
import { Grid } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
    height:'100%',
    color: '#333333',
    fontSize: '12px',
    textTransform: 'capitalize',
    paddingLeft: '11px',
    paddingRight: '11px'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
    color: '#333333',
  },
  Toolbar: {
      backgroundColor: '#fff'
  },
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" elevation={0}>
        <Toolbar className={classes.Toolbar}>
        <Hidden only="lg">
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                      <MenuIcon />
          </IconButton>
        </Hidden>

        <Hidden only={['xs','sm', 'md']}>
          <div style={{color:'#000', marginLeft:'50px'}}>
            LOGO
          </div>
        </Hidden>

        <Grid container style={{  justifyContent: 'flex-end' }}>
            
            <Grid item>
                <Hidden only={['xs','sm', 'md']}>
                  <Button className={classes.grow}>
                      Course Registration<ArrowDown style={{fontSize:'18px'}} />
                  </Button>                
                </Hidden>

                <Hidden only={['xs', 'sm', 'md']}>
                  <Button className={classes.grow}>
                      My Course Bookings<ArrowDown style={{fontSize:'18px'}}/>
                  </Button>
                </Hidden>
                <Hidden only={['xs', 'sm', 'md']}>
                  <Button className={classes.grow}>
                      History<ArrowDown style={{fontSize:'18px'}}/>
                  </Button>
                </Hidden>
                <Hidden only={['xs', 'sm', 'md']}>
                  <Button className={classes.grow}>
                      Calendar<ArrowDown style={{fontSize:'18px'}}/>
                  </Button>
                </Hidden>

                <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                    <UserAccount style={{color: '#ac3939'}}/>
                </IconButton>
            </Grid>
        </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);