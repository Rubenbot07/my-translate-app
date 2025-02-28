import { useContext } from "react"
import { TranslationContext } from "../context/TranslationContext"
import { getTranslate } from "../utils/api"

export const TranslateInput = () => {
    const {
        text,
        setText,
        from,
        to,
        setTranslatedText,
        handleLanguageChange,
        copyText,
        listenText,
        inputLength,
        setInputLength,
    } = useContext(TranslationContext)

    const handleTranslate = async (e) => {
        e.preventDefault();
        try {
            const translation = await getTranslate(text, from, to);
            setTranslatedText(translation);
        } catch (error) {
            console.error("Error fetching translation:", error);
        }
    }

    const handleInputChange = (e) => {
        setInputLength(e.target.value.length)
        setText(e.target.value)
    }

    return (
        <section>
            <header>
                <div className="language-container">    
                <button
                        onClick={() => handleLanguageChange("es", "from")}
                        aria-label="Change source language to Spanish"
                        aria-pressed={from === "es"}
                    >
                        Spanish
                    </button>
                    <button
                        onClick={() => handleLanguageChange("en", "from")}
                        aria-label="Change source language to English"
                        aria-pressed={from === "en"}
                    >
                        English
                    </button>
                    <button
                        onClick={() => handleLanguageChange("fr", "from")}
                        aria-label="Change source language to French"
                        aria-pressed={from === "fr"}
                    >
                        French
                    </button>
                </div>
            </header>
            <form onSubmit={handleTranslate}>
                <span  id="instructions" tabIndex="0" className="sr-only">must have at least 1 character </span>
                <input
                    maxLength="500"
                    aria-describedby="instructions"
                    type="text"
                    value={text}
                    onChange={(e) => handleInputChange(e)}
                />
                <span className="input-length">{inputLength}/500</span>
                <footer className="translate-input__footer">
                    <button className="copy__button" type="button" onClick={() => copyText('input')} aria-label="Copy text">
                        <img src="/src/assets/Copy.svg" alt="" />
                    </button>
                    <button className="listen__button" type="button" aria-label="Listen to text" onClick={() => listenText('input')}>
                        <img src="/src/assets/sound_max_fill.svg" alt="" />
                    </button>
                    <button disabled={!text} className="translate__button" type="submit" aria-label="Translate text">
                        <img src="/src/assets/Sort_alfa.svg" alt="" />
                        Translate
                    </button>
                </footer>
            </form>
        </section>
    )
}