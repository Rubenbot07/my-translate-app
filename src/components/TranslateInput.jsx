import { useContext } from "react"
import { TranslationContext } from "../context/TranslationContext"
import { getTranslate } from "../utils/api"

export const TranslateInput = () => {
    const {
        text,
        setText,
        setFrom,
        from,
        to,
        setTranslatedText,
    } = useContext(TranslationContext)

    const handleTranslate = async () => {
        try {
            const translation = await getTranslate(text, from, to);
            setTranslatedText(translation);
            console.log("Translated text: ", translation);
        } catch (error) {
            console.error("Error fetching translation:", error);
        }
    }


    return (
        <section>
            <header>
                <button onClick={() => setFrom("es")}>Spanish</button>
                <button onClick={() => setFrom("en")}>English</button>
                <button onClick={() => setFrom("fr")}>French</button>
            </header>
            <input type="text" onChange={(e) => setText(e.target.value)}/>
            <button onClick={() => handleTranslate()}>Translate</button>
        </section>
    )
}