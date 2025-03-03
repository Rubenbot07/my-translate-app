import { useContext } from "react"
import { TranslationContext } from "../context/TranslationContext"
import copyIcon from "../assets/Copy.svg"
import listenIcon from "../assets/sound_max_fill.svg"
import swapIcon from "../assets/Horizontal_top_left_main.svg"
export const TranslateOutput = () => {
    const {
        translatedText,
        handleLanguageChange,
        swapLanguages,
        to,
        listenText,
        copyText,
    } = useContext(TranslationContext)

    return (
        <section className="translate-container">
            <header className="translate-output__header component-header">
                <div className="language-container">
                <button
                        onClick={() => handleLanguageChange('en', 'to')}
                        aria-label="Change target language to English"
                        aria-pressed={to === 'en'}
                        className={`header-button ${to === "en" ? "lang-active" : ""}`}
                        
                    >
                        English
                    </button>
                    <button
                        onClick={() => handleLanguageChange('fr', 'to')}
                        aria-label="Change target language to French"
                        aria-pressed={to === 'fr'}
                        className={`header-button ${to === "fr" ? "lang-active" : ""}`}
                        
                    >
                        French
                    </button>
                    <button
                        onClick={() => handleLanguageChange('es', 'to')}
                        aria-label="Change target language to Spanish"
                        aria-pressed={to === 'es'}
                        className={`header-button ${to === "es" ? "lang-active" : ""}`}
                        
                    >
                        Spanish
                    </button>
                </div>
                <div className="swap-container">
                    <button 
                        className="swap-lang__button"
                        aria-label="swap languages"
                        onClick={() => swapLanguages()}
                    >
                        <img src={swapIcon} alt=""/>
                    </button>
                </div>
            </header>
            <output aria-live="polite" value={translatedText} >{translatedText}</output>
            <footer className="translate-output__footer">
                <button className="copy__button" aria-label="Copy translated text" onClick={() => copyText('output')}>
                    <img src={copyIcon} alt="" />
                </button>
                <button className="listen__button" aria-label="Listen to translated text" onClick={() => listenText('output')}>
                    <img src={listenIcon} alt=""/>
                </button>
            </footer>
        </section>
    )
}