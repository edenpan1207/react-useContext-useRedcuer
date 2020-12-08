import React, { useContext } from "react";
import LanguageContext from "../contexts/languageContext";

function LanguageSelector() {
  const context = useContext(LanguageContext);
  const { changeLanguage } = context;
  return (
    <div>
      Select a language:
      <>
        <i className="flag us" onClick={() => changeLanguage("english")} />
        <i className="flag tw" onClick={() => changeLanguage("chinese")} />
      </>
    </div>
  );
}

export default LanguageSelector;
