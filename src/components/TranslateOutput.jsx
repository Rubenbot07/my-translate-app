import { useContext } from "react"
import { TranslationContext } from "../context/TranslationContext"
export const TranslateOutput = () => {
    const {
        translatedText,
        setTo
    } = useContext(TranslationContext)

    return (
        <section>
            <header>
                <button onClick={() => setTo("en")}>English</button>
                <button onClick={() => setTo("fr")}>French</button>
                <button onClick={() => setTo("es")}>Spanish</button>
            </header>
            <output>{translatedText}</output>
        </section>
    )
}