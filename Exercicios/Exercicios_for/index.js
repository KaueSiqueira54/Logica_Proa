let corpo = window.document.body;

corpo.style.background = "#331515";
corpo.style.color = "#fff";
corpo.style.textAlign = "center";
corpo.style.fontSize = "22px";
corpo.style.fontFamily = "Verdana";

//Exercicios

//1

//1 - Escreva um algoritmo para ler 2 valores informados pelo usuário e se o segundo valor informado for igual ou menor que ZERO, deve ser lido um novo valor. Ou seja, para o segundo valor não pode ser aceito o valor zero, nem um valor negativo.  O seu programa deve imprimir o resultado da divisão do primeiro valor lido pelo segundo valor.

function valores() {
  for (let index = 1; index < 2; index++) {
    let valor1 = Number(prompt(`Digite o ${index}º valor:`));
    let valor2 = Number(prompt(`Digite o ${index}º valor:`));
    while (valor2 <= 0) {
      valor2 = Number(prompt("Digite um valor maior que zero:"));
    }

    let divisao = valor1 / valor2;
    document.writeln(
      `A divisão de ${valor1} / ${valor2} = ${divisao.toFixed(2)}`,
    );
  }
}

//2 - Crie uma bomba relógio (usando somente código - para deixar claro!) cuja contagem regressiva vá de 30 a 0. Utilize "document.write" para escrever em tela e no final da repetição escreva "EXPLOSÃO".

function explosao() {
  for (i = 30; i >= 0; i--) {
    document.writeln(`Contagem: ${i} <br/>`);
  }
  document.writeln("EXPLOSÂO");
}

//3 - Escreva um algoritmo para imprimir os números de 1 (inclusive) a 10 (inclusive) em ordem decrescente.
Exemplo: (10, 9, 8, 7, 6, 5, 4, 3, 2, 1);

function numDescrescente() {
  for (i = 10; i >= 1; i--) {
    document.writeln(i);
  }
}

//4 - Faça um algoritmo que calcule e escreva a média aritmética dos números inteiros entre 15 (inclusive) e 100 (inclusive).

function inteiros15() {
  let soma = 0;
  let quantidade = 0;
  for (let i = 15; i <= 100; i++) {
    soma += i;
    quantidade++;
  }

  let media = soma / quantidade;
  document.writeln(`Soma: ${soma}`);
  document.writeln(`Média: ${media}`);
}

//5 - Faça um algoritmo que calcule e escreva a média aritmética dos dois números inteiros informados pelo usuário e todos os números inteiros entre eles. Considere que o primeiro sempre será menor que o segundo.

function medias() {
  let numero1 = Number(prompt("Digite o primeiro número: "));
  let numero2 = Number(prompt("Digite o segundo número: "));
  let soma = 0;
  let quantidade = 0;

  for (let i = numero1; i <= numero2; i++) {
    soma += i;
    quantidade++;
  }

  let media = soma / quantidade;

  document.writeln(`Soma dos valores: ${soma} <br/>`);
  document.writeln(`Média dos valores: ${media} <br/>`);
}

//6 - Escreva um programa para ler 2 notas de um aluno, calcular e imprimir a média final. Considere que a nota de aprovação é 9,5. Logo após escrever a mensagem "Calcular a média de outro aluno Sim/Não?" e solicitar um resposta. Se a resposta for "S", o programa deve ser executado novamente, caso contrário deve ser encerrado exibindo a quantidade de alunos aprovados.

function nota() {
  let aprovados = 0;
  let desaprovados = 0;
  let continuar = "";
  do {
    let nota1 = parseFloat(prompt("Digite a 1° nota do aluno: "));
    let nota2 = parseFloat(prompt("Digite a 2° nota do aluno: "));
    let media = (nota1 + nota2) / 2;
    if (media >= 9.5) {
      aprovados += 1;
      alert(`Média final = ${media.toFixed(2)}`);
    } else {
      alert(`Média final = ${media.toFixed(2)}`);
      desaprovados += 1;
    }
    continuar = prompt("Deseja continuar? S/N");
  } while (continuar.toUpperCase() === "S");

  alert(`Alunos aprovados; ${aprovados}`);
  alert(`Alunos desaprovados; ${desaprovados}`);
}

// 7 - Escreva um algoritmo para ler as notas de avaliações de um aluno, calcule e imprima a média (simples) desse aluno. Só devem ser aceitos valores válidos durante a leitura (0 a 10) para cada nota. São 6 notas ao total.
//Caso o valor informado para qualquer uma das notas esteja fora do limite estabelecido, deve ser solicitado um novo valor ao usuário.

function avaliacao() {
  let soma = 0;
  for (i = 0; i <= 6; i++) {
    let avaliacao = parseInt(prompt("Digite a avaliação do aluno: "));
    if (avaliacao < 0 || avaliacao > 10) {
      alert("Valores inválidos. Tente novamente!");
    } else {
      soma += avaliacao;
    }
  }

  let media = soma / 6;
  alert(`A média das avalições é: ${media}`);
}

// 8 - Ler um valor N e imprimir todos os valores inteiros entre 1 (inclusive) e N (inclusive). Considere que o N será sempre maior que ZERO. N  é um valor informado pelo usuário

function valorUsuario() {
  let numero = Number(prompt("Digite o valor:"));
  if (numero > 0) {
    for (i = 1; i <= numero; i++) {
      document.writeln(`Número: ${i} <br/>`);
    }
  } else {
    alert("Valor menor que 0. Tente novamente.");
  }
}

// 9 - Escreva um algoritmo para imprimir os 10 primeiros números inteiros maiores que 100.

function primeiros10() {
  for (let index = 100; index <= 110; index++) {
    document.writeln(index);
  }
}

// 10 10 - Escreva um programa para imprimir todas as tabuadas de 1 a N. N será informado pelo usuário.

function tabuada() {
  let tabuada = Number(prompt("Digite a tabuada desejada:"));

  for (i = 1; i <= 10; i++) {
    document.writeln(`${i} X ${tabuada} = ${tabuada * i} <br/>`);
  }
}

//11 - Escreva um programa em que o usuário informe 10 valores e escreva quantos desses valores lidos estão entre os números 24 e 42 (incluindo os valores 24 e 42) e quantos deles estão fora deste intervalo.

function intervalo() {
  let dentro = 0;
  let fora = 0;

  for (let i = 1; i <= 10; i++) {
    let numero = Number(prompt(`Digite o ${i}º número: `));

    if (numero >= 24 && numero <= 42) {
      dentro++;
    } else {
      fora++;
    }
  }

  document.writeln(`Números dentro do intervalo (24 a 42): ${dentro} <br/>`);
  document.writeln(`Números fora do intervalo: ${fora} <br/>`);
}
