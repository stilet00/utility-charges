import React from "react";
import "./BaseForm.css";
import { Button, TextField } from "@material-ui/core";
import { useForm } from "./hooks";
function BaseForm({
  previous,
  current,
  name,
  onInputChange,
  sum,
  total,
  clear,
}) {
  const { handleFocus } = useForm()
  return (
    <div className={"calc-container"}>
      <h4>{name}</h4>
      <div className={"fields-container"} onClick={handleFocus}>
        <TextField
          label="previous"
          variant="outlined"
          inputProps={{ style: { textAlign: "right" } }}
          value={previous}
          name={"prev" + name}
          onChange={onInputChange}
        />
        <TextField
          label="current"
          variant="outlined"
          inputProps={{ style: { textAlign: "right" } }}
          value={current}
          name={"curr" + name}
          onChange={onInputChange}
        />
        <TextField
          label="ГРН"
          variant="filled"
          value={sum}
          disabled
        ></TextField>
        <div className={"buttons"}>
          <Button
            variant="contained"
            color="primary"
            className={"calculate-button"}
            onClick={() => total(name)}
          >
            Calculate
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className={"calculate-button"}
            onClick={() => clear(name)}
          >
            CLEAR
          </Button>
        </div>
      </div>
    </div>
  );
}

export default BaseForm;
