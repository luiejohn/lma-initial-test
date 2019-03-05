import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Grid } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import ArrowDown from '@material-ui/icons/ArrowDropDownOutlined';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import MenuIcon from '@material-ui/icons/Menu';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

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


class ButtonAppBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      top: false,
      left: false,
      bottom: false,
      right: false,
    }; 
  }

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };


  render (){
    const { classes } = this.props;
    // Drawer Content
    const sideList = (
      <div>
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    );

    return(  
    <Fragment>
      <AppBar position="static" elevation={0}>
        <Toolbar style={{backgroundColor: '#fff'}}>
        <Hidden only="lg">
          <IconButton onClick={this.toggleDrawer('left', true)} color="inherit" aria-label="Menu" style={{color:'#000'}}>
                      <MenuIcon/>
          </IconButton>
        </Hidden>

        <Hidden only={['xs','sm', 'md']}>
          <div style={{color:'#000', marginLeft:'50px'}}>
            <img src="../../assets/images/LOGO.png" alt="LOGO"/>
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
                      Login
                  </Button>
                </Hidden>
                <Hidden only={['xs', 'sm', 'md']}>
                  <Button className={classes.grow}>
                      Sign Up
                  </Button>
                </Hidden>

                {/* <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                    <UserAccount style={{color: '#ac3939'}}/>
                </IconButton> */}
            </Grid>
        </Grid>
        </Toolbar>
      </AppBar>
      
      {/* Drawer Container */}
      <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
      </Drawer>
    </Fragment>
  )
  
  }
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);