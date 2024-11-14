import {createSlice} from "@reduxjs/toolkit";
import { UIPanel } from "../constrants/UIPanel";
export const appUIStateSlice=createSlice({
    name: "appUIState",
    initialState:{
        activePanel:UIPanel.LoginForm,
    },
    reducers:{
        switchActivePanel:(state, action)=>{
            state.activePanel = action.payload;
        }
    }
});
export const{
    switchActivePanel
}= appUIStateSlice.actions;

export default appUIStateSlice.reducer;