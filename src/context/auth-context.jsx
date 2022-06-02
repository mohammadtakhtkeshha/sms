import React, { useReducer, useContext } from "react";
import { reducer, initialstate } from "./reduser";

const AuthStateContext = React.createContext();
const AuthDisptacherContext = React.createContext();

export function useAuthstate() {
  const context = useContext(AuthStateContext);
  if (!context) {
    throw Error(" مقدار ندارید ");
  }
  return context;
}

export function useAuthDispatch() {
  const context = useContext(AuthDisptacherContext);
  if (!context) {
    throw Error(" مقدار ندارید ");
  }
  return context;
}
export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialstate);
  return (
    <AuthStateContext.Provider value={state}>
      <AuthDisptacherContext.Provider value={dispatch}>
        {children}
      </AuthDisptacherContext.Provider>
    </AuthStateContext.Provider>
  );
}
