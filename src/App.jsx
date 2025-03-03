import './css/app.css'
import { TranslationProvider } from './context/TranslationProvider'
import { TranslateInput } from './components/TranslateInput'
import { TranslateOutput } from './components/TranslateOutput'
import { Toast } from './components/Toast.jsx'
import logo from './assets/logo.svg'
function App() {


  return (
    <TranslationProvider>
      <Toast />
      <div className='logo'>
        <img src={logo} alt='logo' />
      </div>
      <main>
        <TranslateInput />
        <TranslateOutput />
      </main>
    </TranslationProvider>
  )
}

export default App
