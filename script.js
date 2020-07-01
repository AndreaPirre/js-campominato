// DESCRIZIONE ESERCIZIO

// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var numeriRandom = [];
var min = 1;
var max= 100;




// ciclo while che mi richiama la funzione che mi genera i numeri random dal computer
while (numeriRandom.length < 16) {
 var numeroCasuale = generaNumeriComputer(1, 100);
    numeriRandom.push(numeroCasuale);
}
console.log("Numeri scelti dal computer:  " + numeriRandom);
document.getElementById('numeri-random').innerHTML= "Il computer ha scelto questi numeri: " + numeriRandom;


// funzione che crea 16 numeri random dal computer
function generaNumeriComputer(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;

// }creo una funzione che mi controlla se il numero è già stato scelto nell'array


function presenteInArray(array, element) {
  var i = 0;
  var result = false;
  while (i < array.length && result == false) {
    if (array[i] == element) {
      result = true;
    }
    i++;
  }
  return result;
}




//
// var numeriRandom = [];
// var numeriUtente = [];
// var punteggio = 0;
// var possibilita = 3;
// var numeroUtente;
// var trovato = false;
//
// // genero numeri random
// while (numeriRandom.length < 16) {
//   //inserisco solo se il numero non è già presente nell'array
//   var numeroCasuale = generaNumeriRandom(1, 100);
//   var cerca = presenteInArray(numeriRandom, numeroCasuale);
//   if (cerca == false) {
//     numeriRandom.push(numeroCasuale);
//   }
// }
// console.log("numeri random " + numeriRandom);
// document.getElementById("numeri-random").innerHTML = numeriRandom;
//
// // l'utente inserisce un numero per 84 tentativi
//
// while (numeriUtente.length < possibilita && trovato == false) {
//   // chiedo un numero all'utente con un ciclo per verificare che i numeri rispettino il range
//
//   numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 100"));
//   richiediNumeroCorretto();
//
//   if (presenteInArray(numeriUtente, numeroUtente) == false) {
//     numeriUtente.push(numeroUtente);
//     // se il numero dell'utente è presente nelle numberBomb hai perso
//     if (presenteInArray(numeriRandom, numeroUtente) == true) {
//       console.log("partita finita");
//       document.getElementById("messaggio").innerHTML = "Partita finita. Hai beccato il numero nascosto";
//       trovato = true;
//     } else {
//       punteggio++;
//     }
//   }
// }
// console.log(" è stato trovato? " + trovato);
// console.log("punteggio" + punteggio);
// document.getElementById("punteggio").innerHTML = "Hai totalizzato un punteggio di " + punteggio;
//
// if (numeriUtente.length == possibilita) {
//   document.getElementById("messaggio").innerHTML = "Hai vinto la PARTITA senza lasciarci le penne!";
// }
//
// // FUNZIONI DELLO SCRIPT
// // genero funzione numero random
// function generaNumeriRandom(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
//
// //funzione che controlla che un numero sia in un certo range
// function controlloRangeNumeri(min, max, number) {
//   var result = false;
//   if (number >= min && number <= max) {
//     result = true;
//   }
//   return result;
// }
//
// // funzione che cerca in un array
// function presenteInArray(array, element) {
//   var i = 0;
//   var result = false;
//   while (i < array.length && result == false) {
//     if (array[i] == element) {
//       result = true;
//     }
//     i++;
//   }
//   return result;
// }
//
// // richiedi numero corretto
// function   richiediNumeroCorretto() {
//   while (controlloRangeNumeri(1, 100, numeroUtente) == false) {
//     numeroUtente = parseInt(prompt("Per favore inserisci un numero corretto: da 0  a 100" ));
//     console.log('Numero inserito: ' + numeroUtente);
//   }
// }
