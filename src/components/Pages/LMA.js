import React, { Fragment } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { Grid, Button } from '@material-ui/core';

import SideMenu from '../common/sideMenu';

class LMA extends React.Component {


  render() {
    return (
      <Fragment>
        <Grid container>
            <Grid item lg={2} style={{backgroundColor:'#2E3142'}}>
                <SideMenu />
            </Grid>





            <Grid item lg={10}>
                <Grid container>
                  <Grid item lg={12}>
                  CREATE
                  <Grid container>
                    <Grid item>
                      <Button>
                        Save
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button>
                        Discard
                      </Button>
                    </Grid>
                  </Grid>

                  </Grid>

                </Grid>
            </Grid>
        
        
        
        </Grid>

      </Fragment>
    );
  }
}

export default LMA;