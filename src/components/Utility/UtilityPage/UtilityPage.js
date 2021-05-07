import React, { useState } from 'react';
import { Container, CssBaseline, Typography } from "@material-ui/core";
import { DATA, ELECTRICITY_PRICE, WATER_PRICE, GAS_PRICE } from "../../../constants/constants";
import './UtilityPage.css'
import BaseForm from "../BaseForm/BaseForm";
function UtilityPage (props) {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
                <div className="d14"><h3>Utility calculator</h3></div>
                <Typography component="div" className={'blue-container'}>
                    <BaseForm data={DATA} name={'Electricity'} rate={ELECTRICITY_PRICE}/>
                    <BaseForm data={DATA} name={'Water'} rate={WATER_PRICE}/>
                    <BaseForm data={DATA} name={'Сity gas'} rate={GAS_PRICE}/>
                </Typography>
            </Container>
        </React.Fragment>
    );
}

export default UtilityPage;