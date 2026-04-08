let corpo = window.document.body;

corpo.style.background = "#331515";
corpo.style.color = "#fff";
corpo.style.textAlign = "center";
corpo.style.fontSize = "22px";
corpo.style.fontFamily = "Verdana";

//Exercicios

// 1) Faça um programa que exiba os números de 1 a 10 usando o loop "while".

function numerosAte10() {
  let num = 0;

  while (num <= 10) {
    document.writeln(`${num}`);
    num++;
  }
}

// 2) Escreva um programa que calcule a soma dos números de 1 a 100 usando o loop "while".

function numerosAte100() {
  let num = 0;
  let soma = 0;

  while (num <= 100) {
    soma += num;
    document.writeln(`${num}<br/>`);
    num++;
  }

  document.writeln(soma);
}

// 3) Crie um programa que exiba os números pares de 1 a 50 usando o loop "while".

function paresAte50() {
  let num = 0;

  while (num <= 50) {
    if (num % 2 === 0) {
      document.writeln(`${num}`);
    }
    num++;
  }
}

// 4) Faça um programa que leia 5 números inteiros usando o loop "while" e exiba a média aritmética dos valores lidos.

function numerosInteiros() {
  let num = 0;
  let numeros = [];

  while (num <= 4) {
    let numero = parseInt(prompt(`Digite o ${num + 1}° número: `));
    numeros.push(numero);
    num++;
  }

  let soma = numeros.reduce((acumulador, numero) => {
    return acumulador + numero;
  });

  let media = soma / numeros.length;

  document.writeln(numeros, "<br/>");
  document.writeln(`Média: ${media}`);
}

//5) Escreva um programa que leia um número inteiro e exiba a tabuada desse número até o décimo valor usando o loop "while".

function tabuada() {
  let num = 0;
  let numero = Number(prompt("Digite o número para ver a tabuada:"));

  while (num <= 10) {
    document.writeln(`${numero} X ${num} = ${numero * num} <br/>`);
    num++;
  }
}

// 6) Crie um programa que leia um número inteiro positivo e exiba todos os divisores desse número usando o loop "while".

function divisores() {
  let numero = parseInt(prompt(`Digite o número: `));
  let divisiveis = [];

  if (numero <= 0) {
    alert("Número precisa ser positivo e maior que 0.");
  } else {
    let num = 1;

    while (num <= numero) {
      if (numero % num === 0) {
        divisiveis.push(num);
      }
      num++;
    }

    document.writeln(divisiveis);
  }
}

//7) Faça um programa que leia um número inteiro e exiba se ele é um número primo usando o loop "while".

function primo() {
  let numero = Number(prompt("Digite o número: "));

  if (numero < 2) {
    alert(`${numero} não é primo.`);
    return;
  }

  let divisor = 2;
  let ePrimo = true;

  while (divisor < numero) {
    if (numero % divisor === 0) {
      ePrimo = false;
      break;
    }
    divisor++;
  }

  if (ePrimo) {
    alert(`Número ${numero} é primo.`);
  } else {
    alert(`Número ${numero} não é primo.`);
  }
}

// 8) Escreva um programa que leia um número inteiro e exiba a sequência de Fibonacci até o número lido usando o loop "while".

function sequencia() {
  let numero = Number(prompt("Digite um número: "));

  let anterior = 0;
  let atual = 1;

  if (numero < 0) {
    alert("Digite um número positivo.");
  } else {
    document.writeln("Sequência de Fibonacci: <br/>");

    while (anterior <= numero) {
      document.writeln(anterior);

      let proximo = anterior + atual;
      anterior = atual;
      atual = proximo;
    }
  }
}

// 9) Crie um programa que leia o nome e a idade de 5 pessoas usando o loop "while" e exiba a média das idades.

function somaIdades() {
  let num = 0;
  let soma = 0;
  while (num <= 4) {
    let idade = Number(prompt(`Digite a ${num + 1}° idade: `));
    soma += idade;
    num++;
  }

  let media = soma / 5;

  document.writeln(`Soma das idades: ${soma} <br/>`);
  document.writeln(`Média das idades: ${media}`);
}

//10) Faça um programa que exiba os primeiros 20 números da sequência de Fibonacci usando o loop "while".

function fibonacciaAte20() {
  let numero = 4181;

  let anterior = 0;
  let atual = 1;

  document.writeln("20 primeiros números da sequência de Fibonacci: <br/>");

  while (anterior <= numero) {
    document.writeln(anterior);

    let proximo = anterior + atual;
    anterior = atual;
    atual = proximo;
  }
}

//11) Escreva um programa que leia um número inteiro e exiba a soma de todos os números pares entre 1 e o número lido usando o loop "while".

function somaAteNum() {
  let num = 1;
  let soma = 0;

  let numero = Number(prompt("Digite o número: "));
  while (num <= numero) {
    if (num % 2 === 0) {
      document.writeln(num);
      soma += num;
    }
    num++;
  }

  document.writeln(`<br/>Soma dos pares: ${soma}`);
}

// 12) Crie um programa que exiba os números ímpares de 1 a 50 usando o loop "while".

function impares() {
  let num = 1;

  while (num <= 50) {
    if (num % 2 === 1 || num === 1) {
      document.writeln(num);
    }
    num++;
  }
}

//13)Faça um programa que leia um número inteiro e exiba os seus dígitos separadamente usando o loop "while".

function digito() {
  let numero = prompt("Digite um número: ");
  let num = [];
  num.push(numero);

  document.writeln(num);
}

//
