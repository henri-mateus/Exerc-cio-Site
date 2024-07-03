function carregar() {
  var msg = window.document.getElementById("msg");
  var img = window.document.getElementById("imagem");
  var data = new Date();
  var hora = data.getHours();
  var minute = data.getMinutes();

  msg.innerHTML = `Agora são ${hora} horas e ${minute} minutos.`;
  if (hora >= 0 && hora < 12) {
    img.src = "manha.jpg";
    document.body.style.background = "#e2cd9f";
  } else if (hora >= 12 && hora <= 18) {
    img.src = "tarde.jpg";
    document.body.style.background = "#b9846f";
  } else {
    img.src = "noite.jpg";
    document.body.style.background = "#515154";
  }
}
function trocamensagem() {
  var data = new Date();
  var hora = data.getHours();

  if (hora >= 0 && hora < 12) {
    mensagem.innerHTML = "Bom Dia!";
    console.log("Mensagem:Bom Dia!");
  } else if (hora >= 12 && hora < 18) {
    mensagem.innerHTML = "Boa Tarde!";
    console.log("Mensagem:Boa Tarde!");
  } else {
    mensagem.innerHTML = "Boa Noite!";
    console.log("Mensagem:Boa Noite!");
  }
}
