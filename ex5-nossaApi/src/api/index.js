import axios from "axios";

const urlTarefa = "https://parseapi.back4app.com/classes/Tarefa";
const headers = {
  "X-Parse-Application-Id": "I60oiFatOZlIa97586SbesJlju4YOi8CauH6nE7t",
  "X-Parse-REST-API-Key": "gHR5Q6j3ZE6MiMe49cGjSVxwQ6aPlhRQLLsMjKB1",
};
const headersJson = {
  ...headers,
  "Content-Type": "application/json",
};

export async function getTarefas() {
  try {
    const response = await axios.get(urlTarefa, { headers: headers });
    if (response.status / 100 === 2) {
      console.log("tarefas", response.data.results);
      return response.data.results;
    } else {
      console.log("status:", response.status);
      console.log("statusText:", response.statusText);
    }
  } catch (err) {
    console.log("getTarefas err:", err);
  }
  return [];
}

export async function addTarefa(novaTarefa) {
  try {
    const response = await axios.post(urlTarefa, novaTarefa, {
      headers: headersJson,
    });
    if (response.status === 201) {
      return { ...novaTarefa, ...response.data };
    } else {
      console.log("status:", response.status);
      console.log("statusText:", response.statusText);
    }
  } catch (err) {
    console.log("addTarefas err:", err);
  }
  return null;
}

export async function updateTarefas(tarefaAtualizada) {
  delete tarefaAtualizada.createdAt;
  delete tarefaAtualizada.updatedAt;
  try {
    const response = await axios.put(
      urlTarefa + "/" + tarefaAtualizada.objectId,
      tarefaAtualizada,
      {
        headers: headersJson,
      }
    );
    if (response.status === 200) {
      return { ...tarefaAtualizada, ...response.data };
    } else {
      console.log("status:", response.status);
      console.log("statusText:", response.statusText);
    }
  } catch (err) {
    console.log("updateTarefas err:", err);
  }
  return null;
}

export async function deleteTarefa(tarefaDeletada) {
  try {
    const response = await axios.delete(
      urlTarefa + "/" + tarefaDeletada.objectId,
      {
        headers: headers,
      }
    );
    if (response.status === 200) {
      return response.data;
    } else {
      console.log("status:", response.status);
      console.log("statusText:", response.statusText);
    }
  } catch (err) {
    console.log("updateTarefas err:", err);
  }
  return null;
}
