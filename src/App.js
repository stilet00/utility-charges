import "./App.css";
import React from "react";
import UtilityPage from "./components/Utility/UtilityPage/UtilityPage";
import { LangContext, useLanguageContext } from "./context/languages";

function App() {
        const { languageContext } = useLanguageContext()
      return (
                <div className="App">
                    <LangContext.Provider value={languageContext}>
                        <UtilityPage />
                    </LangContext.Provider>
                </div>

      );
}

export default App;
