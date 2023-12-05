/*-Crea una semplice Promise che si risolve dopo un ritardo di 2 secondi. -Utilizzare setTimeout per simulare un'operazione asincrona */

console.log("INSERT CARD");

setTimeout(() => {
    console.log("LOADING . . . ");
}, 1000);


function withdrawMoney(debitCard) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (debitCard > 0) {
                resolve(`AVAILABLE BALANCE: ${debitCard}. SELECT THE AMOUNT TO WITHDRAW`);
                setTimeout(() => { console.log("INSERT PIN AND WAIT") }, 2500);
                setTimeout(() => { console.log("COLLECT THE MONEY AND THE CARD") }, 4000);
                setTimeout(() => { console.log("HAVE A GOOD DAY!") }, 5000);
            } else {
                reject(new Error(`NO BALANCE AVAILABLE: ${debitCard}`));
                setTimeout(() => { console.log("COLLECT THE CARD, HAVE A GOOD DAY!") }, 3000);
            };
        }, 2000);

    });
};

withdrawMoney(0)
    .then((data) => { console.log(data) })
    .catch((error) => { console.log(error.message) });