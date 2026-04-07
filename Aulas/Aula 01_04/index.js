let corpo = window.document.body;

corpo.style.background = "#331515";
corpo.style.color = "#fff";
corpo.style.textAlign = "center";
corpo.style.fontSize = "22px";
corpo.style.fontFamily = "Verdana";

let titulo = document.createElement("h1");
titulo.textContent = "Testando funções";

function mostrarCamada1() {
  document.getElementById("camada1").style.visibility = "visible";
  document.getElementById("camada2").style.visibility = "hidden";
  document.getElementById("camada3").style.visibility = "hidden";
}

function mostrarCamada2() {
  document.getElementById("camada2").style.visibility = "visible";
  document.getElementById("camada3").style.visibility = "hidden";
  document.getElementById("camada1").style.visibility = "hidden";
}

function mostrarCamada3() {
  document.getElementById("camada3").style.visibility = "visible";
  document.getElementById("camada2").style.visibility = "hidden";
  document.getElementById("camada1").style.visibility = "hidden";
}

function sairCamadas() {
  document.getElementById("camada1").style.visibility = "hidden";
  document.getElementById("camada2").style.visibility = "hidden";
  document.getElementById("camada3").style.visibility = "hidden";
}
