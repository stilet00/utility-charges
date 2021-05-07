import React, { useState } from 'react';
import './BaseForm.css'
import { Button, TextField } from "@material-ui/core";
import { useBaseForm } from "./hooks";
function BaseForm ({ data, name, rate }) {
    const { energy, onInputChange, calculatePrice } = useBaseForm(data, rate)
    return (
        <div className={'calc-container'}>
            <h4>{name}</h4>
            <div className={'fields-container'}>
            <TextField  label="previous" variant="outlined" inputProps={{style: { textAlign: 'right' }}} value={energy.previousData} name={'previousData'} onChange={onInputChange}/>
            <TextField  label="current" variant="outlined" inputProps={{style: { textAlign: 'right' }}} value={energy.currentData} name={'currentData'} onChange={onInputChange}/>
            <TextField  label="ГРН" variant="filled" value={energy.sum}></TextField>
                <Button variant="contained" color="primary" style={{ width: '30%' }} onClick={calculatePrice} disabled={!(energy.previousData && energy.currentData)}>
                    Calculate
                </Button>
            </div>
        </div>
    );
}

export default BaseForm;