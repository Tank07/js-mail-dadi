// la coda dell' array
// Creare un array con un numero a piacere di elementi.
// Stampare a schermo, con un ciclo, gli ultimi 5 elementi dell'array.
// Attenzione #1: quanti elementi minimo dovrà contenere l'array?
// Attenzione #2: il ciclo deve essere costruito per estrarre gli ultimi elementi da qualsiasi array, anche se non conosciamo a priori quanti elementi contiene.
// Extra Bonus
// Creiamo un array chiedendo all'utente quanti elementi dovrà contenere e generando tanti numeri interi casuali quanti sono gli elementi da inserire.
// Attenzione #3: quali controlli dobbiamo fare sull'input dell'utente?
// Super Extra Bonus: chiedere all'utente anche quanti elementi vanno estratti dal fondo dell'array.


// Bonus 1

let arrayIo = [1,2,3,4,5,6,7,8,9]
console.log(arrayIo)

for ( i = (arrayIo.length - 1); i>3; i-- ){
    document.getElementById("ultimi_cinque").innerHTML += `<div>${arrayIo[i]}</div>`;
    console.log(arrayIo[i])
  }

//   Extra Bonus

let elementi = prompt("Quanti elementi dovrà contenere l'array ?");
let arrayPrompt = [];
arrayPrompt.lenght = elementi;
console.log(arrayPrompt)

