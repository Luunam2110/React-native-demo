import { combineReducers } from "redux";
import { appReducer } from "./Login";
import {ProfileReducer} from "./Profile"

export default combineReducers({appReducer,ProfileReducer})
