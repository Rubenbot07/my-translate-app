import './css/app.css'
import { TranslationProvider } from './context/TranslationProvider'
import { TranslateInput } from './components/TranslateInput'
import { TranslateOutput } from './components/TranslateOutput'
function App() {

  return (
    <TranslationProvider>
      <h1>Translate App</h1>
      <TranslateInput />
      <TranslateOutput />
    </TranslationProvider>
  )
}

export default App
