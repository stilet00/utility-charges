import React, { useState } from "react";
import { Container, CssBaseline, Typography } from "@material-ui/core";
import "./UtilityPage.css";
import BaseForm from "../BaseForm/BaseForm";
import SimplePopper from "../../SimplePopper/SimplePopper";
import { useUtility } from "./hooks";
import { LangContext } from "../../../context/languages";
import LanguageSelector from "../../LanguageSelector/LanguageSelector";
import ControlButtons from "../../ControlButtons/ControlButtons";
function UtilityPage() {
  const { data, onInputChange, getSum, clear } = useUtility();
  const [pageOpened, setPageOpened] = useState(1);
  function goAhead() {
    pageOpened !== 3 ? setPageOpened(pageOpened + 1) : setPageOpened(1);
  }
  function goBack() {
    pageOpened !== 1 ? setPageOpened(pageOpened - 1) : setPageOpened(3);
  }
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
