import React from "react";
import "./BaseForm.css";
import { Button, TextField } from "@material-ui/core";
import { useForm } from "./hooks";
import { LangContext } from "../../../context/languages";
import { CSSTransition } from "react-transition-group";
function BaseForm({
  previous,
  current,
  name,
  header,
  onInputChange,
  sum,
  total,
  clear,
  shown,
}) {
  const { handleFocus } = useForm();
  return (
    <LangContext.Consumer>
      {({ language }) => (
          <div className={shown ? "calc-container" : "calc-container hidden"}>
            <CSSTransition
                in={shown}
                timeout={300}
                classNames="slide"
                unmountOnExit
            >
            <h4>{header}</h4>

            </CSSTransition>
            <div className={"fields-container"} onClick={handleFocus}>
              <TextField
                label={language.previous}
                variant="outlined"
                inputProps={{ style: { textAlign: "right" } }}
                value={previous}
                name={"prev" + name}
                onChange={onInputChange}
              />
              <TextField
                label={language.current}
                variant="outlined"
                inputProps={{ style: { textAlign: "right" } }}
                value={current}
                name={"curr" + name}
                onChange={onInputChange}
              />
              <TextField
                label={language.currency}
                variant="filled"
                value={sum}
                disabled
              />
              <div className={"buttons"}>
                <Button
                  variant="contained"
                  color="primary"
                  className={"calculate-button"}
                  onClick={() => total(name)}
                >
                  {language.buttonCalculate}
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  className={"calculate-button"}
                  onClick={() => clear(name)}
                >
                  {language.buttonClear}
                </Button>
              </div>
            </div>
          </div>
      )}
    </LangContext.Consumer>
  );
}

export default BaseForm;
