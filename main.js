// Il computer deve generare 16 numeri casuali tra 1 e 100.

// inserisco una funzione che generi dei numeri casuali

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// creo un ciclo in cui utilizzo la funzione per 16 volte in modo da avere dei numeri casuali e senza doppioni
// per far questo devo avere un array vuoto da popolare
// I numeri non possono essere duplicati.


let CpuNumber = [];


while (CpuNumber.length < 16) {
    const cpuChoose = randomNumber(1, 100);
    if (CpuNumber.includes(cpuChoose)) {
        randomNumber(1, 100);
    } else {
        CpuNumber.push(cpuChoose);
    }
}

console.log(CpuNumber);



// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.

let userBombs = [];
let isGameOver = false;
let i = 1;

while (i < 84 || isGameOver === true) {
    const userChoose = Number(prompt("Inserisci un numero tra 1 e 100"));
    if (userChoose < 1 || userChoose > 100 || isNaN(userChoose) == true) {
        Number(prompt("Inserisci un numero tra 1 e 100"));
    } else if (userBombs.includes(userChoose)) {
        alert("Numero già utilizzato, inseriscine un altro!")
    } else if (CpuNumber.includes(userChoose)) {
        alert("Hai vinto!");
        isGameOver = true;
    } else {
        userBombs.push(userChoose);
    }
} i++;



// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 => tra 1 e 80
// con difficoltà 2 => tra 1 e 50