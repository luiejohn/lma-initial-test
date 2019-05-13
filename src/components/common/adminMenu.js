import React, { Component, Fragment } from 'react';
import { Grid, Divider, Link, Button } from '@material-ui/core';

import Popover from '@material-ui/core/Popover';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

// import DraftsIcon from '@material-ui/icons/Drafts';
import ClassIcon from '@material-ui/icons/ClassTwoTone';
import RegistrationIcon from '@material-ui/icons/RecentActorsTwoTone';
import CourseIcon from '@material-ui/icons/AssignmentOutlined';
import CalendarIcon from '@material-ui/icons/DateRangeOutlined';
import EventIcon from '@material-ui/icons/EventOutlined';
import MoneyIcon from '@material-ui/icons/AttachMoneyOutlined';

// import Dropdown from '../common/dropdown';


class adminMenu extends Component {
    constructor(props){
        super(props);
        this.state = {
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
    }


    handleClick = (event, title) => {
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

    //   renderDropDownContent = (type) => {
        // let list = this.state.coursesDropDown;
        // return(
        //     <List>
        //         {
        //             list.map( el=> {
        //                 return(
        //                     <ListItem button>
        //                         <ListItemIcon>
        //                             <DraftsIcon />
        //                         </ListItemIcon>
        //                         <ListItemText primary={el.title} />
        //                     </ListItem>
        //                 )
        //             })
        //         }
        //     </List>
    //     )

    //   }
    
    render(){
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);
        const { selectView } = this.props;

        return(
            <Fragment>
                <Divider />
                <Grid container style={{height:'50px', fontSize:'14px', color:'#595959',textAlign:'center', fontFamily:'Open Sans', backgroundColor:'#2E3142'}}>
                    <Grid item lg={1}>
                        <Button className="myHover" style={{height:'50px', textTransform:'capitalize', width:'100%', color:'#fff'}}
                            aria-owns={open ? 'for-courses' : undefined}
                            aria-haspopup="true"
                            onClick={this.handleClick }
                        >
                            <ClassIcon style={{fontSize:"20px", marginRight:'7px'}} />Courses
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
                                    <ListItem button  onClick={()=> {selectView('Courses'); this.handleClose()}}>
                                        <ListItemIcon>
                                            <CourseIcon />
                                        </ListItemIcon>
                                        <ListItemText primary='Courses' style={{padding:'0 25px 0 0'}} />
                                    </ListItem>
                                    <ListItem button  onClick={()=> {selectView('Events'); this.handleClose()}}>
                                        <ListItemIcon>
                                            <CalendarIcon />
                                        </ListItemIcon>
                                        <ListItemText primary='Event' style={{padding:'0 25px 0 0'}}/>
                                    </ListItem>
                                    <ListItem button  onClick={()=> {selectView('Sessions'); this.handleClose()}}>
                                        <ListItemIcon>
                                            <EventIcon />
                                        </ListItemIcon>
                                        <ListItemText primary='Session' style={{padding:'0 25px 0 0'}}/>
                                    </ListItem>
                                    <ListItem button  onClick={()=> selectView('Sales')}>
                                        <ListItemIcon>
                                            <MoneyIcon />
                                        </ListItemIcon>
                                        <ListItemText primary='Sales' style={{padding:'0 25px 0 0'}}/>
                                    </ListItem>
                                </List>
                        </Popover>

                    </Grid>
                    <Grid item lg={1}>
                        <Button className="myHover" style={{height:'50px', textTransform:'capitalize', width:'100%', color:'#fff'}}

                        >
                            <RegistrationIcon style={{fontSize:"20px", marginRight:'7px'}} />Registration
                        </Button>

                    </Grid>
                    {/* <Grid item lg={1}>
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
                    </Grid> */}
                </Grid>

            </Fragment>
        )
    }
}

export default adminMenu;