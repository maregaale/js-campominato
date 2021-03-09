// CONSEGNA:


// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.


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
  if (insertUser.includes(numberUser) == false) {
    insertUser.push(numberUser);
  } else {
    alert("non ripetere lo stesso numero");
  }

  i++;
}

console.log(insertUser);
