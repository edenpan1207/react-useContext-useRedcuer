import React, { Component } from "react";
import Context from "../contexts/languageContext";

function LanguageSelector() {
  return (
    <div>
      Select a language:
      <Context.Consumer>
        {({ changeLanguage }) => {
          return (
            <>
              <i
                className="flag us"
                onClick={() => changeLanguage("english")}
              />
              <i
                className="flag tw"
                onClick={() => changeLanguage("chinese")}
              />
            </>
          );
        }}
      </Context.Consumer>
    </div>
  );
}

export default LanguageSelector;
