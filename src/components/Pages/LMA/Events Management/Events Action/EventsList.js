import React from 'react';

import { Paper, Grid, Input, InputAdornment, Divider } from '@material-ui/core'

import SearchIcon from '@material-ui/icons/Search';
// import MyCourseTable from '../../../../common/courseTable';
import DummyTable from '../DummyTable';


const List = props => {
    return(
        <Paper style={{margin:'15px'}}>
        <Grid container style={{height:'60px', flexFlow:'row', justifyContent:'space-between', alignItems:'right'}}>
        <Grid item style={{margin: '14px 25px', textAlign:'left'}} lg={4}>
                  <Input type="search" placeholder="Search by Title" disableUnderline style={{border:'1px solid #ccc', borderRadius:'10px', padding:'3px 10px 3px 14px', height:'25px',fontSize:'13px', color:'#666'}} 
                    endAdornment={
                      <InputAdornment position="end">
                          <SearchIcon />
                      </InputAdornment>
                    }
                  
                  />
              </Grid>
              <Grid item style={{margin: '10px 30px'}}>
                  
              </Grid>
        </Grid>
        <Divider/>
        <Grid container style={{height:'550px'}}>   
          <DummyTable />
        </Grid>
      </Paper>
    )
} 


export default List;