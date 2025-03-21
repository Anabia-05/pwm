import { useState } from "react";
//import reactLogo from "./assets/react.svg";
//import viteLogo from "/vite.svg";
import "./App.css";
import { Cabecalho } from "./components/Cabecalho";

const urlStarWars = "https://swapi.dev/api/people/?page=1";
function App() {
  const [personagens, setPersonagens] = useState([]);

  async function carregar(){
    try{
      const response = await fetch(urlStarWars);
      console.log("response",response);
      const data= await response.json();
      console.log("data",data)

    }
    catch (err){
      console.log("err: ",err);
    }
  }

  return <>
  <button onClick={carregar}>  Carregar</button>
  <Cabecalho/>
  </>;
}

export default App;
