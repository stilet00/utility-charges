import React from "react";
import Popper from "@material-ui/core/Popper";
import { Button, Fade } from "@material-ui/core";
import "./SimplePopper.css";
import { usePopper } from "./hooks";
import { LangContext } from "../../context/languages";

export default function SimplePopper({ total }) {
  const { id, handleClick, anchorEl, open } = usePopper();
  return (
      <LangContext.Consumer>
          {
              ({ language }) => (
                  <div className={"popover-component"}>
                      <Button
                          variant="contained"
                          color="primary"
                          aria-describedby={id}
                          type="button"
                          onClick={handleClick}
                      >
                          {language.buttonTotal}
                      </Button>
                      <Popper id={id} open={open} anchorEl={anchorEl} transition>
                          {({ TransitionProps }) => (
                              <Fade {...TransitionProps} timeout={350}>
                                  <div className={"paper"}>
                                      <b>{language.total + ' ' + total + ' ' + language.currency}</b>
                                  </div>
                              </Fade>
                          )}
                      </Popper>
                  </div>
              )
          }
      </LangContext.Consumer>

  );
}
