import  { useState } from 'react'
import { TranslationContext } from './TranslationContext'
export function TranslationProvider({ children }) {
    const [text, setText] = useState(null)
    const [from, setFrom] = useState("en")
    const [to, setTo] = useState("es")
    const [translatedText, setTranslatedText] = useState(null)

    const handleLanguageChange = (lang, type) => {
        const languages = ['en', 'es', 'fr'];
        const index = languages.indexOf(lang);
        languages.splice(index, 1);

        if (type === 'from') {
            setFrom(lang);
            setTo(languages[0]);
        } else if (type === 'to') {
            setTo(lang);
            setFrom(languages[0]);
        }
    };

    const swapLanguages = () => {
        const temp = from;
        setFrom(to);
        setTo(temp);
    };

    return (
        <TranslationContext.Provider value={
            { 
                translatedText,
                setTranslatedText,
                text,
                setText,
                from,
                setFrom,
                to,
                setTo,
                handleLanguageChange,
                swapLanguages
            }
        }>
            {children}
        </TranslationContext.Provider>
    )}