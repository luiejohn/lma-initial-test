import React, { Component, Fragment } from 'react';
import { Grid, Divider, Link, Button } from '@material-ui/core';

import Popover from '@material-ui/core/Popover';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import DraftsIcon from '@material-ui/icons/Drafts';

import Dropdown from '../common/dropdown';

class adminMenu extends Component {
    state = {
        anchorEl: null,
        coursesDropDown: [
            {
                id:'for-courses',
                title: 'Courses'
            },
            {
                id:'for-courses',
                title: 'Events',
            },
            {
                id:'for-courses',
                title: 'Session',
            },
            {
                id:'for-courses',
                title: 'Sales',
            }
        ]
      };

    handleClick = event => {
        console.log(event.currentTarget);
        this.setState({
          anchorEl: event.currentTarget,
        });
      };
    
      handleClose = () => {
        this.setState({
          anchorEl: null,
        });
      };
    
    render(){
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);

        return(
            <Fragment>
                <Divider />
                <Grid container style={{height:'50px', fontSize:'14px', color:'#595959',textAlign:'center'}}>
                    <Grid item lg={1}>
                        <Button className="myHover" style={{height:'50px', textTransform:'capitalize', width:'100%'}}
                            aria-owns={open ? 'for-courses' : undefined}
                            aria-haspopup="true"
                            onClick={this.handleClick}
                        >
                            Courses
                        </Button>

                        <Popover
                            id="for-courses"
                            open={open}
                            anchorEl={anchorEl}
                            onClose={this.handleClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'center',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
                            }}
                            style={{marginTop:'2px'}}
                            >
                            <List>
                                <ListItem button>
                                    <ListItemIcon>
                                        <DraftsIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Course" />
                                </ListItem>
                                <ListItem button>
                                    <ListItemIcon>
                                        <DraftsIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Event" />
                                </ListItem>
                                <ListItem button>
                                    <ListItemIcon>
                                        <DraftsIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Session" />
                                </ListItem>
                                <ListItem button>
                                    <ListItemIcon>
                                        <DraftsIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Sales" />
                                </ListItem>
                            </List>
                        </Popover>

                    </Grid>
                    <Grid item lg={1}>
                        <Button className="myHover" style={{height:'50px', textTransform:'capitalize', width:'100%'}}
                        >
                            Registration
                        </Button>

                    </Grid>
                    <Grid item lg={1}>
                        <Button className="myHover" style={{height:'100%', textTransform:'capitalize', width:'100%'}}>
                            Participants
                        </Button>
                    </Grid>
                    <Grid item lg={1}>
                        <Button className="myHover" style={{height:'100%', textTransform:'capitalize', width:'100%'}}>
                            Trainers
                        </Button>
                    </Grid>
                    <Grid item lg={1}>
                        <Button className="myHover" style={{height:'100%', textTransform:'capitalize', width:'100%'}}>
                            Membership
                        </Button>
                    </Grid>
                    <Grid item lg={1}>
                        <Button className="myHover" style={{height:'100%', textTransform:'capitalize', width:'100%'}}>
                            Marketing
                        </Button>
                    </Grid>
                    <Grid item lg={1}>
                        <Button className="myHover" style={{height:'100%', textTransform:'capitalize', width:'100%'}}>
                            Attendance
                        </Button>
                    </Grid>
                    <Grid item lg={1}>
                        <Button className="myHover" style={{height:'100%', textTransform:'capitalize', width:'100%'}}>
                            Room
                        </Button>
                    </Grid>
                    <Grid item lg={1}>
                        <Button className="myHover" style={{height:'100%', textTransform:'capitalize', width:'100%'}}>
                            Office
                        </Button>
                    </Grid>
                    <Grid item lg={1}>
                        <Button className="myHover" style={{height:'100%', textTransform:'capitalize', width:'100%'}}>
                            Accounts
                        </Button>
                    </Grid>
                </Grid>

            </Fragment>
        )
    }
}

export default adminMenu;