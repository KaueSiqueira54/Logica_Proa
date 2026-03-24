let corpo = window.document.body;

corpo.style.background = "#331515";
corpo.style.color = "#fff";
corpo.style.textAlign = "center";
corpo.style.fontSize = "22px";
corpo.style.fontFamily = "Verdana";

function calcularIMC() {
  let peso = parseFloat(prompt("Digite seu peso: "));
  let altura = parseFloat(prompt("Digite sua altura: "));

  let imc = peso / (altura * altura);
  let indice;

  if (imc < 18.5) {
    indice = "Abaixo do peso.";
  } else if (imc > 18.5 && imc <= 24.9) {
    indice = "Peso normal.";
  } else if (imc >= 25 && imc <= 29.9) {
    indice = "Sobrepeso.";
  } else if (imc >= 30 && imc <= 34.9) {
    indice = "Obesidade grau I.";
  } else if (imc >= 35 && imc <= 39.9) {
    indice = "Obesidade grau II.";
  } else if (imc >= 40) {
    indice = "Obesidade grau III ou Mórbida.";
  } else {
    alert("Algo deu errado. Tente novamente.");
  }

  document.writeln(`Seu peso = ${peso} <br>`);
  document.writeln(`Sua altura = ${altura} <br>`);
  document.writeln(`Seu calculo de IMC = ${imc.toFixed(2)} <br>`);
  document.writeln(`Seu indice IMC = ${indice} <br>`);
  alert(`Seu indice IMC = ${indice}`);
}

calcularIMC();
