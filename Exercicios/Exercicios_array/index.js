let corpo = window.document.body;

corpo.style.background = "#331515";
corpo.style.color = "#fff";
corpo.style.textAlign = "center";
corpo.style.fontSize = "22px";
corpo.style.fontFamily = "Verdana";

//

//01) Faça um programa que leia 5 números inteiros e exiba-os na ordem inversa em que foram digitados.

function inteiros() {
  let numeros = [];

  for (let index = 0; index < 5; index++) {
    let numero = Number(prompt("Digite um número: "));
    numeros.push(numero);
  }

  document.writeln(numeros.toReversed());
}

// 02) Escreva um programa que leia 10 números inteiros e exiba a soma deles.

function somaInteiros() {
  let numeros = [];

  for (let index = 0; index < 10; index++) {
    let numero = Number(prompt("Digite um número: "));
    numeros.push(numero);
  }

  let soma = numeros.reduce((somar, n) => somar + n, 0);

  document.writeln(soma);
}

// 03) Crie um programa que leia 7 números inteiros e exiba a média aritmética dos valores lidos.

function mediaInteiros() {
  let numeros = [];

  for (let index = 0; index < 7; index++) {
    let numero = Number(prompt("Digite um número: "));
    numeros.push(numero);
  }

  let soma = numeros.reduce((somar, n) => somar + n, 0);

  document.writeln((soma / numeros.length).toFixed(2));
}

//04) Faça um programa que leia 5 números inteiros e exiba quantos deles são pares.

function pares() {
  let numerosPares = [];

  for (let index = 0; index < 7; index++) {
    let numero = Number(prompt("Digite um número: "));
    if (numero % 2 === 0) {
      numerosPares.push(numero);
    }
  }

  numerosPares.forEach((n) => {
    document.writeln(n);
  });
}

// 05) Escreva um programa que leia 5 números inteiros e exiba o maior e o menor valor digitado.

function maiorEMenorValor() {
  let maior = 0;
  let menor = 0;

  for (let index = 0; index < 5; index++) {
    let numero = Number(prompt("Digite um número: "));
    if (numero > maior) {
      maior = numero;
    } else if (numero < maior) {
      menor = numero;
    } else if (numero < menor) {
      menor = numero;
    }
  }

  document.writeln(`Maior: ${maior} <br/>`);
  document.writeln(`Menor: ${menor} <br/>`);
}

// 06) Crie um programa que leia 10 números inteiros e exiba-os em ordem crescente.

function crescente() {
  let numeros = [];

  for (let index = 0; index < 10; index++) {
    let numero = Number(prompt("Digite um número: "));
    numeros.push(numero);
  }

  document.writeln(numeros.toSorted((a, b) => a - b));
}

// 07) Faça um programa que leia 10 números inteiros e exiba quantos deles são positivos.

function positivos() {
  let numeros = [];

  for (let index = 0; index < 10; index++) {
    let numero = Number(prompt("Digite um número: "));
    numeros.push(numero);
  }

  let positivos = numeros.filter((positivo) => {
    return positivo > 1;
  });

  document.writeln(positivos);
  document.writeln(`<br/>${positivos.length} números são positivos.`);
}

//08) Escreva um programa que leia 5 números inteiros e calcule a média dos valores pares e a média dos valores ímpares.

function paresEimpares() {
  let numerosPares = [];
  let numerosImpares = [];

  for (let index = 0; index < 5; index++) {
    let numero = Number(prompt("Digite um número: "));
    if (numero % 2 === 0) {
      numerosPares.push(numero);
    } else if (numero % 3 === 0) {
      numerosImpares.push(numero);
    }
  }

  let somaPares = numerosPares.reduce((somar, n) => somar + n, 0);

  let somaImpares = numerosImpares.reduce((somar, n) => somar + n, 0);

  document.writeln(`Pares: `, (somaPares / numerosPares.length).toFixed(2));
  document.writeln(
    `<br/>Impares: `,
    (somaPares / numerosImpares.length).toFixed(2),
  );
}

// 09) Crie um programa que leia 10 números inteiros e exiba a quantidade de números positivos e a quantidade de números negativos.

function numerosPositivosENegativos() {
  let numerosPositivos = [];

  for (let index = 0; index < 10; index++) {
    let numero = Number(prompt("Digite um número: "));
    numerosPositivos.push(numero);
  }

  let positivos = numerosPositivos.filter((positivo) => {
    return positivo > 1;
  });

  let negativos = numerosPositivos.filter((positivo) => {
    return positivo < 1;
  });

  document.writeln(`<br/>${positivos.length} números são positivos.`);
  document.writeln(`<br/>${negativos.length} números são negativos.`);
}

//10)Faça um programa que leia 5 números inteiros e verifique se algum deles é igual a zero.

function igualAZero() {
  let numeros = [];

  for (let index = 0; index < 5; index++) {
    let numero = Number(prompt("Digite um número: "));
    numeros.push(numero);
  }

  let zero = numeros.filter((zero) => {
    return zero === 0;
  });

  document.writeln(zero);
}

// 11) Escreva um programa que leia 10 números inteiros e exiba a soma dos valores positivos e a soma dos valores negativos.

function somaPositivosENegativos() {
  let numeros = [];

  for (let index = 0; index < 10; index++) {
    let numero = Number(prompt("Digite um número: "));
    numeros.push(numero);
  }

  let positivos = numeros.filter((n) => n > 0);
  let negativos = numeros.filter((n) => n < 0);

  let somaPositivos = positivos.reduce((somar, n) => somar + n, 0);
  let somaNegativos = negativos.reduce((somar, n) => somar + n, 0);

  document.writeln(`Positivos: ${positivos}`);
  document.writeln(`<br/>Negativos: ${negativos}`);
  document.writeln(`<br/>Soma dos positivos: ${somaPositivos}`);
  document.writeln(`<br/>Soma dos negativos: ${somaNegativos}`);
}

// 12) Crie um programa que leia 5 números inteiros e exiba-os em ordem decrescente.

function ordemDescrescente() {
  let numeros = [];

  for (let index = 0; index < 5; index++) {
    let numero = Number(prompt("Digite um número: "));
    numeros.push(numero);
  }

  document.writeln(numeros.toSorted((a, b) => b - a));
}

//13) Faça um programa que leia 10 números inteiros e exiba quantos deles estão no intervalo de 10 a 50.

function intervaloEntre10E50() {
  let numeros = [];

  for (let index = 0; index < 10; index++) {
    let numero = Number(prompt("Digite um número: "));
    numeros.push(numero);
  }

  let intervalo = numeros.filter((n) => {
    return n >= 10 && n <= 50;
  });

  document.writeln(intervalo);
}

// 14) Escreva um programa que leia 7 números inteiros e exiba apenas os números pares.

function pares() {
  let numeros = [];

  for (let index = 0; index < 7; index++) {
    let numero = Number(prompt("Digite um número: "));
    if (numero % 2 === 0) {
      numeros.push(numero);
    }
  }

  document.writeln(numeros);
}

//15) Crie um programa que leia 5 nomes e exiba-os em ordem alfabética.

function ordemAlfabetica() {
  let nomes = [];

  for (let index = 0; index < 3; index++) {
    let nome = prompt("Digite um nome: ");
    nomes.push(nome);
  }

  document.writeln(nomes.toSorted((a, b) => a.localeCompare(b)));
}

// 16) Faça um programa que leia uma matriz 3x3 de números inteiros e exiba a matriz na tela.

function lerMatriz() {
  let matriz = [];

  for (let linha = 0; linha < 3; linha++) {
    matriz[linha] = []; // cria uma linha vazia

    for (let coluna = 0; coluna < 3; coluna++) {
      let numero = Number(prompt(`Digite o número [${linha}][${coluna}]: `));
      matriz[linha][coluna] = numero; // coloca o número na posição certa
    }
  }

  // Exibindo a matriz
  for (let linha = 0; linha < 3; linha++) {
    document.writeln(matriz[linha].join("  ") + "<br/>");
  }
}

// 17) Escreva um programa que leia uma matriz 2x2 de números inteiros e calcule a soma de todos os elementos.

function somaMatriz() {
  let matriz = [];
  let resultado = [];
  let soma;

  for (let linha = 0; linha < 2; linha++) {
    matriz[linha] = [];

    for (let coluna = 0; coluna < 2; coluna++) {
      let numero = Number(prompt(`Digite o número [${linha}][${coluna}]: `));
      matriz[linha][coluna] = numero;
    }
  }

  for (let n = 0; n < 2; n++) {
    let soma = matriz[n].reduce((somar, n) => somar + n, 0);
    resultado.push(soma);
  }

  resultado.forEach((n, index) => {
    document.writeln(`Soma matriz ${index + 1} = ${n}<br/>`);
  });
}

// 18) Crie um programa que leia uma matriz 3x3 de números inteiros e exiba a soma dos elementos da diagonal principal.

function somaMatrizDiagonal() {
  let matriz = [];

  for (let linha = 0; linha < 3; linha++) {
    matriz[linha] = []; // cria uma linha vazia

    for (let coluna = 0; coluna < 3; coluna++) {
      let numero = Number(prompt(`Digite o número [${linha}][${coluna}]: `));
      matriz[linha][coluna] = numero; // coloca o número na posição certa
    }
  }

  // Exibindo a matriz
  for (let linha = 0; linha < 3; linha++) {
    document.writeln(matriz[linha].join("  ") + "<br/>");
  }

  let num1 = matriz[0][0];
  let num2 = matriz[1][1];
  let num3 = matriz[2][2];
  let soma = num1 + num2 + num3;

  document.writeln(
    `A soma dos números na diagonal principal: ${num1} + ${num2} + ${num3} = ${soma}`,
  );
}

// 19) Faça um programa que leia duas matrizes 2x2 de números inteiros e exiba a soma das duas matrizes.

function matrizDoisSoma() {
  let matriz = [];
  let resultado = [];
  let soma;

  for (let linha = 0; linha < 2; linha++) {
    matriz[linha] = []; // cria uma linha vazia

    for (let coluna = 0; coluna < 2; coluna++) {
      let numero = Number(prompt(`Digite o número [${linha}][${coluna}]: `));
      matriz[linha][coluna] = numero; // coloca o número na posição certa
    }
  }

  // Exibindo a matriz
  for (let linha = 0; linha < 2; linha++) {
    document.writeln(matriz[linha].join("  ") + "<br/>");
  }

  for (let n = 0; n < 2; n++) {
    let soma = matriz[n].reduce((somar, n) => somar + n, 0);
    resultado.push(soma);
  }

  resultado.forEach((n, index) => {
    document.writeln(`Soma matriz ${index + 1} = ${n}<br/>`);
  });
}

// 20) Escreva um programa que leia uma matriz 3x3 de números inteiros e exiba o maior valor presente na matriz.

function maiorNumeroMatriz() {
  let matriz = [];

  for (let linha = 0; linha < 3; linha++) {
    matriz[linha] = []; // cria uma linha vazia

    for (let coluna = 0; coluna < 3; coluna++) {
      let numero = Number(prompt(`Digite o número [${linha}][${coluna}]: `));
      matriz[linha][coluna] = numero; // coloca o número na posição certa
    }
  }

  // Exibindo a matriz
  for (let linha = 0; linha < 3; linha++) {
    document.writeln(matriz[linha].join("  ") + "<br/>");
  }

  let maiorValor = Math.max(...matriz.flat()); // ... Desempacota o array e mostra os valores fora do array []
  document.writeln(`O maior valor da matriz é: ${maiorValor}`);
}

// 21) Crie um programa que leia uma matriz 4x4 de números inteiros e exiba a média aritmética dos elementos.

function mediaMatrizes() {
  let matriz = [];
  let resultado = [];
  let soma;

  for (let linha = 0; linha < 4; linha++) {
    matriz[linha] = [];

    for (let coluna = 0; coluna < 4; coluna++) {
      let numero = Number(prompt(`Digite o número [${linha}][${coluna}]: `));
      matriz[linha][coluna] = numero;
    }
  }

  // Exibindo a matriz
  for (let linha = 0; linha < 4; linha++) {
    document.writeln(matriz[linha].join("  ") + "<br/>");
  }

  for (let n = 0; n < 4; n++) {
    let soma = matriz[n].reduce((somar, n) => somar + n, 0);
    resultado.push(soma);
  }

  resultado.forEach((n, index) => {
    document.writeln(`Soma matriz ${index + 1} = ${n}<br/>`);
  });

  let media = (resultado[0] + resultado[1] + resultado[2] + resultado[3]) / 4;

  document.writeln(`A média de todas as matrizes é: ${media}`);
}

// 22) Faça um programa que leia duas matrizes 2x2 de números inteiros e exiba o produto entre elas.

function produtoMatriz() {
  let a = [];
  let b = [];
  let resultado = [
    [0, 0],
    [0, 0],
  ]; // matriz zerada

  // Leitura das duas matrizes
  for (let i = 0; i < 2; i++) {
    a[i] = [];
    b[i] = [];
    for (let j = 0; j < 2; j++) {
      a[i][j] = Number(prompt(`Matriz A [${i}][${j}]: `));
      b[i][j] = Number(prompt(`Matriz B [${i}][${j}]: `));
    }
  }

  // Exibindo a matriz
  for (let linha = 0; linha < 2; linha++) {
    document.writeln(a[linha].join("  ") + "<br/>");
  }

  // Exibindo a matriz
  for (let linha = 0; linha < 2; linha++) {
    document.writeln(b[linha].join("  ") + "<br/>");
  }

  // Cálculo do produto
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      for (let k = 0; k < 2; k++) {
        resultado[i][j] += a[i][k] * b[k][j]; // acumula a soma dos produtos
      }
    }
  }

  document.writeln("Produto das matrizes:<br/>");
  for (let i = 0; i < 2; i++) {
    document.writeln(resultado[i].join("  ") + "<br/>");
  }
}

// 23) Escreva um programa que leia uma matriz 3x3 de números inteiros e exiba o menor valor presente na matriz.

function menorValorMatriz() {
  let matriz = [];

  for (let linha = 0; linha < 3; linha++) {
    matriz[linha] = []; // cria uma linha vazia

    for (let coluna = 0; coluna < 3; coluna++) {
      let numero = Number(prompt(`Digite o número [${linha}][${coluna}]: `));
      matriz[linha][coluna] = numero; // coloca o número na posição certa
    }
  }

  // Exibindo a matriz
  for (let linha = 0; linha < 3; linha++) {
    document.writeln(matriz[linha].join("  ") + "<br/>");
  }

  let menorValor = Math.min(...matriz.flat()); // ... Desempacota o array e mostra os valores fora do array []
  document.writeln(`O menor valor da matriz é: ${menorValor}`);
}

// 24) Crie um programa que leia uma matriz 3x3 de números inteiros e verifique se ela é simétrica (igual à sua transposta).

function matrizSimetrica() {
  let matriz = [];

  for (let i = 0; i < 3; i++) {
    matriz[i] = [];
    for (let j = 0; j < 3; j++) {
      matriz[i][j] = Number(prompt(`Digite [${i}][${j}]: `));
    }
  }

  let simetrica = true;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (matriz[i][j] !== matriz[j][i]) {
        // compara o elemento com seu espelho
        simetrica = false;
      }
    }
  }

  for (let linha = 0; linha < 3; linha++) {
    document.writeln(matriz[linha].join("  ") + "<br/>");
  }

  if (simetrica) {
    document.writeln("A matriz É simétrica.");
  } else {
    document.writeln("A matriz NÃO é simétrica.");
  }
}

// 25) Faça um programa que leia uma matriz 4x4 de números inteiros e exiba a soma dos elementos de cada coluna.

function somaColuna() {
  let matriz = [];
  let resultado = [];

  for (let linha = 0; linha < 4; linha++) {
    matriz[linha] = [];
    for (let coluna = 0; coluna < 4; coluna++) {
      let numero = Number(prompt(`Digite o número [${linha}][${coluna}]: `));
      matriz[linha][coluna] = numero;
    }
  }

  // Exibindo a matriz
  for (let linha = 0; linha < 4; linha++) {
    document.writeln(matriz[linha].join("  ") + "<br/>");
  }

  // Soma por coluna
  for (let coluna = 0; coluna < 4; coluna++) {
    let soma = 0;
    for (let linha = 0; linha < 4; linha++) {
      soma += matriz[linha][coluna]; // percorre de cima a baixo em cada coluna
    }
    resultado.push(soma);
  }

  resultado.forEach((n, index) => {
    document.writeln(`Soma coluna ${index + 1} = ${n}<br/>`);
  });
}

// 26) Escreva um programa que leia duas matrizes 2x2 de números inteiros e verifique se elas são iguais.

function matrizesIguais() {
  let a = [];
  let b = [];

  // Leitura das duas matrizes
  for (let i = 0; i < 2; i++) {
    a[i] = [];
    b[i] = [];
    for (let j = 0; j < 2; j++) {
      a[i][j] = Number(prompt(`Matriz A [${i}][${j}]: `));
      b[i][j] = Number(prompt(`Matriz B [${i}][${j}]: `));
    }
  }

  // Exibindo a matriz
  for (let linha = 0; linha < 2; linha++) {
    document.writeln(a[linha].join("  ") + "<br/>");
  }

  // Exibindo a matriz
  for (let linha = 0; linha < 2; linha++) {
    document.writeln(b[linha].join("  ") + "<br/>");
  }

  let iguais = true;

  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      if (a[i][j] !== b[i][j]) {
        // se qualquer par for diferente, já encerra
        iguais = false;
      }
    }
  }

  if (iguais) {
    document.writeln("As matrizes SÃO iguais.");
  } else {
    document.writeln("As matrizes NÃO são iguais.");
  }
}

// 27) Crie um programa que leia uma matriz 3x3 de números inteiros e exiba o produto dos elementos da diagonal secundária.

function produtoDiagonalSecundaria() {
  let matriz = [];

  for (let i = 0; i < 3; i++) {
    matriz[i] = [];
    for (let j = 0; j < 3; j++) {
      matriz[i][j] = Number(prompt(`Digite [${i}][${j}]: `));
    }
  }

  for (let linha = 0; linha < 3; linha++) {
    document.writeln(matriz[linha].join("  ") + "<br/>");
  }

  let produto = 1;

  for (let i = 0; i < 3; i++) {
    produto *= matriz[i][2 - i]; // [0][2], [1][1], [2][0]
  }

  document.writeln(`Produto da diagonal secundária: ${produto}`);
}

// 28)Faça um programa que leia uma matriz 4x4 de números inteiros e exiba o maior valor presente em cada linha.

function maiorPorLinha() {
  let matriz = [];

  for (let i = 0; i < 4; i++) {
    matriz[i] = [];
    for (let j = 0; j < 4; j++) {
      matriz[i][j] = Number(prompt(`Digite [${i}][${j}]: `));
    }
  }

  for (let linha = 0; linha < 4; linha++) {
    document.writeln(matriz[linha].join("  ") + "<br/>");
  }

  for (let i = 0; i < 4; i++) {
    let maior = Math.max(...matriz[i]); // spread na linha inteira
    document.writeln(`Maior da linha ${i + 1}: ${maior}<br/>`);
  }
}

// 29) Escreva um programa que leia uma matriz 3x3 de números inteiros e verifique se ela é uma matriz identidade.

function verificarIdentidade() {
  let matriz = [];

  for (let i = 0; i < 3; i++) {
    matriz[i] = [];
    for (let j = 0; j < 3; j++) {
      matriz[i][j] = Number(prompt(`Digite [${i}][${j}]: `));
    }
  }

  for (let linha = 0; linha < 3; linha++) {
    document.writeln(matriz[linha].join("  ") + "<br/>");
  }

  let identidade = true;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (i === j && matriz[i][j] !== 1) {
        // diagonal principal deve ser 1
        identidade = false;
      }
      if (i !== j && matriz[i][j] !== 0) {
        // resto deve ser 0
        identidade = false;
      }
    }
  }

  if (identidade) {
    document.writeln("É uma matriz identidade.");
  } else {
    document.writeln("NÃO é uma matriz identidade.");
  }
}

// 30) Crie um programa que leia duas matrizes 2x2 de números inteiros e exiba a subtração

function subtracaoMatrizes() {
  let a = [];
  let b = [];
  let resultado = [];

  for (let i = 0; i < 2; i++) {
    a[i] = [];
    b[i] = [];
    resultado[i] = [];
    for (let j = 0; j < 2; j++) {
      a[i][j] = Number(prompt(`Matriz A [${i}][${j}]: `));
      b[i][j] = Number(prompt(`Matriz B [${i}][${j}]: `));
    }
  }

  for (let linha = 0; linha < 2; linha++) {
    document.writeln(a[linha].join("  ") + "<br/>");
  }

  for (let linha = 0; linha < 2; linha++) {
    document.writeln(b[linha].join("  ") + "<br/>");
  }

  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      resultado[i][j] = a[i][j] - b[i][j]; // subtrai posição por posição
    }
  }

  document.writeln("Resultado da subtração:<br/>");
  for (let i = 0; i < 2; i++) {
    document.writeln(resultado[i].join("  ") + "<br/>");
  }
}