/**
 * @format
 */

import {AppRegistry} from 'react-native';
import 'react-native-gesture-handler';
import React,{useState} from 'react';
import App from './App';
import {name as appName} from './app.json';
import LoginComponent from "./Components/Login/LoginComponent";
import store from "./redux/store";
import { Provider } from "react-redux";


const Ans =()=>(
  <Provider store={store}>
    <App/>
  </Provider>
)


AppRegistry.registerComponent(appName, () => Ans);
