import React, { useState } from 'react';
import { Container, CssBaseline, Typography } from "@material-ui/core";
import { DATA, ELECTRICITY_PRICE, WATER_PRICE, GAS_PRICE } from "../../../constants/constants";
import './UtilityPage.css'
import BaseForm from "../BaseForm/BaseForm";
import SimplePopper from "../../SimplePopper/SimplePopper";
function UtilityPage (props) {
    const [ data, setData] = useState(DATA)
    function onInputChange(e) {
        e.target.value[0] === '0'
            ? e.target.value.slice(1)
            : !isNaN(Number(e.target.value))
            ? setData({...data, [e.target.name]: e.target.value.trim()})
            : setData({...data, previousData: 0})

    }
    function electricitySum() {
        setData({...data, electricitySum: ((data.currElectricity - data.prevElectricity) * ELECTRICITY_PRICE).toFixed(1)})
    }
    function waterSum() {
        setData({...data, waterSum: ((data.currWater - data.prevWater) * WATER_PRICE).toFixed(1)})
    }
    function gasSum() {
        setData({...data, gasSum: ((data.currGas - data.prevGas) * GAS_PRICE).toFixed(1)})
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
                <div className="d14"><h3>Utility calculator</h3></div>
                <Typography component="div" className={'blue-container'}>
                    <SimplePopper total={Number(data.electricitySum) + Number(data.waterSum) + Number(data.gasSum)}/>
                    <BaseForm  name={'Electricity'} previous={data.prevElectricity} current={data.currElectricity} onInputChange={onInputChange} total={electricitySum} sum={data.electricitySum}/>
                    <BaseForm  name={'Water'} previous={data.prevWater} current={data.currWater} onInputChange={onInputChange} total={waterSum} sum={data.waterSum}/>
                    <BaseForm  name={'Gas'} previous={data.prevGas} current={data.currGas} onInputChange={onInputChange} total={gasSum} sum={data.gasSum}/>
                </Typography>
            </Container>
        </React.Fragment>
    );
}

export default UtilityPage;