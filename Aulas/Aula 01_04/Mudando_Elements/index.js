let corpo = window.document.body;

corpo.style.background = "#331515";
corpo.style.color = "#fff";
corpo.style.textAlign = "center";
corpo.style.fontSize = "22px";
corpo.style.fontFamily = "Verdana";

document.getElementById("verde").style.width = "200px";
document.getElementById("verde").style.height = "50px";
document.getElementById("verde").style.fontSize = "20px";
document.getElementById("verde").style.borderRadius = "47rem";

document.getElementById("vermelho").style.width = "200px";
document.getElementById("vermelho").style.height = "50px";
document.getElementById("vermelho").style.fontSize = "20px";
document.getElementById("vermelho").style.borderRadius = "47rem";

function verde() {
  corpo.style.background = "#076900";
  document.querySelector(".image").src = "../images/face.png";
  document.querySelector(".image").style.width = "20%";
}

function vermelho() {
  corpo.style.background = "#331515";
  document.querySelector(".image").src = "../images/whats.png";
  document.querySelector(".image").style.width = "20%";
}
