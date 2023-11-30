/*Riscrivi la funzione fetchDataFromAPI dell'esercizio Le Callback - 6 utilizzando Promises per una migliore gestione degli errori.
La promise dovrebbe risolversi con i dati e rifiutare con un messaggio di errore.*/

const info = {
    name: "Mario",
    surname: "Rossi",
    classe: "3B",
    matematica: 8,
    italiano: 9,
    inglese: 6
};

function fetchDataFromAPI(mail, password) {

    console.log("PER POTER RECUPERARE I DATI RICHIESTI INSERIRE MAIL E PASSWORD");

    setTimeout(() => {
        console.log("MAIL E PASSWORD INSERITI ... ATTENDERE PREGO");
    }, 2500);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (mail.includes("@") && typeof password === "string" && password.length >= 8) {
                resolve("ACCESSO ESEGUITO CON SUCCESSO!");
                setTimeout(() => {
                    console.log("DI SEGUITO I DATI RICHIESTI");
                    console.log(info)
                }, 3500)
            } else {
                reject(`MAIL O PASSWORD NON VALIDI, RIPROVARE`);
            }
        }, 4000);
    });
};

fetchDataFromAPI("mariorossi@gmail.com", "r0ss1mario").then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error)
});