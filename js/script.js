// FUNZIONI:
// funzione per generare numero random da x a y
function randomGenerator(x, y) {
  return Math.floor(Math.random() * (y - x + 1) ) + x;
}

// chiedo di scegliere la difficoltà
var difficulty = prompt("inserisci la difficoltà: 0(facile), 1(media), 2(difficile)");

// ciclo per 16 volte generando i 16 numeri casuali tra 1 e 100
var random = [];

// inserisco le diverse difficoltà
if (!(isNaN(difficulty)) && difficulty != "" && 0 <= difficulty && difficulty <= 2)  {
  // difficoltà: 0
  if (difficulty == 0) {
    var max = 100;

    for(var i = 0; i < 16 ; i++) {

      var numberCpu = parseInt(randomGenerator(1, max));
      // controllo che il numero non sia già presente
      if (random.includes(numberCpu) == false) {
          random.push(numberCpu);
      } else {
        i--;
      }
    }
  }
  // difficoltà: 1
  else if (difficulty == 1) {
    var max = 80;

    for(var i = 0; i < 16 ; i++) {

      var numberCpu = parseInt(randomGenerator(1, max));
      // controllo che il numero non sia già presente
      if (random.includes(numberCpu) == false) {
          random.push(numberCpu);
      } else {
        i--;
      }
    }
  }
  // difficoltà: 2
  else if (difficulty == 2) {
    var max = 50;

    for(var i = 0; i < 16 ; i++) {

      var numberCpu = parseInt(randomGenerator(1, max));
      // controllo che il numero non sia già presente
      if (random.includes(numberCpu) == false) {
          random.push(numberCpu);
      } else {
        i--;
      }
    }
  }
} else {
  alert("inserisci una difficoltà in numero tra 0 e 2");
}

// chiedo un numero alla volta fintanto che questo non è nella lista dei nueri vietati
var insertUser = [];
var i = 0;

while (i <= (max - random.length) && !(random.includes(numberUser))) {
  var numberUser = parseInt(prompt("inserisci un numero da 1 a " + max));

  // controllo che l'utente non inserisca lo stesso numero
  if (!(isNaN(numberUser)) && numberUser != "") {
    if (numberUser >= 1 && numberUser <= max ) {
      if (insertUser.includes(numberUser) == false) {
        insertUser.push(numberUser);
      } else {
        alert("non ripetere lo stesso numero");
      }
    } else {
      alert("devi inserire un numero da 1 a " + max);
    }
  } else {
    alert("devi inserire un numero");
  }

  i++;
}

// stampo a schermo il punteggio raggiunto dall'utente
var score = document.getElementById('score');
score.classList.add("disp_block");
document.getElementById('score_number').innerHTML = insertUser.length - 1;

var bombs = document.getElementById('bombs');
bombs.classList.add("disp_block");
document.getElementById('bomb_numbers').innerHTML += random;
