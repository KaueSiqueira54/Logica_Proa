let corpo = window.document.body;

corpo.style.background = "#331515";
corpo.style.color = "#fff";
corpo.style.textAlign = "center";
corpo.style.fontSize = "22px";
corpo.style.fontFamily = "Verdana";

// Exercicios Condicionais

// 02 - Escreva um programa em Javascript, que leia um número e informe se ele é divisível por 10, por 5 ou por 2 ou se não é divisível por nenhum deles.

function divisivel() {
  let numero = Number(prompt("Digite um número: "));

  if (numero % 10 == 0) {
    alert(`Número ${numero} divisivel por 10.`);
    document.writeln(`Número ${numero} divisivel por 10.`);
  } else if (numero % 5 == 0) {
    alert(`Número ${numero} divisivel por 5.`);
    document.writeln(`Número ${numero} divisivel por 5.`);
  } else if (numero % 2 == 0) {
    alert(`Número ${numero} divisivel por 2.`);
    document.writeln(`Número ${numero} divisivel por 2.`);
  } else {
    alert(`Número ${numero} não divisivel por 10, 5 ou 2.`);
    document.writeln(`Número ${numero} não divisivel por 10, 5 ou 2.`);
  }
}

// 03 -  A CEF concederá um crédito especial com juros de 2% aos seus clientes de acordo com o saldo médio no último ano. Fazer um programa em javascript que leia o saldo médio de um cliente e calcule o valor do crédito de acordo com a tabela a seguir. Imprimir uma mensagem informando o saldo médio e o valor de crédito.

function saldoMedio() {
  let saldo = parseFloat(prompt("Digite o seu saldo médio: "));

  if (saldo >= 0 && saldo <= 500) {
    document.writeln(`Saldo médio = ${saldo} <br>`);
    document.writeln("Nenhum crédito disponível.");
  } else if (saldo >= 501 && saldo <= 1000) {
    let credito = saldo * (30 / 100).toFixed(2);
    document.writeln(`Saldo médio = ${saldo} <br>`);
    document.writeln(`Crédito com 30% = ${credito}`);
  } else if (saldo >= 1001 && saldo <= 3000) {
    let credito = saldo * (40 / 100).toFixed(2);
    document.writeln(`Saldo médio = ${saldo} <br>`);
    document.writeln(`Crédito com 40% = ${credito}`);
  } else {
    let credito = saldo * (50 / 100).toFixed(2);
    document.writeln(`Saldo médio = ${saldo} <br>`);
    document.writeln(`Crédito com 50% = ${credito}`);
  }
}

// 04 - Dados três valores A, B e C, construa um programa em Javascript, que mostre na tela os valores de forma descendente (do maior para o menor).

function maiorParaMenor() {
  let lista = [];
  let valor1 = Number(prompt("Digite valor 1: "));
  lista.push(valor1);
  let valor2 = Number(prompt("Digite valor 2: "));
  lista.push(valor2);
  let valor3 = Number(prompt("Digite valor 3: "));
  lista.push(valor3);

  lista.sort((a, b) => a - b);
  document.writeln(lista);
}

// 05 - Crie um programa em javascript que leia a idade de uma pessoa e informe a sua classe eleitoral:
//· não eleitor (abaixo de 16 anos);
//· eleitor obrigatório (entre a faixa de 18 e menor de 65 anos);
//· eleitor facultativo (de 16 até 18 anos e maior de 65 anos, inclusive).

function idadeEleitoral() {
  let idade = Number(prompt("Digite sua idade: "));
  let classe;

  if (idade < 16) {
    classe = "Não eleitor.";
  } else if (idade >= 18 && idade < 65) {
    classe = "Eleitor obrigatório";
  } else if ((idade >= 16 && idade < 18) || idade >= 65) {
    classe = "Eleitor facultativo.";
  }

  document.writeln(idade);
  document.writeln(classe);
}

// 06 - Desenvolva um programa em javascript que leia um número inteiro e mostre na tela o seu antecessor e seu sucessor.

function antecessorESucessor() {
  let numeroInteiro = Number(prompt("Digite um número inteiro: "));

  document.writeln(`O antecessor de ${numeroInteiro} é ${numeroInteiro - 1}`);
  document.writeln(
    `<br> O Sucessor de ${numeroInteiro} é ${numeroInteiro + 1}`,
  );
}

// 07 - Fazer um programa que mostre na tela a média aritmética dos números 8,9 e 7. A média dos números 4, 5 e 6. A soma das duas médias. A média das médias.

function mediaNumeros() {
  let numeros = [8, 9, 7];
  let numeros2 = [4, 5, 6];

  let media = (numeros[0] + numeros[1] + numeros[2]) / 3;
  let media2 = (numeros2[0] + numeros2[1] + numeros2[2]) / 3;

  let somaMedias = media + media2;

  numeros.forEach((numeros, index) => {
    document.writeln(`Número lista 1 ${index + 1}: ${numeros} <br>`);
  });

  document.writeln(`Média: ${media} <br> <br>`);

  numeros2.forEach((numeros2, index) => {
    document.writeln(`Número lista 2 ${index + 1}: ${numeros2} <br>`);
  });

  document.writeln(`Média: ${media2} <br> <br>`);

  document.writeln(`Soma das duas médias: ${somaMedias} <br> <br>`);
  document.writeln(`Média das duas médias: ${somaMedias / 2} <br> <br>`);
}

// 08 - Escrever um programa que leia:
//- a porcentagem do IPI a ser acrescido no valor das peças
//- o código da peça 1, valor unitário da peça 1, quantidade de peças 1
//- o código da peça 2, valor unitário da peça 2, quantidade de peças 2
//O programa deve calcular o valor total a ser pago e apresentar o resultado.
//Cálculo : (valor1*quant1 + valor2*quant2)*(IPI/100 + 1)

function ipi() {
  let ipi = parseFloat(prompt("Digite o valor do IPI: "));

  let valor = [];
  let quantidade = [];

  for (i = 0; i < 2; i++) {
    let codigoPeca = parseFloat(prompt(`Digite o código da peça ${i + 1}: `));
    document.writeln(`Código da peça ${i + 1} = ${codigoPeca} <br>`);
    //
    let valorUnitario = parseFloat(
      prompt(`Digite o valor unitário da peça ${i + 1}: `),
    );
    valor.push(valorUnitario);
    document.writeln(`Valor unitário da peça ${i + 1} = ${valor[i]} <br>`);
    //
    let quantidadePecas = Number(
      prompt(`Digite a quantidade de peças da peça ${i + 1}: `),
    );
    quantidade.push(quantidadePecas);
    document.writeln(
      `Quantidade de peças da peça ${i + 1} = ${quantidade[i]} <br>`,
    );
  }
  //
  let formula =
    (valor[0] * quantidade[0] + valor[1] * quantidade[1]) * (ipi / 100 + 1);

  document.writeln(`Valor total a ser pago: ${formula.toFixed(2)}`);
}

// 09 - Crie um programa que leia o valor do salário mínimo e o valor do salário de um usuário, calcule a quantidade de salários mínimos esse usuário ganha e imprima o resultado. (Salário mínimo = R$1.212,00).

function salario() {
  let salario = parseFloat(prompt("Digite seu salário: "));
  let salarioMinimo = 1212;
  let salarioEmMinimo = salario / salarioMinimo;

  document.writeln(`Seu salário: ${salario}<br>
  Salário minimo: ${salarioMinimo} <br>
  Seu salário equivale a ${salarioEmMinimo.toFixed(2)} salários mínimos.`);
}

//10 - Informar um saldo e mostrar na tela o saldo com reajuste de 1.5%.

function reajuste() {
  let saldo = Number(prompt("Digite o saldo: "));

  let reajuste = saldo * 1.01;

  document.writeln(
    `Saldo: ${saldo.toFixed(2)} <br> Saldo com reajuste de 1%: ${reajuste.toFixed(2)}`,
  );
}

//11 - Escrever um programa que leia o nome de um vendedor, o seu salário fixo e o total de vendas efetuadas por ele no mês (em dinheiro). Sabendo que este vendedor ganha 15% de comissão sobre suas vendas efetuadas, informar o seu nome, o salário fixo e salário no final do mês.

function salario() {
  let nome = prompt("Digite seu nome: ");
  let salarioFixo = parseFloat(prompt("Digite seu salário fixo: "));
  let totalVendas = parseFloat(prompt("Digite o total de vendas: "));

  let comissao = (totalVendas / 100) * 15;

  document.writeln(`Seu nome é: ${nome}`);
  document.writeln(`Seu salário fixo é: ${salarioFixo.toFixed(2)}`);
  document.writeln(`Seu Salário final é: ${salarioFixo + comissao.toFixed(2)}`);
}

//12- Escreva um programa que calcule a soma dos números de 1 a 15.

function soma() {
  let valor = 0;
  for (let i = 0; i <= 15; i++) {
    valor = i + i;
    document.writeln(valor);
  }
}

//13- Ler uma temperatura em graus Celsius e apresentá-la convertida em graus Fahrenheit. A fórmula de conversão é: F=(9*C+160) / 5, sendo F a temperatura em Fahrenheit e C a temperatura em Celsius.

function temperatura() {
  let temperaturaC = parseFloat(prompt("Digite a temperatura: "));
  let conversaoF = (9 * temperaturaC + 160) / 5;
  document.writeln(`A temperatura convertida é: ${conversaoF}`);
}

//14- Escreva um programa  que leia 10 números do usuário e calcule a soma desses números.

function lerNumeros() {
  let soma = 0;
  for (i = 0; i < 10; i++) {
    let numero = Number(prompt(`Digite o número ${i + 1}`));
    soma += numero;
    document.writeln(`Número ${i + 1}: ${numero} <br>`);
  }
}

//15- Escreva um programa que leia a idade de 20 pessoas e exiba a soma das idades.

function lerIdades() {
  let soma = 0;
  for (i = 0; i < 10; i++) {
    let numero = Number(prompt(`Digite a idade ${i + 1}:`));
    soma += numero;
    document.writeln(`Idade ${i + 1}: ${numero} <br>`);
  }

  document.writeln(`A soma das idades é: ${soma}`);
}

//16- Escreva um programa que leia a idade de 20 pessoas e exiba a média das idades.

function lerIdadesMedias() {
  let soma = 0;
  for (i = 0; i < 10; i++) {
    let numero = Number(prompt(`Digite a idade ${i + 1}:`));
    soma += numero;
    document.writeln(`Idade ${i + 1}: ${numero} <br>`);
  }

  media = soma / 10;

  document.writeln(`A soma das idades é: ${soma}<br>`);
  document.writeln(`A média das idades é: ${media.toFixed(2)}`);
}

//17- Escreva um programa que leia a idade de 20 pessoas e exiba quantas pessoas são maiores de idade.

function maiorIdade() {
  let maiorIdade = [];

  for (i = 0; i <= 20; i++) {
    let idade = Number(prompt(`Digite a idade ${i + 1}: `));
    if (idade >= 18) {
      maiorIdade.push(idade);
    }
  }

  document.writeln(`Pessoas maiores de idade: ${maiorIdade.length}`);
}

//18- Escreva um programa que leia o nome e a idade de 10 pessoas e exiba o nome da pessoa mais nova.

function pessoaMaisNova() {
  let nomeMaisNova;
  let idadeMaisNova;

  for (i = 0; i <= 10; i++) {
    let nome = prompt("Digite o nome: ");
    let idade = Number(prompt(`Digite a idade: `));
    idadeMaisNova = idade;
    nomeMaisNova = nome;
    if (idade < idadeMaisNova) {
      idadeMaisNova = idade;
      nomeMaisNova = nome;
    }
  }

  document.writeln(`Pessoa mais nova: ${nomeMaisNova} idade: ${idadeMaisNova}`);
}

//19- Elaborar um programa que efetue a apresentação do valor da conversão em real (R$) de um valor lido em dólar (	$). O programa deverá solicitar o valor da cotação do dólar e também a quantidade de dólares disponíveis com o usuário.

function conversaoDolar() {
  let cotacao = parseFloat(prompt("Digite a cotação do dólar: "));
  let valor = parseFloat(prompt("Digite o valor em dólar: "));
  let conversao = valor * cotacao;

  document.writeln(`Cotação: ${cotacao.toFixed(2)}<br>`);
  document.writeln(`Valor em dólar: ${valor.toFixed(2)}<br>`);
  document.writeln(`Valor em real: ${conversao.toFixed(2)}<br>`);
}

//20- Escreva um programa que leia 20 números do usuário e exiba quantos números são maiores do que 8.

function maioresQueOito() {
  let numeros = [];
  for (i = 0; i <= 20; i++) {
    let numero = Number(prompt("Digite o número: "));
    if (numero >= 8) {
      numeros.push(numero);
    }
  }

  document.writeln(`Números maiores que 8: ${numeros}`);
}

//21- A Loja Mamão com Açúcar está vendendo seus produtos em 5 (cinco) prestações sem juros. Faça um programa que receba um valor de uma compra e mostre o valor das prestações.

function mamaoAcucar() {
  let valorProduto = parseFloat(prompt("Digite o valor da compra: "));
  let prestacoes = valorProduto / 5;

  document.writeln(`O valor das 5 prestações são: ${prestacoes.toFixed(2)}`);
}

//22- Faça um programa que leia 20 números e, ao final, escreva quantos estão entre 0 e 100.

function numerosEntreCem() {
  let numeros = [];
  let numerosMaiores = [];

  for (index = 0; index < 2; index++) {
    let numero = Number(prompt(`Digite o número ${index + 1}`));
    if (numero >= 0 && numero <= 100) {
      numeros.push(numero);
    } else {
      numerosMaiores.push(numero);
    }
  }

  document.writeln(
    `Números digitados maiores que 100 = [${numerosMaiores}]<br>`,
  );
  document.writeln(`Números digitados entre 0 e 100 = [${numeros}]`);
}

//23- Faça um programa que leia 20 números e, ao final, escreva quantos estão entre 0 e 100, quantos estão entre 101 e 200 e quantos são maiores de 200.

function maioresQueCemE101() {
  let numeros = [];
  let numerosMaiores = [];

  for (index = 0; index <= 20; index++) {
    let numero = Number(prompt(`Digite o número ${index + 1}`));
    if (numero >= 0 && numero <= 100) {
      numeros.push(numero);
    } else if (numero >= 101 && numero <= 200) {
      numerosMaiores.push(numero);
    }
  }

  document.writeln(`Números digitados entre 0 e 100 = [${numerosMaiores}]<br>`);
  document.writeln(`Números digitados entre 101 e 200 = [${numeros}]`);
}

// 24- Escreva um programa que leia uma sequência de números do usuário e realize a soma desses números. Encerre a execução quando um número negativo for digitado.

function somaAteNegativo() {
  let numero = 1;
  let soma = 0;
  let numeros = [];
  let count = 0;
  while (numero > 0) {
    numero = Number(prompt(`Digite um número (digite negativo para parar: )`));
    count++;
    if (numero < 0) {
      document.writeln(`A soma dos números é: ${soma}`);
      return;
    }
    numeros.push(numero);
    document.writeln(`Números ${count}: ${numeros}<br>`);
    soma += numero;
  }
}

//25 é o mesmo que o 24 na lista
