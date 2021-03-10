// FUNZIONI:
// funzione per generare numero random da x a y
function randomGenerator(x, y) {
  return Math.floor(Math.random() * (y - x + 1) ) + x;
}

// VARIABILI:
var difficulty;
var max;
var random = [];
var numberCpu;
var insertUser = [];
var j = 0;
var numberUser;
var score = document.getElementById('score');
var bombs = document.getElementById('bombs');

// chiedo di scegliere la difficoltà e controllo
do {
  difficulty = parseInt(prompt("inserisci una difficoltà in numero tra 0 e 2 (0 = facile, 1 = media, 2 = difficile)"));
} while (difficulty != 0 && difficulty != 1 && difficulty != 2);

// difficoltà 0, imposto il valore massimo
if (difficulty == 0) {
  max = 100;
}
// difficoltà 1, imposto il valore massimo
else if (difficulty == 1) {
  max = 80;
}
// difficoltà 2, imposto il valore massimo
else if (difficulty == 2) {
  max = 50;
}

// ciclo per 16 volte generando i 16 numeri casuali tra 1 e 100
for(var i = 0; i < 16 ; i++) {

  // assegno valore a variabile numberCpu
  numberCpu = parseInt(randomGenerator(1, max));

  // controllo che il numero non sia già presente
  if (random.includes(numberCpu) == false) {
      random.push(numberCpu);
  } else {
    i--;
  }

}

// chiedo un numero alla volta fintanto che questo non è nella lista dei nueri vietati
while (j < (max - random.length) && !(random.includes(numberUser))) {

  // assegno valore a variabile numberUser
  numberUser = parseInt(prompt("inserisci un numero da 1 a " + max));

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

  j++;

}

// stampo a schermo il punteggio raggiunto dall'utente
score.classList.add("disp_block");
document.getElementById('score_number').innerHTML = insertUser.length - 1;

bombs.classList.add("disp_block");
document.getElementById('bomb_numbers').innerHTML += random;
