function InserirAluno() {
  var Matricula = prompt("Insira a matricula do aluno");
  var Nome = prompt("Insira o nome do aluno");
  var Faltas = parseInt(prompt("Insira as faltas do aluno"));
  var P1 = parseFloat(prompt("Insira  a nota P1 do aluno"));
  var P2 = parseFloat(prompt("Insira a nota P2 do aluno"));
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
      PR = parseFloat(prompt("Digite a nota da PR do aluno"));
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
}
