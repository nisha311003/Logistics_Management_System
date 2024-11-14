import {configureStore} from "@reduxjs/toolkit";
import AppUIStateReducer from "./AppUIStateReducer";
import LogisticStateReducer from "./LogisticStateReducer";
export const appStore=configureStore({
    reducer:{
        appUIState: AppUIStateReducer,
        logisticState: LogisticStateReducer,
    }
});