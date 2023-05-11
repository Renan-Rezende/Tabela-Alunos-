function InserirAluno() {
  var Matricula = parseFloat(document.getElementById("matricula").value);
  var Nome = document.getElementById("nome").value;
  var Faltas = parseFloat(document.getElementById("faltas").value);
  var P1 = parseFloat(document.getElementById("P1").value);
  var P2 = parseFloat(document.getElementById("P2").value);
  var Média = (P1 + P2) / 2;
  var PR = 0;
  var MédiaFinal = 0;
  var Situação = "";
  if (Faltas > 20) {
    PR = "-";
    MédiaFinal = Média;
    Situação = "Reprovado";
  } else {
    if (Média >= 7) {
      PR = "-";
      MédiaFinal = Média;
      Situação = "Aprovado";
    } else {
      PR = parseFloat(document.getElementById("PR").value);
      MédiaFinal = (Média + PR) / 2;
      if (MédiaFinal >= 7) {
        Situação = "Aprovado";
      } else {
        Situação = "Reprovado";
      }
    }
  }

  var tabela = document.querySelector("table");
  var linha = tabela.insertRow(-1);
  linha.insertCell(0).innerText = Matricula;
  linha.insertCell(1).innerText = Nome;
  linha.insertCell(2).innerText = Faltas;
  linha.insertCell(3).innerText = P1;
  linha.insertCell(4).innerText = P2;
  linha.insertCell(5).innerText = Média;
  linha.insertCell(6).innerText = PR;
  linha.insertCell(7).innerText = MédiaFinal;
  linha.insertCell(8).innerText = Situação;

  document.getElementById("matricula").value = "";
  document.getElementById("nome").value = "";
  document.getElementById("faltas").value = "";
  document.getElementById("P1").value = "";
  document.getElementById("P2").value = "";
  document.getElementById("PR").value = "";
}
