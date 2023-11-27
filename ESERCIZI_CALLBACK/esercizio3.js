/*Scrivi una funzione chiamata filterArray che accetta un array e una funzione di callback come argomenti. 
-La funzione callback deve filtrare e restituire i numeri pari passati come argomento alla funzione filterArray
filterArray dovrebbe restituire un nuovo array contenente solo gli elementi per i quali la funzione di callback restituisce true.*/

const numbers = [1, 2, 3, 4, 5, 6];

function filterArray(arr, callback) {
    let nuovoArray = [];
    nuovoArray = arr.filter(callback)
    return nuovoArray
};

function isEven(num) {
    return num % 2 === 0

};

const evenNumbers = filterArray(numbers, isEven);
console.log(evenNumbers); // Should output [2, 4, 6]