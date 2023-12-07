

import './App.css'
import LoginForm from './components/loginForm'
import { ContextoProvider } from './context/contexto'
import NavBarra from './components/navbar/navbar'



function App() {


  return (
    <>

      <ContextoProvider>
        <NavBarra />
        <LoginForm nombreFormulario={"Login"} />
      </ContextoProvider>

    </>
  )
}

export default App
