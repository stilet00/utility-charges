import React from "react";
import { Button } from "@material-ui/core";
import DoubleArrowRoundedIcon from '@material-ui/icons/DoubleArrowRounded';
import "./ControlButtons.css";
function ControlButtons({ ahead, previous }) {
  return (
    <div className={"control-buttons"}>
      <Button
        color={"primary"}
        variant={"outlined"}
        onClick={previous}
      >
        <DoubleArrowRoundedIcon className={'backward-arrow'} />
      </Button>
      <Button
        color={"primary"}
        variant={"outlined"}
        onClick={ahead}
      >
        <DoubleArrowRoundedIcon />
      </Button>
    </div>
  );
}

export default ControlButtons;
