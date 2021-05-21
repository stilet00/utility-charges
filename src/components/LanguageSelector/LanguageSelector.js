import React from 'react';
import { Button } from "@material-ui/core";
import "./LanguageSelector.css"
import { LangContext } from "../../context/languages";
function LanguageSelector (props) {
    return (
        <LangContext.Consumer>
            {
                ({setRussianLang, setUkrainianLang}) => (
                    <div className={'language-buttons-container'}>
                        <button variant={'outlined'} className={"language-button button-active"} onClick={setUkrainianLang}></button>
                        <button variant={'outlined'} className={"language-button"} onClick={setRussianLang}></button>
                    </div>
                )
            }


        </LangContext.Consumer>
    );
}

export default LanguageSelector;