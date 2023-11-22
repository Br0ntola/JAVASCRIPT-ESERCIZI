/*Crea una funzione chiamata somma che accetta un numero qualsiasi di argomenti e restituisce la somma di tali argomenti.
Utilizza il parametro rest per raccogliere gli argomenti. -Stampa in console l'output della funzione somma.*/


function somma(...arg) {
    return arg.reduce((a, numero) => a + numero, 0)
};

const mySum = somma(2, 6, 8, 9, 5);

console.log(mySum);