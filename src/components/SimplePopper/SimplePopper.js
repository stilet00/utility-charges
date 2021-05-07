import React from "react";
import Popper from "@material-ui/core/Popper";
import { Button, Fade } from "@material-ui/core";
import "./SimplePopper.css";
import { usePopper } from "./hooks";

export default function SimplePopper({ total }) {
  const { id, handleClick, anchorEl, open } = usePopper();
  return (
    <div className={"popover-component"}>
      <Button
        variant="contained"
        color="primary"
        aria-describedby={id}
        type="button"
        onClick={handleClick}
      >
        Show total
      </Button>
      <Popper id={id} open={open} anchorEl={anchorEl} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <div className={"paper"}>
              <b>TOTAL: {total} грн</b>
            </div>
          </Fade>
        )}
      </Popper>
    </div>
  );
}
