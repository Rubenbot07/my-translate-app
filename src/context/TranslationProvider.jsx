import  { useState } from 'react'
import { TranslationContext } from './TranslationContext'
export function TranslationProvider({ children }) {
    const [text, setText] = useState(null)
    const [from, setFrom] = useState("en")
    const [to, setTo] = useState("es")
    const [translatedText, setTranslatedText] = useState(null)
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
                setTo
            }
        }>
            {children}
        </TranslationContext.Provider>
    )}