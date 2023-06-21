import { combineReducers } from "redux";

import { userReducer } from "./userReducer";
import {websiteReducer} from "./websiteReducer";

const rootReducer = combineReducers({
user:useReducer,
websites:websiteReducer,
});
export default rootReducer;