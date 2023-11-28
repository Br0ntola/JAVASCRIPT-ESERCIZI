/*Partendo dall'esercizio Le Callback - 5, includi la gestione degli errori. Se la funzione di callback genera un errore, catturalo e gestiscilo.
Modificare la funzione performOperation per gestire l'errore e registrare un messaggio di errore.*/

function performOperation(a, b, callback) {
    let sum = a + b;
    if (typeof sum !== "number") {
        callback(new Error(`uno o entrambi i numeri inseriti non sono numeri`), null)
    } else {
        callback(null, sum)
    }
};

function displayResult(error, sum) {
    if (error) {
        console.log(error)
    } else {
        console.log(`il risultato della somma è: ${sum}`)
    }
};

performOperation(5, 3, displayResult); 