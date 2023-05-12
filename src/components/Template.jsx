import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLanguage, setTheme } from "../store/slices/settings/settingSlices";
import { translations } from "../assets/translations";

const Template = () => {
    const dispatch = useDispatch();
    const { language } = useSelector((state) => state.settings);

    return(
        <div>
            <h1>{translations[language].title}</h1>
            <h2>{translations[language].description}</h2>
            <button>{translations[language].changeLanguage}</button>
            <button>{translations[language].changeTheme}</button>
        </div>
    );
}

export default Template;