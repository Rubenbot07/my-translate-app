import  { useState } from 'react'
import { TranslationContext } from './TranslationContext'
export function TranslationProvider({ children }) {
    const [text, setText] = useState('')
    const [from, setFrom] = useState("en")
    const [to, setTo] = useState("es")
    const [translatedText, setTranslatedText] = useState('')
    const [inputLength, setInputLength] = useState(0)

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
        const currentText = text
        setFrom(to);
        setTo(temp);
        setText(translatedText || text);
        setTranslatedText(currentText);
    };

    const copyText = (type) => {
        const textToCopy = type === 'input' ? text : translatedText;
        navigator.clipboard.writeText(textToCopy);
    }

    const listenText = (type) => {
        const textToListen = type === 'input' ? text : translatedText;
        const utterance = new SpeechSynthesisUtterance(textToListen);
        speechSynthesis.speak(utterance);
    }

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
                swapLanguages,
                copyText,
                listenText,
                inputLength,
                setInputLength
            }
        }>
            {children}
        </TranslationContext.Provider>
    )}