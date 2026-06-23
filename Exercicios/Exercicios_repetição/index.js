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
  let numero = Number(prompt("Digite um número:"));
  let str = String(Math.abs(numero));
  let i = 0;
  while (i < str.length) {
    document.writeln("Dígito:", str[i]);
    i++;
  }
}

//14) Escreva um programa que calcule o fatorial de um número inteiro inserido pelo usuário usando o loop "while".

function Fatorial() {
  let numero = Number(prompt("Digite um número:"));
  let fatorial = 1;
  let i = numero;
  while (i > 1) {
    fatorial *= i;
    i--;
  }
  document.writeln(numero + "! =", fatorial);
}

// 15) Crie um programa que leia o nome e a idade de várias pessoas usando o loop "while" até que o nome "fim" seja informado. Ao final, exiba a média das idades.

function NomeIdade() {
  const entradas = [
    { nome: "Ana", idade: 22 },
    { nome: "Bruno", idade: 35 },
    { nome: "fim", idade: 0 },
  ];
  let i = 0,
    soma = 0,
    count = 0;
  while (entradas[i].nome !== "fim") {
    soma += entradas[i].idade;
    count++;
    i++;
  }
  document.writeln(
    "Média:",
    count > 0 ? (soma / count).toFixed(2) : "sem dados",
  );
}

// 16) Faça um programa que exiba os números de 1 a 10 usando o loop "do-while".
function Numeros1A10() {
  let i = 1;
  do {
    document.writeln(i);
    i++;
  } while (i <= 10);
}

// 17) Escreva um programa que calcule a soma dos números de 1 a 100 usando o loop "do-while".

function Calculo1A100() {
  let i = 1,
    soma = 0;
  do {
    soma += i;
    i++;
  } while (i <= 100);
  document.writeln("Soma:", soma); // 5050
}

//18) Crie um programa que exiba os números pares de 1 a 50 usando o loop "do-while".

function Pares() {
  let i = 2;
  do {
    document.writeln(i);
    i += 2;
  } while (i <= 50);
}

// 19) Faça um programa que leia 5 números inteiros usando o loop "do-while" e exiba a média aritmética dos valores lidos.

function Inteiros() {
  const numeros = [10, 20, 30, 40, 50];
  let i = 0,
    soma = 0;
  do {
    soma += numeros[i];
    i++;
  } while (i < 5);
  document.writeln("Média:", soma / 5);
}

//20) Escreva um programa que leia um número inteiro e exiba a tabuada desse número até o décimo valor usando o loop "do-while".

function Taboada() {
  let numero = 7,
    i = 1;
  do {
    document.writeln(numero + " x " + i + " = " + numero * i);
    i++;
  } while (i <= 10);
}

// 21) Crie um programa que leia um número inteiro positivo e exiba todos os divisores desse número usando o loop "do-while".

function Divisores() {
  let numero = 36,
    i = 1,
    divisores = [];
  do {
    if (numero % i === 0) divisores.push(i);
    i++;
  } while (i <= numero);
  document.writeln("Divisores:", divisores.join(", "));
}

// 22) Faça um programa que leia um número inteiro e exiba se ele é um número primo usando o loop "do-while".

function NumeroPrimo() {
  let numero = 17,
    i = 2,
    primo = numero >= 2;
  if (numero >= 2) {
    do {
      if (numero % i === 0) {
        primo = false;
        break;
      }
      i++;
    } while (i <= Math.sqrt(numero));
  }
  document.writeln(numero, primo ? "é primo" : "não é primo");
}

// 23) Escreva um programa que leia um número inteiro e exiba a sequência de Fibonacci até o número lido usando o loop "do-while".

function Fibonacci() {
  let limite = 100,
    a = 0,
    b = 1,
    sequencia = [];
  do {
    sequencia.push(a);
    let temp = a + b;
    a = b;
    b = temp;
  } while (a <= limite);
  document.writeln("Fibonacci até", limite + ":", sequencia.join(", "));
}

// 24) Crie um programa que leia o nome e a idade de 5 pessoas usando o loop "do-while" e exiba a média das idades.

function NomeIdade5() {
  const pessoas = [
    { nome: "Ana", idade: 22 },
    { nome: "Bruno", idade: 35 },
    { nome: "Carla", idade: 28 },
    { nome: "Diego", idade: 19 },
    { nome: "Eva", idade: 41 },
  ];
  let i = 0,
    soma = 0;
  do {
    soma += pessoas[i].idade;
    i++;
  } while (i < 5);
  document.writeln("Média:", (soma / 5).toFixed(2));
}

// 25) Faça um programa que exiba os primeiros 20 números da sequência de Fibonacci usando o loop "do-while".

function Fibonacci2() {
  let a = 0,
    b = 1,
    count = 0,
    sequencia = [];
  do {
    sequencia.push(a);
    let temp = a + b;
    a = b;
    b = temp;
    count++;
  } while (count < 20);
  document.writeln(sequencia.join(", "));
}

// 26) Escreva um programa que leia um número inteiro e exiba a soma de todos os números pares entre 1 e o número lido usando o loop "do-while".

function SomaPares() {
  let numero = 50,
    i = 2,
    soma = 0;
  do {
    soma += i;
    i += 2;
  } while (i <= numero);
  document.writeln("Soma dos pares até", numero + ":", soma);
}

// 27) Crie um programa que exiba os números ímpares de 1 a 50 usando o loop "do-while".

function Impares() {
  let i = 1;
  do {
    document.writeln(i);
    i += 2;
  } while (i <= 50);
}

// 28) Faça um programa que leia um número inteiro e exiba os seus dígitos separadamente usando o loop "do-while".

function Digitos() {
  let numero = 98765;
  let str = String(Math.abs(numero)),
    i = 0;
  do {
    document.writeln("Dígito:", str[i]);
    i++;
  } while (i < str.length);
}

// 29) Escreva um programa que calcule o fatorial de um número inteiro inserido pelo usuário usando o loop "do-while".

function Fatorial2() {
  let numero = 6,
    fatorial = 1,
    i = numero;
  do {
    fatorial *= i;
    i--;
  } while (i > 1);
  document.writeln(numero + "! =", fatorial);
}

// 30) Crie um programa que leia o nome e a idade de várias pessoas usando o loop "do-while" até que o nome "fim" seja informado. Ao final, exiba a média das idades.

function FimInicio() {
  const entradas = [
    { nome: "Ana", idade: 22 },
    { nome: "Bruno", idade: 35 },
    { nome: "fim", idade: 0 },
  ];
  let i = 0,
    soma = 0,
    count = 0;
  do {
    if (entradas[i].nome === "fim") break;
    soma += entradas[i].idade;
    count++;
    i++;
  } while (true);
  document.writeln(
    "Média:",
    count > 0 ? (soma / count).toFixed(2) : "sem dados",
  );
}

// ESTRUTURAS DE REPETIÇÃO FOR

// 31) Faça um programa que exiba os números de 1 a 10.

function Numeros1A10() {
  for (let i = 1; i <= 10; i++) document.writeln(i);
}

// 32) Escreva um programa que calcule a soma dos números de 1 a 100.

function Soma1A100() {
  let soma = 0;
  for (let i = 1; i <= 100; i++) soma += i;
  document.writeln("Soma:", soma); // 5050
}

// 33) Crie um programa que exiba os números pares de 1 a 50.

function Pares1A50() {
  for (let i = 2; i <= 50; i += 2) document.writeln(i);
}

// 34) Faça um programa que leia 5 números inteiros e exiba a média aritmética dos valores lidos.

function InteitosMedia() {
  const numeros = [10, 20, 30, 40, 50];
  let soma = 0;
  for (let i = 0; i < numeros.length; i++) soma += numeros[i];
  document.writeln("Média:", soma / numeros.length);
}

// 35) Escreva um programa que leia um número inteiro e exiba a tabuada desse número até o décimo valor.

function Taboada() {
  let numero = 7;
  for (let i = 1; i <= 10; i++) {
    document.writeln(numero + " x " + i + " = " + numero * i);
  }
}

// 36) Crie um programa que leia um número inteiro positivo e exiba todos os divisores desse número.

function Divisores() {
  let numero = 36,
    divisores = [];
  for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) divisores.push(i);
  }
  document.writeln("Divisores:", divisores.join(", "));
}

// 37) Faça um programa que leia um número inteiro e exiba se ele é um número primo.

function Primo() {
  let numero = 17,
    primo = numero >= 2;
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      primo = false;
      break;
    }
  }
  document.writeln(numero, primo ? "é primo" : "não é primo");
}

// 38) Escreva um programa que leia um número inteiro e exiba a sequência de Fibonacci até o número lido.

function Fibonacci3() {
  let limite = 100,
    a = 0,
    b = 1,
    sequencia = [];
  for (; a <= limite; ) {
    sequencia.push(a);
    let temp = a + b;
    a = b;
    b = temp;
  }
  document.writeln("Fibonacci até", limite + ":", sequencia.join(", "));
}

// 39) Crie um programa que leia o nome e a idade de 5 pessoas e exiba a média das idades.

function MediaIdade() {
  const pessoas = [
    { nome: "Ana", idade: 22 },
    { nome: "Bruno", idade: 35 },
    { nome: "Carla", idade: 28 },
    { nome: "Diego", idade: 19 },
    { nome: "Eva", idade: 41 },
  ];
  let soma = 0;
  for (let i = 0; i < pessoas.length; i++) soma += pessoas[i].idade;
  document.writeln("Média:", (soma / pessoas.length).toFixed(2));
}

// 40) Faça um programa que exiba os primeiros 20 números da sequência de Fibonacci.

function Fibonacci4() {
  let a = 0,
    b = 1,
    sequencia = [];
  for (let count = 0; count < 20; count++) {
    sequencia.push(a);
    let temp = a + b;
    a = b;
    b = temp;
  }
  document.writeln(sequencia.join(", "));
}

// 41) Escreva um programa que leia um número inteiro e exiba a soma de todos os números pares entre 1 e o número lido.

function SomaPares() {
  let numero = 50,
    soma = 0;
  for (let i = 2; i <= numero; i += 2) soma += i;
  document.writeln("Soma dos pares até", numero + ":", soma);
}

// 42) Crie um programa que exiba os números ímpares de 50 a 1.

function Impares() {
  for (let i = 49; i >= 1; i -= 2) document.writeln(i);
}

// 43) Faça um programa que leia um número inteiro e exiba os seus dígitos separadamente.

function Separados() {
  let numero = 98765;
  let str = String(Math.abs(numero));
  for (let i = 0; i < str.length; i++) {
    document.writeln("Dígito:", str[i]);
  }
}

// 44) Escreva um programa que calcule o fatorial de um número inteiro inserido pelo usuário.

function Fatorial3() {
  let numero = 6,
    fatorial = 1;
  for (let i = numero; i > 1; i--) fatorial *= i;
  document.writeln(numero + "! =", fatorial);
}

// 45) Crie um programa que leia o nome e a idade de várias pessoas até que o nome "fim" seja informado. Ao final, exiba a média das idades.

function IdadesMedia() {
  const entradas = [
    { nome: "Ana", idade: 22 },
    { nome: "Bruno", idade: 35 },
    { nome: "fim", idade: 0 },
  ];
  let soma = 0,
    count = 0;
  for (let i = 0; i < entradas.length; i++) {
    if (entradas[i].nome === "fim") break;
    soma += entradas[i].idade;
    count++;
  }
  document.writeln(
    "Média:",
    count > 0 ? (soma / count).toFixed(2) : "sem dados",
  );
}
