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
    } = useContext(TranslationContext)

    const handleTranslate = async () => {
        try {
            const translation = await getTranslate(text, from, to);
            setTranslatedText(translation);
            console.log(from, to);
        } catch (error) {
            console.error("Error fetching translation:", error);
        }
    }


    return (
        <section>
            <header>
                <div className="language-container">    
                    <button onClick={() => handleLanguageChange("es", "from")}>Spanish</button>
                    <button onClick={() => handleLanguageChange("en", "from")}>English</button>
                    <button onClick={() => handleLanguageChange("fr", "from")}>French</button>
                </div>
            </header>
            <input type="text" onChange={(e) => setText(e.target.value)}/>
            <button onClick={() => handleTranslate()}>Translate</button>
        </section>
    )
}