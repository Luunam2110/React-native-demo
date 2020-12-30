import { combineReducers } from "redux";
import { appReducer } from "./Login";
import {ProfileReducer} from "./Profile"
import { animatedReducer } from "./AnimatedTopBar";

export default combineReducers({appReducer,ProfileReducer,animatedReducer})
