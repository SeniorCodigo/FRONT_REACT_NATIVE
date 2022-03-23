import React, { Component } from 'react';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './redux/reducers'
import AppNavigator from './App'

let middleware = applyMiddleware(thunk, createLogger()) ;

const store = createStore(reducers, middleware);

const  App =()=> {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
  
}

export default App;