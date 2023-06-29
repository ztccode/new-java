function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById("txtano");
  var res = document.getElementById("res");
  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert("Verifique os dados e tente novamente!");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(fano.value);
    var genero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");
    if (fsex[0].checked) {
      genero = "Homem";
      if (idade >= 0 && idade < 10) {
        // CRIANÇA
        img.setAttribute("src", "foto-bebe-m.jpg");
      } else if (idade < 21) {
        // JOVEM
        img.setAttribute("src", "foto-jovem-m.jpg");
      } else if (idade >= 50) {
        // IDOSO
        img.setAttribute("src", "foto-idoso-m.jpg");
      }
    } else if (fsex[1].checked) {
      genero = "Mulher";
      if (idade >= 0 && idade < 10) {
        // CRIANÇA
        img.setAttribute("src", "foto-bebe-f.jpg");
      } else if (idade < 21) {
        // JOVEM
        img.setAttribute("src", "foto-jovem-f.jpg");
      } else if (idade >= 50) {
        // IDOSO
        img.setAttribute("src", "foto-idoso-f.jpg");
      }
    }
    res.style.textAlign = "center";
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`;
    res.appendChild(img);
  }
}
