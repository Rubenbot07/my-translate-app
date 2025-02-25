// https://es.libretranslate.com
// get language list https://es.libretranslate.com/languages

export async function getTranslate(text, from, to) {
    const response = await fetch(`https://api.mymemory.translated.net/get?q=${text}&langpair=${from}|${to}`)
    const data = await response.json()
    console.log("data", data, from, to)
    return data.responseData.translatedText
}
    