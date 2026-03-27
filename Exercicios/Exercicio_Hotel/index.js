let corpo = window.document.body;

corpo.style.background = "#331515";
corpo.style.color = "#fff";
corpo.style.textAlign = "center";
corpo.style.fontSize = "22px";
corpo.style.fontFamily = "Verdana";

let nomeHotel = "";
let nomeUsuario = "Kaue";

function incioPrograma() {
  nomeHotel = prompt("Digite o nome do Hotel: ");
  nomeUsuario = prompt("Digite seu nome de usuário: ");
  let senha = Number(prompt("Digite sua senha: "));
  if (senha === 2678) {
    document.writeln(
      `Seja Bem vindo ao ${nomeHotel} ${nomeUsuario}. É um imenso prazer ter você aqui!`,
    );
  } else {
    document.writeln("Senha incorreta. Tente novamente!");
    // menuInicial();
  }
}

let diariaValor = 0;

function reservarQuartos() {
  diariaValor = parseFloat(prompt("Qual o valor padrão da diária? "));
  if (diariaValor <= 0) {
    alert("Informação inválida. Tente novamente.");
    // menuInicial();
  } else {
    let diasHospedagem = Number(prompt("Quantos dias serão necessários?"));
    if (diasHospedagem <= 0 || diasHospedagem > 30) {
      alert("Informação inválida. Tente novamente.");
      // menuInicial();
    } else {
      let valorHospedagem = (diariaValor * diasHospedagem).toFixed(2);
      let nomeHospede = prompt("Qual o nome do hóspede: ");
      let confirmarReserva = Number(
        prompt(`${nomeUsuario}, você Confirma a reserva?
        1 - SIM
        2 - NÂO`),
      );
      switch (confirmarReserva) {
        case 1:
          document.writeln(
            `${nomeUsuario}, reserva efetuada para ${nomeHospede} . O valor é de ${valorHospedagem}`,
          );
          break;
        case 2:
          document.writeln(`${nomeUsuario}, reserva não efetuada;`);
          // menuInicial();
          break;
      }
    }
  }
}

// 2 - FEITO

function cadastroHospedes() {
  diariaValor = Number(prompt("Qual o valor padrão da diária?"));
  let hospedesNomes = [];
  let hospedesIdades = [];
  let hospedesMeia = [];
  let hospedesGratuidade = [];

  while (true) {
    let nome = prompt("Qual o nome do hóspede? Digite PARE encerrar.");
    if (nome.toUpperCase() === "PARE") {
      let passagem =
        hospedesNomes.length * diariaValor +
        (hospedesMeia.length / 2) * diariaValor;
      document.writeln(
        `${nomeUsuario}, o valor total das passagens é: ${passagem.toFixed(2)}; ${hospedesGratuidade.length} gratuidade(s); ${hospedesMeia.length} meia(s)`,
      );
      return;
    }
    let idade = Number(prompt("Qual a idade do hóspede?"));
    if (idade <= 6) {
      document.writeln(
        `${nome} cadastrado(a) com sucesso. ${nome} possui gratuidade. <br/>`,
      );
      hospedesGratuidade.push(nome);
    } else if (idade > 60) {
      document.writeln(
        `${nome} cadastrado(a) com sucesso. ${nome} paga meia. <br/>`,
      );
      hospedesMeia.push(nome);
    } else {
      hospedesNomes.push(nome);
      hospedesIdades.push(idade);
      document.writeln(`${nome} cadastrado(a) com sucesso. <br/>`);
    }
  }
}

// 3 FEITO

function cadastrarEPesquisar() {
  let hospedes = [];
  while (true) {
    let opcao = Number(
      prompt("Selecione uma opção: 1. Cadastrar - 2. Pesquisar - 3. Sair."),
    );
    switch (opcao) {
      case 1:
        let nome = prompt("Qual o nome do hóspede?");
        if (hospedes.length >= 15) {
          alert("Máximo de cadastros atingido.");
        } else {
          hospedes.push(nome);
          document.writeln(
            `Hóspede ${nome} foi cadastrado(a) com sucesso! <br/>`,
          );
        }
        break;
      case 2:
        let nomePesquisa = prompt("Qual o nome do hóspede?");
        let resultadoPesquisa = hospedes.filter(
          (nome) => nome === nomePesquisa,
        );
        if (resultadoPesquisa.length != 0) {
          alert(`Hóspede ${nomePesquisa} foi encontrado(a)!`);
        } else {
          alert(`Hóspede ${nomePesquisa} não foi encontrado(a)!`);
        }

        break;
      case 3:
        //menuPrincipal()
        return;
    }
  }
}

// 4

function reservaGarcons() {
  let duracaoEvento = parseFloat(prompt("Qual a duração do evento em horas?"));
  let garconsNecessarios = Number(prompt("Quantos garçons são necessários?"));
  let custo = 10.5 * duracaoEvento * garconsNecessarios;
  document.writeln(`Custo total: ${custo}.`);
  let reserva = prompt("Gostaria de efetuar a reserva? S/N");
  if (reserva === "S") {
    document.writeln(`${nomeUsuario}, reserva efetuada com sucesso.`);
  } else {
    document.writeln("Reserva não efetuada.");
  }
}

