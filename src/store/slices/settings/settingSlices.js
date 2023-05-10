import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    language: "es",
    theme: "light",
}

const settingsSlice = createSlice({
    name: "settings",
    initialState,
    reducers: {
        setLanguage(state, action){
            state.language = action.payload;
        },
        setTheme(state, action){
            state.theme = action.payload;
        },
    }
});

export const {setLanguage, setTheme} = settingsSlice.actions;
export default settingsSlice.reducer;