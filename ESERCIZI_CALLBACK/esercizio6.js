/*Dato l'oggetto { name: "John", age: 30 } crea una funzione che simula un'operazione asincrona, come il recupero dei dati da un'API.
-Implementare una callback per gestire i dati recuperati. -Utilizzare setTimeout per simulare il ritardo dell'operazione.*/

const user = { name: "John", age: 30 };

function fetchDataFromAPI(callback) {
    console.log("RICHIESTA INVIATA")
    setTimeout(() => {
        console.log("STO RECUPERANDO I DATI")
    }, 1500);

    const id = setInterval(() => {
        console.log(".")
    }, 2000);

    setTimeout(() => {
        clearInterval(id)
    }, 8000);

    setTimeout(() => {
        console.log("USER TROVATO!!")
    }, 8500);

    setTimeout(() => {
        callback(user)
    }, 9000)
};

function handleData(data) {
    console.log(data)
};

fetchDataFromAPI(handleData);