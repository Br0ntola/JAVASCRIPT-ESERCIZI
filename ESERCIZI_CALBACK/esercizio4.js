/*Crea una funzione chiamata runCallbacks che accetta un array di funzioni di callback come argomento.
La funzione dovrebbe eseguire ogni callback nell'ordine in cui appaiono nell'array.*/

function runCallbacks(callbacks) {
    return firstCallback(callbacks) + secondCallback(callbacks) + thirdCallback(callbacks)
};

function firstCallback() {
    console.log(`"PASTA ALLA CARBONARA" - Ingredienti x 4 persone:
    - spaghetti 320g;
    - guanciale 150g;
    - tuorli d'uova 6;
    - percorino romano 50g;
    - pepe nero q.b.`)
};

function secondCallback() {
    console.log(`Preparazione: 
    -STEP 1: mettere a bollire l'acqua della pasta e salarla;
    -STEP 2: pulire il guanciale e metterlo a sudare in una padella a fuoco medio;
    -STEP 3: buttate la pasta;
    -STEP 4: creare la cremina con i tuorli, il pecorino e il pepe;
    -STEP 5: scolare la pasta e buttarla nella padella con l'olio del guanciale e saltarla un po;
    -STEP 6: spengere la fiamma e mettere la cremina`)
};

function thirdCallback() {
    console.log(`Conservazione:
    consigliamo di consumare al momento`)
};

const callbackArray = [firstCallback, secondCallback, thirdCallback];
runCallbacks(callbackArray);