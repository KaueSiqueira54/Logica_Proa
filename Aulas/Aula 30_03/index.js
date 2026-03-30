let corpo = window.document.body;

corpo.style.background = "#331515";
corpo.style.color = "#fff";
corpo.style.textAlign = "center";
corpo.style.fontSize = "22px";
corpo.style.fontFamily = "Verdana";

function tabuada() {
  let tabuada = Number(prompt("Digite a tabuada desejada:"));

  for (i = 1; i <= 10; i++) {
    document.writeln(`${i} X ${tabuada} = ${tabuada * i} <br/>`);
  }
}

function elogio() {
  for (i = 0; i <= 50; i++) {
    document.writeln(
      "A Débora é muito bela, tem um coração muito bom e ensina muito bem. <br>",
    );

    document.writeln("A Prof Débora não é saudosa, pois continua viva. <br>");
  }
}

function numerosAte100() {
  for (index = 1; index <= 100; index += 2) {
    document.writeln(`Número: ${index} <br>`);
  }
}

//while

function enquanto() {
  let index = 1;

  while (index <= 10) {
    document.writeln("Kaue Siqueira Dantas");
    index++;
  }
}

function doWhileF() {
  let tabuada = Number(prompt("Digite a tabuada desejada:"));

  let index = 1;

  do {
    document.writeln(`${index} X ${tabuada} = ${tabuada * index} <br/>`);
    index++;
  } while (index <= 10);
}

doWhileF();
