import React from "react";
import { Button } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import "./ControlButtons.css";
function ControlButtons({ ahead, previous }) {
  return (
    <div className={"control-buttons"}>
      <Button
        color={"primary"}
        variant={"outlined"}
        className={"arrow-button"}
        onClick={previous}
      >
        {" "}
        <ArrowBackIosIcon />
      </Button>
      <Button
        color={"primary"}
        variant={"outlined"}
        className={"arrow-button"}
        onClick={ahead}
      >
        {" "}
        <ArrowForwardIosIcon />
      </Button>
    </div>
  );
}

export default ControlButtons;
