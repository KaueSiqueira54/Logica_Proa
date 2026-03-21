// Função de informações

function informacoes(nome, idade, salario, mestrado) {
  document.writeln(
    `Meu nome é ${nome} e eu tenho ${idade} anos.<br> Meu salário é ${salario}.<br> Tenho mestrado? ${mestrado}`,
  );
  document.writeln("<br>");
  document.writeln("<br>");
}

// informacoes("Kaue", 21, 500, false);
// informacoes("Pedro", 21, 800, true);

// Estyles
let corpo = window.document.body;

corpo.style.background = "#331515";
corpo.style.color = "#fff";
corpo.style.textAlign = "center";
corpo.style.fontSize = "22px";
corpo.style.fontFamily = "Verdana";

// Operações
function operacoes(numero1, numero2) {
  document.writeln(`Números: ${numero1} e ${numero2} <br> <br>`);
  let soma = numero1 + numero2;
  let media = (numero1 + numero2) / 2;
  let multiplicacao = numero1 * numero2;
  let divisao = numero1 / numero2;

  return document.writeln(
    `A soma é: ${soma}.<br> A média desses números é: ${media}.
    <br> A multiplicação desses números é: ${multiplicacao}.
    <br> A divisão desses números é: ${divisao.toFixed(2)}`,
  );
}

// numero1 = parseFloat(prompt("Digite o primeiro número: "));
// numero2 = parseFloat(prompt("Digite outro número: "));

// operacoes(numero1, numero2);

function notas(nota1, nota2, nota3, nota4) {
  nota1 = parseFloat(prompt("Digite a primeira nota: "));
  nota2 = parseFloat(prompt("Digite a segunda nota: "));
  nota3 = parseFloat(prompt("Digite a terceira nota: "));
  nota4 = parseFloat(prompt("Digite a quarta nota: "));

  let mediaNotas = (nota1 + nota2 + nota3 + nota4) / 4;

  document.writeln(`
    As notas são: ${nota1}, ${nota2}, ${nota3}, ${nota4}`);

  document.writeln(`
      <br> <br> Média das notas = ${mediaNotas.toFixed(2)};
    `);
}

notas(10, 8, 6, 9);
