import React, { Component, Fragment } from 'react';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { MenuItem } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

class select extends Component {
    state = {
        type: '',
        name: 'hai',
        labelWidth: 0,
        options: [
            {
                type: 'User',
                value: 'user'
            },
            {
                type: 'Admin',
                value: 'admin'
            }
        ]
      };

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
        console.log('read!');
    };

    render (){
        return(
        <Fragment>
            <FormControl variant="outlined" style={{width:'60%', height:'45px',margin:'15px 0 5px 0'}}>
                {/* <InputLabel htmlFor="usertype">
                    User Type
                </InputLabel> */}
                <Select
                    value="usertype"
                    onChange={this.handleChange('type')}
                    input={
                    <OutlinedInput
                        labelWidth={this.state.labelWidth}
                        name="age"
                        id="outlined-age-simple"
                    />
                    }
                >
                    {
                        this.state.options.map(option => {
                            return <MenuItem key={option.type} value={option.value}>{option.type}</MenuItem>

                        })
                    }
                </Select>
                </FormControl>
        </Fragment>
        )

    }
}

export default select;