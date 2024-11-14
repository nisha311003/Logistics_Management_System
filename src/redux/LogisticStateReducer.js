import {createSlice} from "@reduxjs/toolkit";
import { UIPanel } from "../constrants/UIPanel";
export const logisticStateSlice=createSlice({
    name:"logisticState",
    initialState:{
        isLogin: false, 
    },
    reducers:{
        checkLogin:(state, action)=>{
            state.isLogin = action.payload;
        }
    }
});
export const{
    checkLogin
}= logisticStateSlice.actions;

export default logisticStateSlice.reducer;