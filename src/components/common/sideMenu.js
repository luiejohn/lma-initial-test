import React, { Fragment } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import { Grid, Button, Link } from '@material-ui/core';

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
                                    <Grid item> 
                                        <KeyboardBackspace style={{color: '#fff'}}/>
                                    </Grid>
                                    <Grid item style={{color: '#fff'}}>
                                        <Link underline="none" component={RouterLink} to="/dashboard" style={{color:'#fff', marginLeft:'8px'}}>
                                            Back
                                        </Link>
                                    </Grid>

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
                                    <Typography style={{color: '#fff', textAlign:'left'}}>Course Management</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails style={{backgroundColor:'#404356'}}>
                                    <Typography style={{color: '#fff', marginLeft:"25px"}}>
                                        Courses
                                    </Typography>
                                </ExpansionPanelDetails>

                            </ExpansionPanel>
                            <ExpansionPanel
                            style={{backgroundColor:'#2E3142'}}
                            square
                            // expanded={expanded === 'panel2'}
                            // onChange={this.handleChange('panel2')}
                            >

                                    <ExpansionPanelSummary expandIcon={<ArrowDown style={{color:'#57CB8F'}}/>}>
                                        <Typography style={{color: '#fff',textAlign:'left'}}>Events Management</Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails style={{backgroundColor:'#404356'}}>
                                        <Grid container>
                                            <Grid item lg={12}>
                                                <Button style={{width:'100%', color: '#fff'}}>
                                                    Events
                                                </Button>
                                            </Grid>
                                            <Grid item lg={12}>
                                                <Button style={{width:'100%', color: '#fff'}}>
                                                    Attendance Scanning
                                                </Button>
                                            </Grid>
                                        </Grid>

                                    </ExpansionPanelDetails>
                            </ExpansionPanel>

                            <ExpansionPanel
                            style={{backgroundColor:'#2E3142'}}
                            square
                            // expanded={expanded === 'panel3'}
                            // onChange={this.handleChange('panel3')}
                            >
                                <ExpansionPanelSummary expandIcon={<ArrowDown style={{color:'#57CB8F'}}/>}>
                                    <Typography style={{color: '#fff', textAlign:'left'}}> Registration Management</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails style={{backgroundColor:'#404356'}}>
                                    <Typography style={{color: '#fff'}}>
                                        Link 1
                                    </Typography>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>

                            <ExpansionPanel
                            style={{backgroundColor:'#2E3142'}}
                            square
                            // expanded={expanded === 'panel4'}
                            // onChange={this.handleChange('panel4')}
                            >
                                <ExpansionPanelSummary expandIcon={<ArrowDown style={{color:'#57CB8F'}}/>}>
                                    <Typography style={{color: '#fff', textAlign:'left'}}> Trainer Management</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails style={{backgroundColor:'#404356'}}>
                                    <Typography style={{color: '#fff'}}>
                                        Link 1
                                    </Typography>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>

                            <ExpansionPanel
                            style={{backgroundColor:'#2E3142'}}
                            square
                            // expanded={expanded === 'panel5'}
                            // onChange={this.handleChange('panel5')}
                            >
                                <ExpansionPanelSummary expandIcon={<ArrowDown style={{color:'#57CB8F'}}/>}>
                                    <Typography style={{color: '#fff'}}> Member Management</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails style={{backgroundColor:'#404356'}}>
                                    <Typography style={{color: '#fff'}}>
                                        Link 1
                                    </Typography>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                    </Grid>
                </Grid>

            </Fragment>

        )
    }
}

export default SideMenu;