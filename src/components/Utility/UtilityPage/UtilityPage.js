import React from "react";
import { Container, CssBaseline, Typography } from "@material-ui/core";
import "./UtilityPage.css";
import BaseForm from "../BaseForm/BaseForm";
import SimplePopper from "../../SimplePopper/SimplePopper";
import { useUtility } from "./hooks";
import { LangContext } from "../../../context/languages";
import LanguageSelector from "../../LanguageSelector/LanguageSelector";
function UtilityPage() {
  const { data, onInputChange, getSum, clear } = useUtility();
  return (
      <LangContext.Consumer>
          {
              ({ language }) => (
                  <>
                      <CssBaseline />
                      <Container maxWidth="sm">
                          <div className="d14">
                              <h3>{language.header}</h3>
                          </div>
                          <Typography component="div" className={"blue-container"}>
                              <div className="buttons">
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
                                  name={'Electricity'}
                                  previous={data.prevElectricity}
                                  current={data.currElectricity}
                                  onInputChange={onInputChange}
                                  total={getSum}
                                  clear={clear}
                                  sum={data.sumElectricity}
                              />
                              <BaseForm
                                  name={'Water'}
                                  previous={data.prevWater}
                                  current={data.currWater}
                                  onInputChange={onInputChange}
                                  total={getSum}
                                  clear={clear}
                                  sum={data.sumWater}
                              />
                              <BaseForm
                                  name={'Gas'}
                                  previous={data.prevGas}
                                  current={data.currGas}
                                  onInputChange={onInputChange}
                                  total={getSum}
                                  clear={clear}
                                  sum={data.sumGas}
                              />
                          </Typography>
                      </Container>
                  </>
                  )


          }

      </LangContext.Consumer>
  );
}

export default UtilityPage;
