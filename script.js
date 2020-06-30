// DESCRIZIONE ESERCIZIO

// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var max = 100;
var min = 1;
// array dentro cui salvo i numeri random scelti dal computer
var numeriComputer = [];
// array in cui salvo i numeri scelti dall'utente
var numeriUtente = [];

// facciamo generare al computer 16 numeri casuali compresi tra 1 e 100 che salveremo in un array

var numeriComputer = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(numeriComputer);
