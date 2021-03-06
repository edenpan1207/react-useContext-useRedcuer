import React from "react";
import LanguageContext from "../contexts/languageContext";
import ColorContext from "../contexts/colorContext";

class Button extends React.Component {
  renderSubmit(value) {
    return value === "english" ? "Submit" : "送出";
  }

  render() {
    return (
      <ColorContext.Consumer>
        {(color) => (
          <button className={`ui button ${color}`}>
            {
              <LanguageContext.Consumer>
                {({ language }) => this.renderSubmit(language)}
              </LanguageContext.Consumer>
            }
          </button>
        )}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
