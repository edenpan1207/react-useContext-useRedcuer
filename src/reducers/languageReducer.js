// action type
export const CHANGE_LANGUAGE = "CHANGE_LANGUAGE";

// reducer
export const initialState = { language: "english" };

const languageReducer = (state, action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };
    default:
      return state;
  }
};

export default languageReducer;
