import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: "",
    correo: "",
    token: ""
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login(state, action){
            state.id = action.payload.id;
            state.correo = action.payload.correo;
            state.token = action.payload.token;
        },
        logout(state,action){
            state.id = "";
            state.correo = "";
            state.token = "";
        }    
    }
});

export const {login, logout} = authSlice.actions;
export default authSlice.reducer;