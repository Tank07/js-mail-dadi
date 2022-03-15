// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?

let numeroUtente = Math.floor(Math.random() * 6) + 1;
console.log( `Il numero del giocatore è = ${numeroUtente}`);
let numeroComputer = Math.floor(Math.random() * 6) + 1;
console.log( `Il numero del computer è = ${numeroComputer}`);

if (numeroUtente > numeroComputer) {
    console.log(numeroUtente, numeroComputer);
    document.getElementById("esito").innerHTML = `<div>Vince il giocatore con il numero <span>"${numeroUtente}"</span> , essendo maggiore del numero del computer <span>"${numeroComputer}"</span> </div>`;
} else if (numeroUtente < numeroComputer) {
    console.log(numeroUtente, numeroComputer);
    document.getElementById("esito").innerHTML = `<div>Vince il computer con il numero <span>"${numeroComputer}"</span> , essendo maggiore del numero del giocatore <span>"${numeroUtente}"</span> </div>`;
}  else if (numeroUtente == numeroComputer) {
        console.log(numeroUtente, numeroComputer);
        document.getElementById("esito").innerHTML = `<div>Si è verificato un pareggio essendo <span>"${numeroUtente}"</span> , e <span>"${numeroComputer}"</span> lo stesso numero </div>`;
}
