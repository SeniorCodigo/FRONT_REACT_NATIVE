import {
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGIN_PURGE
  } from '../types'
  
  const stateLoginData = {
    loginData: {},
    loginError: {}
  };
  
  export default LoginData = (state = stateLoginData, action) => {
  
    switch (action.type) {
      case LOGIN_SUCCESS:
        return { ...state, loginData: action.payload };
      case LOGIN_ERROR:
        return { ...state, loginError: action.payload };
      case LOGIN_PURGE:
        return { ...stateLoginData, loginPurge: action.payload };
    }
    return state;
  }