import React from "react";
import { Container, CssBaseline, Typography } from "@material-ui/core";
import "./UtilityPage.css";
import BaseForm from "../BaseForm/BaseForm";
import SimplePopper from "../../SimplePopper/SimplePopper";
import { useUtility } from "./hooks";
function UtilityPage() {
  const { data, onInputChange, getSum, clear } = useUtility();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <div className="d14">
          <h3>Utility calculator</h3>
        </div>
        <Typography component="div" className={"blue-container"}>
          <SimplePopper
            total={(
              Number(data.sumElectricity) +
              Number(data.sumWater) +
              Number(data.sumGas)
            ).toFixed(2)}
          />
          <BaseForm
            name={"Electricity"}
            previous={data.prevElectricity}
            current={data.currElectricity}
            onInputChange={onInputChange}
            total={getSum}
            clear={clear}
            sum={data.sumElectricity}
          />
          <BaseForm
            name={"Water"}
            previous={data.prevWater}
            current={data.currWater}
            onInputChange={onInputChange}
            total={getSum}
            clear={clear}
            sum={data.sumWater}
          />
          <BaseForm
            name={"Gas"}
            previous={data.prevGas}
            current={data.currGas}
            onInputChange={onInputChange}
            total={getSum}
            clear={clear}
            sum={data.sumGas}
          />
        </Typography>
      </Container>
    </React.Fragment>
  );
}

export default UtilityPage;
