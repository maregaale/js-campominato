// CONSEGNA:

// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 => tra 1 e 80
// con difficoltà 2 => tra 1 e 50


// SVOLGIMENTO:

// genero 16 numeri casuali tra 1 e 100
// funzione per generare numero random da x a y
function randomGenerator(x, y) {
  return Math.floor(Math.random() * (y - x + 1) ) + x;
}

// ciclo per 16 volte generando i 16 numeri
var random = [];
for(var i = 0; i < 16 ; i++) {

  var numberCpu = parseInt(randomGenerator(1, 100));
  // controllo che il numero non sia già presente
  if (random.includes(numberCpu) == false) {
      random.push(numberCpu);
  } else {
    i--;
  }
}
console.log(random);
// chiedo all'utente di inserire un numero alla volta
var insertUser = [];

// chiedo un numero fintanto che questo non è nella lista dei nueri vietati
var i = 0;
while (i <= (100 - random.length) && !(random.includes(numberUser))) {
  var numberUser = parseInt(prompt("inserisci un numero da 1 a 100"));

  // controllo che l'utente non inserisca lo stesso numero
  if (!(isNaN(numberUser)) && numberUser != "") {
    if (numberUser >= 1 && numberUser <= 100 ) {
      if (insertUser.includes(numberUser) == false) {
        insertUser.push(numberUser);
      } else {
        alert("non ripetere lo stesso numero");
      }
    } else {
      alert("devi inserire un numero da 1 a 100");
    }
  } else {
    alert("devi inserire un numero");
  }


  i++;
}

// stampo il punteggio raggiunto dall'utente
console.log("il tuo punteggio è di " + (insertUser.length - 1));
