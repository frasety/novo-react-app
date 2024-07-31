import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListaDeTarefas from './ListaDeTarefas'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ListaDeTarefas />
    </>
  )
}

export default App
