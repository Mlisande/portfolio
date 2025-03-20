import {createContext, useState } from "react";

export const languageContext = createContext();

export const LanguageProvinder = ({children}) => {
    const [language, setLanguage] = useState('en');

    const toggleLanguage = () => {
        setLanguage((prevLang) => (prevLang === 'fr' ? 'en' : 'fr'));
    };

    return (
        <languageContext.Provider value={{ language, toggleLanguage}}>
            {children}
        </languageContext.Provider>
    )
}
