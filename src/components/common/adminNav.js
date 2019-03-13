import React, { Component, Fragment } from 'react';
import { Link as RouterLink } from 'react-router-dom'

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Grid, Link } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';

import MenuIcon from '@material-ui/icons/Menu';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import AccountCircle from '@material-ui/icons/AccountCircleOutlined';
import HomeIcon from '@material-ui/icons/HomeOutlined';

import RightArrow from '@material-ui/icons/ChevronRightOutlined';

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


class AdminNav extends Component {
  constructor(props){
    super(props);
    this.state = {
      top: false,
      left: false,
      bottom: false,
      right: false,
      anchorEl: null,
    }; 
  }

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    toggleDrawer = (side, open) => () => {
        this.setState({
        [side]: open,
        });
    };

  render (){
    const { classes } = this.props;
    const { anchorEl } = this.state;

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
      <AppBar position="static" elevation={0} style={{fontFamily:'Open Sans'}}>
        <Toolbar style={{backgroundColor: '#fff'}}>
        <Hidden only="lg">
          <IconButton onClick={this.toggleDrawer('left', true)} color="inherit" aria-label="Menu" style={{color:'#000'}}>
              <MenuIcon/>
          </IconButton>
        </Hidden>

        <Hidden only={['xs','sm', 'md']}>
            <Link component={RouterLink} underline="none" to={this.props.homeIconPath}>
              <Grid item style={{color:'#ac3939', marginLeft:'30px'}}>
                <HomeIcon /> 
              </Grid>
            </Link>
        </Hidden>

        <Hidden only={['xs','sm', 'md']}>
            <div style={{color:'#000', width:'105px'}}>
                <Grid container>
                    <Grid item>
                      <RightArrow />    
                    </Grid>
                    <Grid item>
                      <Typography style={{marginTop:'2px', color:'#666'}}>
                          {this.props.pageInfo}
                      </Typography>
                    </Grid>

                </Grid>


            </div>
        </Hidden>
        
        <Grid container style={{  justifyContent: 'flex-end' }}>
            
            <Grid item style={{marginRight:'10px'}}>
                <Hidden only={['xs', 'sm', 'md']}>
                    <Link component={RouterLink} to="/signup">
                          <Button className={classes.grow} style={{fontFamily:'Open Sans'}}>
                            Notifications
                          </Button>
                    </Link>
                </Hidden>

                {/* <Hidden only={['xs','sm', 'md']}>
                  <Button className={classes.grow} style={{height:'height', fontSize:'12px'}}>
                      Course
                      <ArrowDown style={{fontSize:'20px', fontWeight:'100'}}/>
                  </Button>                
                </Hidden> */}

                <Hidden only={['xs', 'sm', 'md']}>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu"
                        aria-owns={anchorEl ? 'simple-menu' : undefined}
                        aria-haspopup="true"
                        onClick={this.handleClick}
                        // onMouseLeave={this.handleClose}
                    >
                        <AccountCircle style={{color: '#ac3939'}}/>
                    </IconButton>
                    <Menu
                        disableAutoFocusItem={true}
                        id="simple-menu"
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={this.handleClose}
                    >
                        <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                        <MenuItem onClick={this.handleClose}>My account</MenuItem>
                        <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                    </Menu>

                </Hidden>

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

AdminNav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AdminNav);