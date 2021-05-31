import React, { useState } from "react";
import "./LanguageSelector.css";
import { LangContext } from "../../context/languages";
function LanguageSelector(props) {
  const [buttonStyleToggler, setButtonStyleToggler] = useState(true);
  function toggleButtonStyle() {
    setButtonStyleToggler(!buttonStyleToggler);
  }
  return (
    <LangContext.Consumer>
      {({ setRussianLang, setUkrainianLang }) => (
        <div className={"language-buttons-container"}>
          <button
            variant={"outlined"}
            disabled={buttonStyleToggler}
            className={
              buttonStyleToggler
                ? "language-button button-active"
                : "language-button"
            }
            onClick={() => {
              setUkrainianLang();
              toggleButtonStyle();
            }}
          ></button>
          <button
            variant={"outlined"}
            disabled={!buttonStyleToggler}
            className={
              !buttonStyleToggler
                ? "language-button button-active"
                : "language-button"
            }
            onClick={() => {
              setRussianLang();
              toggleButtonStyle();
            }}
          ></button>
        </div>
      )}
    </LangContext.Consumer>
  );
}

export default LanguageSelector;
