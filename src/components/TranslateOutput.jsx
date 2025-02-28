import { useContext } from "react"
import { TranslationContext } from "../context/TranslationContext"
export const TranslateOutput = () => {
    const {
        translatedText,
        handleLanguageChange,
        swapLanguages
    } = useContext(TranslationContext)

    return (
        <section>
            <header>
                <div className="language-container">
                    <button onClick={() => handleLanguageChange('en', 'to')}>English</button>
                    <button onClick={() => handleLanguageChange('fr', 'to')}>French</button>
                    <button onClick={() => handleLanguageChange('es', 'to')}>Spanish</button>
                </div>
                <div className="swap-container">
                    <button 
                        className="swap-lang__button"
                        aria-label="swap languages"
                        onClick={() => swapLanguages()}
                    >
                        <img src="/src/assets/Horizontal_top_left_main.svg" alt="" />
                    </button>
                </div>
            </header>
            <output>{translatedText}</output>
        </section>
    )
}