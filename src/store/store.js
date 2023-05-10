import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/auth/authSlice";
import settingSlices from "./slices/settings/settingSlices";


const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        settings: settingSlices.reducer
    }
});

export default store;