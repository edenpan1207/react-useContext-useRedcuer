import React, { useReducer } from "react";
import languageReducer, {
  CHANGE_LANGUAGE,
  initialState,
} from "../reducers/languageReducer";

const LanguageContext = React.createContext("chinese");

export function LanguageStore(props) {
  const [mainLanguage, dispatch] = useReducer(languageReducer, initialState);

  const changeLanguage = (language) => {
    dispatch({
      type: CHANGE_LANGUAGE,
      payload: language,
    });
  };

  return (
    <LanguageContext.Provider value={{ ...mainLanguage, changeLanguage }}>
      {props.children}
    </LanguageContext.Provider>
  );
}

export default LanguageContext;
