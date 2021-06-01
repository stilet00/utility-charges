import React, { useState } from "react";
import { Container, CssBaseline, Typography } from "@material-ui/core";
import "./UtilityPage.css";
import BaseForm from "../BaseForm/BaseForm";
import SimplePopper from "../../SimplePopper/SimplePopper";
import { useUtility } from "./hooks";
import { LangContext } from "../../../context/languages";
import LanguageSelector from "../../LanguageSelector/LanguageSelector";
import ControlButtons from "../../ControlButtons/ControlButtons";
import {
  ELECTRICITY_PRICE,
  WATER_PRICE,
  GAS_PRICE,
} from "../../../constants/constants";
function UtilityPage() {
  const {
    data,
    onInputChange,
    getSum,
    clear,
    goAhead,
    pageOpened,
    goBack,
  } = useUtility();
  return (
    <LangContext.Consumer>
      {({ language }) => (
        <>
          <CssBaseline />
          <Container maxWidth="sm">
            <div className="d14">
              <h3>{language.header}</h3>
            </div>
            <Typography component="div" className={"blue-container"}>
              <div className="buttons header-buttons">
                <SimplePopper
                  total={(
                    Number(data.sumElectricity) +
                    Number(data.sumWater) +
                    Number(data.sumGas)
                  ).toFixed(2)}
                />
                <LanguageSelector />
              </div>
              <BaseForm
                name={"Electricity"}
                previous={data.prevElectricity}
                current={data.currElectricity}
                onInputChange={onInputChange}
                total={getSum}
                clear={clear}
                header={language.electricity}
                sum={data.sumElectricity}
                shown={pageOpened === 1}
                rate={ELECTRICITY_PRICE + " грн/кВт"}
              />
              <BaseForm
                name={"Water"}
                previous={data.prevWater}
                current={data.currWater}
                onInputChange={onInputChange}
                total={getSum}
                clear={clear}
                header={language.water}
                sum={data.sumWater}
                shown={pageOpened === 2}
                rate={WATER_PRICE + " грн / 1м³"}
              />
              <BaseForm
                name={"Gas"}
                previous={data.prevGas}
                current={data.currGas}
                onInputChange={onInputChange}
                total={getSum}
                clear={clear}
                header={language.gas}
                sum={data.sumGas}
                shown={pageOpened === 3}
                rate={GAS_PRICE + " грн / 1м³"}
              />
              <ControlButtons ahead={goAhead} previous={goBack} />
            </Typography>
          </Container>
        </>
      )}
    </LangContext.Consumer>
  );
}

export default UtilityPage;
