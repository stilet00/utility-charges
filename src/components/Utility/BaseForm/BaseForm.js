import React from 'react';
import './BaseForm.css'
import { Button, TextField } from "@material-ui/core";
function BaseForm ({  previous, current, name, onInputChange, sum, total }) {
    return (
        <div className={'calc-container'}>
            <h4>{name}</h4>
            <div className={'fields-container'}>
            <TextField  label="previous" variant="outlined" inputProps={{style: { textAlign: 'right' }}} value={previous} name={'prev' + name} onChange={onInputChange}/>
            <TextField  label="current" variant="outlined" inputProps={{style: { textAlign: 'right' }}} value={current} name={'curr' + name} onChange={onInputChange}/>
            <TextField  label="ГРН" variant="filled" value={sum}></TextField>
                <Button variant="contained" color="primary" style={{ width: '30%' }} onClick={total} >
                    Calculate
                </Button>
            </div>
        </div>
    );
}

export default BaseForm;