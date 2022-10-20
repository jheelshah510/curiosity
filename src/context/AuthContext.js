// import { Alert } from "@mui/material";
// import { Redirect } from "react-router-dom";
import { createContext, useReducer } from "react";

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };

    case "LOGOUT":
      return { ...state, user: null };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });
  // dispatch({type:})
  console.log("AuthcontextState", state);

  //   if (state.user) {
  //     return (

  //         <Alert severity="success">
  //           <p>SignUp succesful</p>
  //         </Alert>
  //     );
  //   }
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
