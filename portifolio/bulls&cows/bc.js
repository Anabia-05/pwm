let senha = gerarSenha();
let tentativas = [];
let qtdTentativa = 0;

function gerarSenha() {
  let digitos = [];
  while (digitos.length < 4) {
    let numeroAleatorio = Math.floor(Math.random() * 10);
    if (!digitos.includes(numeroAleatorio)) {
      digitos.push(numeroAleatorio);
    }
  }
  return digitos.join("");
}

function reiniciarJogo() {
  senha = gerarSenha();
  tentativas = [];
  qtdTentativa = 0;

  document.getElementById("listaTentativas").innerHTML = "";
  document.getElementById("entradaUsuario").value = "";
}

function contarBullsECows(senha, tentativaUsuario) {
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < 4; i++) {
    if (tentativaUsuario[i] === senha[i]) {
      bulls++;
    } else if (senha.includes(tentativaUsuario[i])) {
      cows++;
    }
  }

  return { bulls, cows };
}

function iniciarJogo() {
  let tentativa = document.querySelector(".interativo").value;

  // Verifica se a tentativa tem 4 dígitos únicos
  if (tentativa.length !== 4 || new Set(tentativa).size !== 4) {
    alert("Digite um número de 4 dígitos únicos.");
    return;
  }

  let resultado = contarBullsECows(senha, tentativa);
  tentativas.push({ tentativa, resultado });

  document.querySelector(".interativo").value = "";

  qtdTentativa++;
  exibirTentativas();

  if (resultado.bulls === 4) {
    alert("Parabéns! Você acertou a senha!");
    reiniciarJogo();
    return;
  }

  if (qtdTentativa >= 10) {
    alert("Você não conseguiu acertar a senha! A senha secreta era: " + senha);
    reiniciarJogo();
  }
}

function exibirTentativas() {
  const listaTentativas = document.getElementById("listaTentativas");
  listaTentativas.innerHTML = "";

  tentativas
    .slice()
    .reverse()
    .forEach((tentativa, index) => {
      const itemLista = document.createElement("li");
      itemLista.className = "tentativaItem";
      itemLista.textContent = `Tentativa ${tentativas.length - index}: ${
        tentativa.tentativa
      } | Bulls: ${tentativa.resultado.bulls}, Cows: ${
        tentativa.resultado.cows
      }`;
      listaTentativas.appendChild(itemLista);
    });
}
