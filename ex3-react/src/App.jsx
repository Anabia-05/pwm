import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
import { Cabecalho } from './components/Cabecalho'

function App() {
  const [count, setCount] = useState(0);
  const [incremento, setIncremento] = useState(1);
  
  function handleBtIncrementarClick(){
    setCount(count + 1);
  }

  function handleBtLimparClick(){
    setCount(0);
  }

  function handleBtIncrementarChange(){
    setIncremento(EventTarget.value);
  }

  function handleBtIncrementarChange(){
    setIncremento(EventTarget.value);
  }
  return (
    <>
     <Cabecalho/> 
     <p>Quantidade de cliques: {count}</p>
     <button onClick ={handleBtIncrementarClick}> incrementar</button>
     <button onClick ={handleBtLimparClick}> Limpar</button>
     <input value={incremento} onChange={handleBtIncrementarChange}/>
     <button onClick ={handleBtLimparClick}> Limpar</button> 
    </>
  )
}

export default App
