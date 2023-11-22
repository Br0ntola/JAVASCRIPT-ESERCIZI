/*Scrivi una funzione filterOutOdds che accetta un numero qualsiasi di argomenti e restituisce un array contenente solo i numeri pari.
Utilizzare il parametro rest per raccogliere gli argomenti.*/

//Prova ad usare l'operatore modulo per ottenere i numeri pari.

function filterOutOdds(...numbers) {
    return numbers.filter(num => num % 2 == 0)
};

const myNum = filterOutOdds(1, 2, 3, 4, 5, 6);

console.log(myNum);