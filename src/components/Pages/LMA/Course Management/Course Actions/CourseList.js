import React from 'react';

import { Paper, Grid, Input, InputAdornment, Divider } from '@material-ui/core'

import SearchIcon from '@material-ui/icons/Search';
import MyCourseTable from '../../../../common/courseTable';



const List = props => {
  const { handleCourseAction } = props;
    return(
        <Paper style={{margin:'15px'}}>
        <Grid container style={{height:'60px', flexFlow:'row', justifyContent:'space-between', alignItems:'right'}}>
        <Grid item style={{margin: '14px 25px', textAlign:'left'}} md={4} lg={4}>
                  <Input type="search" placeholder="Search by Title" disableUnderline style={{border:'1px solid #ccc', borderRadius:'10px', padding:'3px 10px 3px 14px', height:'25px',fontSize:'13px', color:'#666'}} 
                    endAdornment={
                      <InputAdornment position="end">
                          <SearchIcon style={{color:'rgb(96, 199, 143)'}}/>
                      </InputAdornment>
                    }
                  
                  />
              </Grid>
              <Grid item style={{margin: '10px 30px'}}>
                  
              </Grid>
        </Grid>
        <Divider/>
        <Grid container style={{minHeight:'550px'}}>   
          <MyCourseTable handleCourseAction={handleCourseAction}/>
        </Grid>
      </Paper>
    )
} 


export default List;