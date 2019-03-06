import React, { Component, Fragment } from 'react';
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link';

class Dashboard extends Component {


    render() {
        return(
            <Fragment>
                <div style={{height:'500px'}}>
                    <h1>This is the Dashboard Page!</h1>

                    <div>
                        LMA Page here!
                        <Link component={RouterLink} to="/lma">
                            <button>Let's Go!</button>
                        </Link>
                    </div>

                    <div>
                        Manage Users here!
                        <Link component={RouterLink} to="/manage-users">
                            <button>Let's Go!</button>
                        </Link>
                    </div>
                </div>
            </Fragment>

        )
    }
}

export default Dashboard;