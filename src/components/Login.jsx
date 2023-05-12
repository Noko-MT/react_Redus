import React from "react";
import { setLanguage, setTheme } from "../store/slices/settings/settingSlices";
import { translations } from "../assets/translations";
import { useSelector, useDispatch } from "react-redux";

const Login = () => {
    const dispatch = useDispatch();
    const {lang} = useSelector((state) => state.settings);
    return(
        <div>
            <input type="text" placeholder={translations[language].placeholderUser}/>
            <input type="email" placeholder={translations[language].placeholderPassword}/>
            <button>{translations[language].button}</button>
        </div>
    );
}

export default Login;