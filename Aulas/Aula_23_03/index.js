let corpo = window.document.body;

corpo.style.background = "#331515";
corpo.style.color = "#fff";
corpo.style.textAlign = "center";
corpo.style.fontSize = "22px";
corpo.style.fontFamily = "Verdana";

function notas(nota1, nota2, nota3, nota4) {
  nota1 = parseFloat(prompt("Digite a primeira nota: "));
  nota2 = parseFloat(prompt("Digite a segunda nota: "));
  nota3 = parseFloat(prompt("Digite a terceira nota: "));
  nota4 = parseFloat(prompt("Digite a quarta nota: "));

  let mediaNotas = (nota1 + nota2 + nota3 + nota4) / 4;

  let aprovado;

  if (mediaNotas >= 6) {
    aprovado = "Aluno Aprovado.";
  } else if (mediaNotas >= 5) {
    aprovado = "Você está de recuperação. Aluno fulero.";
  } else {
    aprovado = "Aluno Reprovado. Aluno fulero.";
  }

  document.writeln(`
    As notas são: ${nota1}, ${nota2}, ${nota3}, ${nota4}`);

  document.writeln(`
      <br> <br> Média das notas = ${mediaNotas.toFixed(2)};
    `);

  alert(`${aprovado}
    `);
}

notas();
