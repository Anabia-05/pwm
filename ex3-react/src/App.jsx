import { useState } from "react";
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
import { Cabecalho } from "./components/Cabecalho";

function App() {
  const [count, setCount] = useState(0);
  const [incremento, setIncremento] = useState(1);

  function handleBtIncrementarClick() {
    setCount(count + 1);
  }

  function handleBtLimparClick() {
    setCount(0);
  }

  function handleBtIncrementarValorClick() {
    setContador(count + incremento);
  }

  function handleBtIncrementarChange() {
    ssetIncremento(parseInt(evt.target.value));
  }
  return (
    <>
      <Cabecalho />
      <p>Quantidade de cliques: {count}</p>
      <button onClick={handleBtIncrementarClick}> incrementar</button>
      <button onClick={handleBtLimparClick}> Limpar</button>
      <input
        type="number"
        value={incremento}
        onChange={handleBtIncrementarChange}
      />
      <button onClick={handleBtIncrementarValorClick}>Incrementar Valor</button>
    </>
  );
}

export default App;
