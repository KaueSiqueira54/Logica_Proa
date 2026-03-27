let corpo = window.document.body;

corpo.style.background = "#331515";
corpo.style.color = "#fff";
corpo.style.textAlign = "center";
corpo.style.fontSize = "22px";
corpo.style.fontFamily = "Verdana";

//Switch Case

function semaforo() {
  let semaforo = prompt("Digite a cor do semáforo: ");

  switch (semaforo.toLowerCase()) {
    case "vermelho":
      alert("PARE");
      break;
    case "amarelo":
      alert("Calma lá paizão");
      break;
    case "verde":
      alert("Agora vai");
      break;
    default:
      alert("Algo deu errado. Tente novamente.");
      break;
  }
}

function diasDaSemana() {
  let dia = Number(prompt("Digite o número da semana: "));
  let nomeDia = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ];

  switch (dia) {
    case 1:
      alert(`Hoje é ${nomeDia[0]}`);
      break;
    case 2:
      alert(`Hoje é ${nomeDia[1]}`);
      break;
    case 3:
      alert(`Hoje é ${nomeDia[3]}`);
      break;
    case 4:
      alert(`Hoje é ${nomeDia[4]}`);
      break;
    case 5:
      alert(`Hoje é ${nomeDia[5]}`);
      break;
    case 6:
      alert(`Hoje é ${nomeDia[6]}`);
      break;
    case 7:
      alert(`Hoje é ${nomeDia[0]}`);
      break;
    default:
      alert("Algo deu errado. Tente novamente.");
  }
}

function combos() {
  let menu = {
    1: [
      `1: Big Mac. <br> Acompanha: Sanduíche Big Mac + batata média + refrigerante médio. <br> Preço: RS$ 39, 90.  <br> Calorias:  900 kcal`,
    ],
    2: [
      `2: MacChicken. <br> Acompanha: Sanduíche McChicken + batata média + refrigerante médio. <br> Preço: RS$ RS$ 34, 90.  <br> Calorias:  900 kcal`,
    ],
    3: [
      `3: Quarter Pounder. <br> Acompanha: Sanduíche Quarter Pounder + batata média + refrigerante médio. <br> Preço: RS$ RS$ 42,90.  <br> Calorias:  970 kcal`,
    ],
    4: [
      `4: McFrango Grelhado. <br> Acompanha: Sanduíche de frango grelhado + batata média + refrigerante médio. <br> Preço: RS$ RS$ 36,90.  <br> Calorias:  720 kcal`,
    ],
    5: [
      `5: Cheddar McMelt. <br> Acompanha: Sanduíche Cheddar McMelt + batata média + refrigerante médio. <br> Preço: RS$ RS$ 38,90.  <br> Calorias:  720 kcal`,
    ],
  };

  let menuUser = Number(
    prompt(
      `Digite seu combo:
       1 - Big Mac
       2 - McChicken
       3 - Quarter Pounder
       4 - McFrango Grelhado
       5 - Cheddar McMelt`,
    ),
  );

  switch (menuUser) {
    case 1:
      document.writeln(`Seu combo: <br> ${menu[1]}`);
      break;
    case 2:
      document.writeln(`Seu combo: <br> ${menu[2]}`);
      break;
    case 3:
      document.writeln(`Seu combo: <br> ${menu[3]}`);
      break;
    case 4:
      document.writeln(`Seu combo: <br> ${menu[4]}`);
      break;
    case 5:
      document.writeln(`Seu combo: <br> ${menu[5]}`);
      break;
    default:
      alert("Algo deu errado. Tente novamente.");
  }
}

combos();
