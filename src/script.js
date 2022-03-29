var frutas = ["banana", "tomate", "maça", "uva", "abacate"];

var laticínios = ["leite vegetal", "leite", "leite de vaca", "leite em pó"];

var congelados = ["frango", "coxinha"];

var doces = ["chiclete", "bala", "chocolate"];

function adicionar() {
  var adicionar = document.getElementById("lista").value;

  var listafrutas = document.getElementById("frutas");

  for (var i = 0; i < frutas.length; i++) {
    if (adicionar == frutas[i]) {
      listafrutas.innerHTML = listafrutas.innerHTML + adicionar + "<br>";
    }
  }

  var listalati = document.getElementById("laticinios");
  for (var i = 0; i < laticínios.length; i++) {
    if (adicionar === laticínios[i]) {
      listalati.innerHTML = listalati.innerHTML + adicionar + "<br>";
    }
  }

  var listacongelados = document.getElementById("Congelados");
  for (var i = 0; i < congelados.length; i++) {
    if (adicionar === congelados[i]) {
      listacongelados.innerHTML =
        listacongelados.innerHTML + adicionar + "<br>";
    }
  }

  var listadoces = document.getElementById("Doces");
  for (var i = 0; i < doces.length; i++) {
    if (adicionar === doces[i]) {
      listadoces.innerHTML = listadoces.innerHTML + adicionar + "<br>";
    }
  }
}
