import React, { Component, Fragment } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import Header from '../../common/Header';
import Footer from '../../common/footer';
import Copyright from '../../common/copyright'

class Dashboard extends Component {


    render() {
        return(
            <Fragment>
                <Header />
                <div style={{height:'500px'}}>
                    <h1>This is the Manage Users Page</h1>

                    <div>
                        Work in Progress
                    </div>
                </div>


                <Copyright />
            </Fragment>

        )
    }
}

export default Dashboard;