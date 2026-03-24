let corpo = window.document.body;

corpo.style.background = "#331515";
corpo.style.color = "#fff";
corpo.style.textAlign = "center";
corpo.style.fontSize = "22px";
corpo.style.fontFamily = "Verdana";

function semaforo() {
  let cor = prompt("Digite a cor: ").toLowerCase();

  if (cor === "vermelho") {
    alert("Pare");
  } else if (cor === "verde") {
    alert("Aberto");
  } else if (cor === "amarelo") {
    alert("Espere");
  } else {
    alert("Valor inválido, tente novamente.");
  }
}

semaforo();
