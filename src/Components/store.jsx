import React from "react";
import { ReactDOM } from "react-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer"
import App from "../App"
import userReducer from "./userReducer";

const store = configureStore({
    reducer:rootReducer,
    ureducer:userReducer,
    wreducer:websiteReducer,
});
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("root")
);