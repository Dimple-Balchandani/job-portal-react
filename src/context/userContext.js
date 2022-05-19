import React, { createContext, useReducer } from "react";
import authReducer from "../reducers/authReducer";

const initialState = {
  isAuthenticated: false,
  user: {},
  token: null
}
const ActionTypes = {LOGIN: 'LOGIN', LOGOUT: 'LOGOUT'};

export const UserContext = createContext({
  state: initialState,
  authDispatch: () => null,
  ActionTypes: ActionTypes
});

export const AuthContextProvider = (props) => {
  const [state, authDispatch] = useReducer(authReducer, initialState);

  return (
      <UserContext.Provider value={
          {
              state, authDispatch, ActionTypes
          }}>
          {props.children}
      </UserContext.Provider>
  )
}