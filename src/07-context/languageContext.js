import * as React from 'react';

export const LanguageContext = React.createContext({
    language: '',
    setLanguage: () => {
        console.warn('Provider is not initialized');
    },
});

export const LanguageProvider = props => {
    const [language, setLanguage] = React.useState('en');

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {props.children}
        </LanguageContext.Provider>
    );
};
