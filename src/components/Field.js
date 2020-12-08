import React, { useContext } from "react";
import languageContext from "../contexts/languageContext";

function Field() {
  const context = useContext(languageContext);

  const text = context.language === "english" ? "Name" : "名字";
  return (
    <div className="ui field">
      <label>{text}</label>
      <input />
    </div>
  );
}

// class Field extends React.Component {
//   static contextType = languageContext;
//   render() {
//     const text = this.context.language === "english" ? "Name" : "名字";
//     return (
//       <div className="ui field">
//         <label>{text}</label>
//         <input />
//       </div>
//     );
//   }
// }

export default Field;
