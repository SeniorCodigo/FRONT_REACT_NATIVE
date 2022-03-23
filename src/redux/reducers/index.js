import { combineReducers } from 'redux';
import { RESET_STORE } from '../types'

import LoginReducer from './LoginReducer';

const rootReducer = combineReducers({
    login: LoginReducer,

  });

  const rootReducerBridge = (state, action) => {
    console.log('GlOBAL STATE', state)
    if (action.type === RESET_STORE) {
      state = undefined;
    }
    return rootReducer(state, action)
  }

  export default rootReducerBridge;
