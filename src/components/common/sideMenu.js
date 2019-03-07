import React, { Fragment } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import { Grid, Button, Link } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';


import KeyboardBackspace from '@material-ui/icons/KeyboardBackspaceOutlined';
import ArrowDown from '@material-ui/icons/ArrowDropDown';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const ExpansionPanel = withStyles({
  root: {
    border: '1px solid rgba(0,0,0,.125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  },
  expanded: {
    margin: 'auto',
  },
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0,0,0,.03)',
    borderBottom: '1px solid rgba(0,0,0,.125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(props => <MuiExpansionPanelSummary {...props} />);

ExpansionPanelSummary.muiName = 'ExpansionPanelSummary';

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing.unit * 2,
  },
}))(MuiExpansionPanelDetails);

class SideMenu extends React.Component {
    
    state = {
        expanded: 'panel1',
      };
    
      handleChange = panel => (event, expanded) => {
        this.setState({
          expanded: expanded ? panel : false,
        });
      };


    render(){

        return(
            <Fragment>
                <Grid container style={{minHeight: '600px'}}>
                    <Grid item lg={12} style={{flexGrow:1}}>

                        <ExpansionPanel
                            style={{backgroundColor:'#2E3142'}}
                            square
                            >
                                <ExpansionPanelSummary>
                                <Link underline="none" component={RouterLink} to="/dashboard" style={{color:'#fff', marginLeft:'8px'}}>
                                    <Grid container>
                                        <Grid item> 
                                            <KeyboardBackspace style={{color: '#fff'}}/>
                                        </Grid>
                                        <Grid item style={{color: '#fff', marginLeft:'9px', fontFamily:'Open Sans', fontSize:'14px'}}>

                                                Back
                                        </Grid>
                                    </Grid>

                                </Link>

                                </ExpansionPanelSummary>

                                {/* <ExpansionPanelDetails>
                                    <Typography>
                                        Link 1
                                    </Typography>
                                </ExpansionPanelDetails> */}

                        </ExpansionPanel>

                        <ExpansionPanel
                            style={{backgroundColor:'#2E3142'}}
                            square
                            // expanded={expanded === 'panel1'}
                            // onChange={this.handleChange('panel1')}
                            >
                                <ExpansionPanelSummary expandIcon={<ArrowDown style={{color:'#57CB8F'}}/>}>
                                    <Typography style={{color: '#fff', textAlign:'left', fontFamily:'Open Sans', fontSize:'12px'}}>Course Management</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails style={{backgroundColor:'#404356', padding:0}}>
                                            <List style={{flexGrow:1, margin:0}}>
                                                <Link underline="none" component={RouterLink} to="/dashboard/courses" style={{color:'#fff', flexGrow:1, boder:'1px solid #000', textAlign:'left', fontSize:'14px'}}> 
                                                    <ListItem button style={{margin:'0', fontFamily:'Open Sans', fontSize:'12px'}}> 
                                                    <span style={{width:'15px'}}></span>Courses
                                                    </ListItem>
                                                </Link>
                                            </List>
                                </ExpansionPanelDetails>

                            </ExpansionPanel>
                            <ExpansionPanel
                            style={{backgroundColor:'#2E3142'}}
                            square
                            // expanded={expanded === 'panel2'}
                            // onChange={this.handleChange('panel2')}
                            >

                                    <ExpansionPanelSummary expandIcon={<ArrowDown style={{color:'#57CB8F'}}/>}>
                                        <Typography style={{color: '#fff',textAlign:'left', fontFamily:'Open Sans', fontSize:'12px'}}>Events Management</Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails style={{backgroundColor:'#404356', padding:0}}>
                                            <List style={{flexGrow:1, margin:0}}>
                                                <Link underline="none" component={RouterLink} to="/dashboard/events" style={{color:'#fff', flexGrow:1, boder:'1px solid #000', textAlign:'left', fontSize:'14px'}}> 
                                                    <ListItem button style={{margin:'0', fontFamily:'Open Sans', fontSize:'12px'}}> 
                                                    <span style={{width:'15px'}}></span>Events
                                                    </ListItem>
                                                </Link>
                                                <Link underline="none" component={RouterLink} to="/dashboard/all-course-registration" style={{color:'#fff', flexGrow:1, boder:'1px solid #000', textAlign:'left', fontSize:'14px'}}> 
                                                    <ListItem button style={{margin:'0', fontFamily:'Open Sans', fontSize:'12px'}}> 
                                                    <span style={{width:'15px'}}></span>Sessions
                                                    </ListItem>
                                                </Link>
                                            </List>
                                    </ExpansionPanelDetails>
                            </ExpansionPanel>

                            <ExpansionPanel
                            style={{backgroundColor:'#2E3142'}}
                            square
                            // expanded={expanded === 'panel3'}
                            // onChange={this.handleChange('panel3')}
                            >
                                <ExpansionPanelSummary expandIcon={<ArrowDown style={{color:'#57CB8F'}}/>}>
                                    <Typography style={{color: '#fff', textAlign:'left', fontFamily:'Open Sans', fontSize:'12px'}}> Registration Management</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails style={{backgroundColor:'#404356', padding:'0'}}>
                                    <List style={{flexGrow:1}}>
                                        <Link underline="none" component={RouterLink} to="/dashboard/participant-registration-form" style={{color:'#fff', flexGrow:1, boder:'1px solid #000', textAlign:'left', fontSize:'14px'}}> 
                                            <ListItem button style={{margin:'0', fontFamily:'Open Sans', fontSize:'12px'}}> 
                                                <span style={{width:'15px'}}></span>Participant Registration Form
                                            </ListItem>
                                        </Link>
                                        <Link underline="none" component={RouterLink} to="/dashboard/corporate-registration-form" style={{color:'#fff', flexGrow:1, boder:'1px solid #000', textAlign:'left', fontSize:'14px'}}> 
                                            <ListItem button style={{margin:'0', fontFamily:'Open Sans', fontSize:'12px'}}> 
                                            <span style={{width:'15px'}}></span>Corporate Registration Form
                                            </ListItem>
                                        </Link>
                                        <Link underline="none" component={RouterLink} to="/dashboard/customer-invoices" style={{color:'#fff', flexGrow:1, boder:'1px solid #000', textAlign:'left', fontSize:'14px'}}> 
                                            <ListItem button style={{margin:'0', fontFamily:'Open Sans', fontSize:'12px'}}> 
                                            <span style={{width:'15px'}}></span>Invoices
                                            </ListItem>
                                        </Link>
                                        <Link underline="none" component={RouterLink} to="/dashboard/transfer-course" style={{color:'#fff', flexGrow:1, boder:'1px solid #000', textAlign:'left', fontSize:'14px'}}> 
                                            <ListItem button style={{margin:'0', fontFamily:'Open Sans', fontSize:'12px'}}> 
                                            <span style={{width:'15px'}}></span>Transfer Course
                                            </ListItem>
                                        </Link>
                                        <Link underline="none" component={RouterLink} to="/dashboard/refund-course" style={{color:'#fff', flexGrow:1, boder:'1px solid #000', textAlign:'left', fontSize:'14px'}}> 
                                            <ListItem button style={{margin:'0', fontFamily:'Open Sans', fontSize:'12px'}}> 
                                            <span style={{width:'15px'}}></span>Refund Course
                                            </ListItem>
                                        </Link>
                                    </List>

                                </ExpansionPanelDetails>
                            </ExpansionPanel>


                            <ExpansionPanel
                            style={{backgroundColor:'#2E3142'}}
                            square
                            // expanded={expanded === 'panel3'}
                            // onChange={this.handleChange('panel3')}
                            >
                                <ExpansionPanelSummary expandIcon={<ArrowDown style={{color:'#57CB8F'}}/>}>
                                    <Typography style={{color: '#fff', textAlign:'left', fontFamily:'Open Sans', fontSize:'12px'}}> Participant Management</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails style={{backgroundColor:'#404356', padding:'0'}}>
                                    <List style={{flexGrow:1}}>
                                        <Link underline="none" component={RouterLink} to="/dashboard/participants" style={{color:'#fff', flexGrow:1, boder:'1px solid #000', textAlign:'left', fontSize:'14px'}}> 
                                            <ListItem button style={{margin:'0', fontFamily:'Open Sans', fontSize:'12px'}}> 
                                                <span style={{width:'15px'}}></span>Participants
                                            </ListItem>
                                        </Link>
                                        <Link underline="none" component={RouterLink} to="/dashboard/import-database" style={{color:'#fff', flexGrow:1, boder:'1px solid #000', textAlign:'left', fontSize:'14px'}}> 
                                            <ListItem button style={{margin:'0', fontFamily:'Open Sans', fontSize:'12px'}}> 
                                            <span style={{width:'15px'}}></span>Import Data
                                            </ListItem>
                                        </Link>
                                    </List>

                                </ExpansionPanelDetails>
                            </ExpansionPanel>


                            <ExpansionPanel
                            style={{backgroundColor:'#2E3142'}}
                            square
                            // expanded={expanded === 'panel4'}
                            // onChange={this.handleChange('panel4')}
                            >
                                <ExpansionPanelSummary expandIcon={<ArrowDown style={{color:'#57CB8F'}}/>}>
                                    <Typography style={{color: '#fff', textAlign:'left', fontFamily:'Open Sans', fontSize:'12px'}}> Trainer Management</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails style={{backgroundColor:'#404356', padding:0}}>
                                            <List style={{flexGrow:1, margin:0}}>
                                                <Link underline="none" component={RouterLink} to="/dashboard/trainers" style={{color:'#fff', flexGrow:1, boder:'1px solid #000', textAlign:'left', fontSize:'14px'}}> 
                                                    <ListItem button style={{margin:'0', fontFamily:'Open Sans', fontSize:'12px'}}> 
                                                    <span style={{width:'15px'}}></span>Trainers
                                                    </ListItem>
                                                </Link>

                                                <Link underline="none" component={RouterLink} to="/dashboard/trainings" style={{color:'#fff', flexGrow:1, boder:'1px solid #000', textAlign:'left', fontSize:'14px'}}> 
                                                    <ListItem button style={{margin:'0', fontFamily:'Open Sans', fontSize:'12px'}}> 
                                                    <span style={{width:'15px'}}></span>Trainings
                                                    </ListItem>
                                                </Link>
                                            </List>
                                            
                                    </ExpansionPanelDetails>
                            </ExpansionPanel>

                            <ExpansionPanel
                            style={{backgroundColor:'#2E3142'}}
                            square
                            // expanded={expanded === 'panel5'}
                            // onChange={this.handleChange('panel5')}
                            >
                                <ExpansionPanelSummary expandIcon={<ArrowDown style={{color:'#57CB8F'}}/>}>
                                    <Typography style={{color: '#fff', textAlign:'left', fontFamily:'Open Sans', fontSize:'12px'}}> Membership Management</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails style={{backgroundColor:'#404356', padding:0}}>
                                            <List style={{flexGrow:1, margin:0}}>
                                                <Link underline="none" component={RouterLink} to="/dashboard/members" style={{color:'#fff', flexGrow:1, boder:'1px solid #000', textAlign:'left', fontSize:'14px'}}> 
                                                    <ListItem button style={{margin:'0', fontFamily:'Open Sans', fontSize:'12px'}}> 
                                                    <span style={{width:'15px'}}></span>Members
                                                    </ListItem>
                                                </Link>
                                            </List>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>

                            <ExpansionPanel
                            style={{backgroundColor:'#2E3142'}}
                            square
                            // expanded={expanded === 'panel5'}
                            // onChange={this.handleChange('panel5')}
                            >
                                <ExpansionPanelSummary expandIcon={<ArrowDown style={{color:'#57CB8F'}}/>}>
                                    <Typography style={{color: '#fff', textAlign:'left', fontFamily:'Open Sans', fontSize:'12px'}}> Marketing Management</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails style={{backgroundColor:'#404356', padding:0}}>
                                            <List style={{flexGrow:1, margin:0}}>
                                                <Link underline="none" component={RouterLink} to="/dashboard/activities" style={{color:'#fff', flexGrow:1, boder:'1px solid #000', textAlign:'left', fontSize:'14px'}}> 
                                                    <ListItem button style={{margin:'0', fontFamily:'Open Sans', fontSize:'12px'}}> 
                                                    <span style={{width:'15px'}}></span>Activities
                                                    </ListItem>
                                                </Link>

                                                <Link underline="none" component={RouterLink} to="/dashboard/inventory" style={{color:'#fff', flexGrow:1, boder:'1px solid #000', textAlign:'left', fontSize:'14px'}}> 
                                                    <ListItem button style={{margin:'0', fontFamily:'Open Sans', fontSize:'12px'}}> 
                                                    <span style={{width:'15px'}}></span>Inventory
                                                    </ListItem>
                                                </Link>

                                                <Link underline="none" component={RouterLink} to="/dashboard/email-blasts" style={{color:'#fff', flexGrow:1, boder:'1px solid #000', textAlign:'left', fontSize:'14px'}}> 
                                                    <ListItem button style={{margin:'0', fontFamily:'Open Sans', fontSize:'12px'}}> 
                                                    <span style={{width:'15px'}}></span>Email Blasts
                                                    </ListItem>
                                                </Link>

                                            </List>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>

                            <ExpansionPanel
                            style={{backgroundColor:'#2E3142'}}
                            square
                            // expanded={expanded === 'panel5'}
                            // onChange={this.handleChange('panel5')}
                            >
                                <ExpansionPanelSummary expandIcon={<ArrowDown style={{color:'#57CB8F'}}/>}>
                                    <Typography style={{color: '#fff', textAlign:'left', fontFamily:'Open Sans', fontSize:'12px'}}> Sales Management</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails style={{backgroundColor:'#404356', padding:0}}>
                                            <List style={{flexGrow:1, margin:0}}>
                                                <Link underline="none" component={RouterLink} to="/dashboard/promos" style={{color:'#fff', flexGrow:1, boder:'1px solid #000', textAlign:'left', fontSize:'14px'}}> 
                                                    <ListItem button style={{margin:'0', fontFamily:'Open Sans', fontSize:'12px'}}> 
                                                    <span style={{width:'15px'}}></span>Promos
                                                    </ListItem>
                                                </Link>
                                            </List>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>

                            <ExpansionPanel
                            style={{backgroundColor:'#2E3142'}}
                            square
                            // expanded={expanded === 'panel5'}
                            // onChange={this.handleChange('panel5')}
                            >
                                <ExpansionPanelSummary expandIcon={<ArrowDown style={{color:'#57CB8F'}}/>}>
                                    <Typography style={{color: '#fff', textAlign:'left', fontFamily:'Open Sans', fontSize:'12px'}}> Attendance Management</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails style={{backgroundColor:'#404356', padding:0}}>
                                            <List style={{flexGrow:1, margin:0}}>
                                                <Link underline="none" component={RouterLink} to="/dashboard/attendance" style={{color:'#fff', flexGrow:1, boder:'1px solid #000', textAlign:'left', fontSize:'14px'}}> 
                                                    <ListItem button style={{margin:'0', fontFamily:'Open Sans', fontSize:'12px'}}> 
                                                    <span style={{width:'15px'}}></span>Attendance
                                                    </ListItem>
                                                </Link>
                                            </List>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>

                            <ExpansionPanel
                            style={{backgroundColor:'#2E3142'}}
                            square
                            // expanded={expanded === 'panel5'}
                            // onChange={this.handleChange('panel5')}
                            >
                                <ExpansionPanelSummary expandIcon={<ArrowDown style={{color:'#57CB8F'}}/>}>
                                    <Typography style={{color: '#fff', textAlign:'left', fontFamily:'Open Sans', fontSize:'12px'}}> Post Course Management</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails style={{backgroundColor:'#404356', padding:0}}>
                                            <List style={{flexGrow:1, margin:0}}>
                                                <Link underline="none" component={RouterLink} to="/dashboard/feedback-form" style={{color:'#fff', flexGrow:1, boder:'1px solid #000', textAlign:'left', fontSize:'14px'}}> 
                                                    <ListItem button style={{margin:'0', fontFamily:'Open Sans', fontSize:'12px'}}> 
                                                    <span style={{width:'15px'}}></span>Feedback Form
                                                    </ListItem>
                                                </Link>
                                                <Link underline="none" component={RouterLink} to="/dashboard/feedback-results" style={{color:'#fff', flexGrow:1, boder:'1px solid #000', textAlign:'left', fontSize:'14px'}}> 
                                                    <ListItem button style={{margin:'0', fontFamily:'Open Sans', fontSize:'12px'}}> 
                                                    <span style={{width:'15px'}}></span>Feedback Results
                                                    </ListItem>
                                                </Link>
                                                <Link underline="none" component={RouterLink} to="/dashboard/certificate-of-attendance" style={{color:'#fff', flexGrow:1, boder:'1px solid #000', textAlign:'left', fontSize:'14px'}}> 
                                                    <ListItem button style={{margin:'0', fontFamily:'Open Sans', fontSize:'12px'}}> 
                                                    <span style={{width:'15px'}}></span>Certificates
                                                    </ListItem>
                                                </Link>
                                            </List>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>

                            <ExpansionPanel
                            style={{backgroundColor:'#2E3142'}}
                            square
                            // expanded={expanded === 'panel5'}
                            // onChange={this.handleChange('panel5')}
                            >
                                <ExpansionPanelSummary expandIcon={<ArrowDown style={{color:'#57CB8F'}}/>}>
                                    <Typography style={{color: '#fff', textAlign:'left', fontFamily:'Open Sans', fontSize:'12px'}}> Room Management</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails style={{backgroundColor:'#404356', padding:0}}>
                                            <List style={{flexGrow:1, margin:0}}>
                                                <Link underline="none" component={RouterLink} to="/dashboard/rooms" style={{color:'#fff', flexGrow:1, boder:'1px solid #000', textAlign:'left', fontSize:'14px'}}> 
                                                    <ListItem button style={{margin:'0', fontFamily:'Open Sans', fontSize:'12px'}}> 
                                                    <span style={{width:'15px'}}></span>Rooms
                                                    </ListItem>
                                                </Link>
                                            </List>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                    </Grid>
                </Grid>

            </Fragment>

        )
    }
}

export default SideMenu;