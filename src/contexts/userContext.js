import React, { createContext, useReducer } from "react";
import authReducer from "../reducers/authReducer";
import * as _ from 'underscore';

const initialState = {
  isAuthenticated: !_.isEmpty(localStorage.getItem('token')) || false,
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
      <UserContext.Provider value = {
          {
              state, authDispatch, ActionTypes
          }}>
          {props.children}
      </UserContext.Provider>
  )
}