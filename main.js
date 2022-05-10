// Il computer deve generare 16 numeri casuali tra 1 e 100.

// inserisco una funzione che generi dei numeri casuali

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// creo un ciclo in cui utilizzo la funzione per 16 volte in modo da avere dei numeri casuali e senza doppioni
// per far questo devo avere un array vuoto da popolare
// I numeri non possono essere duplicati.

const difficultLevel = Number(prompt("Scegli il livello di difficoltà tra 0, 1 e 2"));
let difficult;
let CpuNumber = [];

if (difficultLevel === 0) {
    difficult = 100
} else if (difficultLevel === 1) {
    difficult = 80;
} else if (difficultLevel === 2) {
    difficult = 50;
}



while (CpuNumber.length < 16) {
    const cpuChoose = randomNumber(1, difficult);
    if (CpuNumber.includes(cpuChoose)) {
        randomNumber(1, difficult);
    } else {
        CpuNumber.push(cpuChoose);
    }
}

console.log(CpuNumber);











// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.

let attempts = [];
let bombExploded = false;

// (userChoose < 1 || userChoose > 100 || isNaN(userChoose) == true) {
//     Number(prompt("Inserisci un numero tra 1 e 100"));

while (attempts.length < 84 && bombExploded === false) {
    const userNumber = Number(prompt("Inserisci un numero tra 1 e 100"))
    if (CpuNumber.includes(userNumber)) {
        bombExploded = true;
    } else if (attempts.includes(userNumber)) {
        alert("Il numero è già stato inserito!")

    } else {
        attempts.push(userNumber);
    }
} console.log("Il gioco è terminato!")


if (bombExploded) {
    alert(`Hai perso! Il tuo punteggio è ${attempts.lenght}`);
} else {
    alert("Hai vinto!")
}


// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 => tra 1 e 80
// con difficoltà 2 => tra 1 e 50