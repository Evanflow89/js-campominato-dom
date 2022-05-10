// Il computer deve generare 16 numeri casuali tra 1 e 100.

// inserisco una funzione che generi dei numeri casuali

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// Elementi Html

const container = document.querySelector(".container");
const items = document.querySelector(".items");

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

for (let i = 1; i <= difficult; i++) {
    const element = document.createElement("div");
    element.classList.add("item");
    element.innerHTML += i;
    items.append(element);
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


while (attempts.length < 10 && bombExploded === false) {
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
    alert(`Hai perso! Il tuo punteggio è ${attempts.length}`);
} else {
    alert("Hai vinto!")
}

