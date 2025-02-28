import './css/app.css'
import { TranslationProvider } from './context/TranslationProvider'
import { TranslateInput } from './components/TranslateInput'
import { TranslateOutput } from './components/TranslateOutput'
function App() {

  return (
    <TranslationProvider>
        <div className='logo'>
          <img src='/src/assets/logo.svg' alt='logo' />
        </div>
      <main>
        <TranslateInput />
        <TranslateOutput />
      </main>
    </TranslationProvider>
  )
}

export default App
