import { useEffect, useState } from "react";
import { Cabecalho } from "./components/Cabecalho";
import { addTarefa, deleteTarefa, getTarefas, updateTarefas } from "./api";
import { Tarefa } from "./components/Tarefa";
import "./App.css";

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [descricao, setDescricao] = useState("");

  async function carregarTarefas() {
    const tarefasTemp = await getTarefas();
    setTarefas(tarefasTemp);
  }

  async function adicionarTarefa() {
    if (!descricao.trim()) {
      alert("Preencha o campo descrição");
      return;
    }

    const novaTarefa = await addTarefa({ descricao, concluida: false });
    if (novaTarefa != null) {
      console.log("novaTarefa", novaTarefa);
      setDescricao("");
      await carregarTarefas();
    }
  }

  useEffect(() => {
    carregarTarefas();
  }, []);

  return (
    <>
      <Cabecalho />
      <p>
        <input
          value={descricao}
          onChange={(evt) => setDescricao(evt.target.value)}
        />
        <button onClick={adicionarTarefa}>Adicionar</button>
      </p>
      <ul>
        {tarefas.map((tarefa) => (
          <Tarefa
            key={tarefa.objectId}
            tarefa={tarefa}
            onUpdateClick={async () => {
              tarefa.concluida = !tarefa.concluida;
              const tarefaAtualizada = await updateTarefas(tarefa);
              console.log("tarefaAtualizada", tarefaAtualizada);
              if (tarefaAtualizada) {
                carregarTarefas();
              }
            }}
            onDeleteClick={async () => {
              const tarefaDeletada = await deleteTarefa(tarefa);
              console.log("tarefaDeletada", tarefaDeletada);
              if (tarefaDeletada) {
                carregarTarefas();
              }
            }}
          />
        ))}
      </ul>
    </>
  );
}

export default App;
