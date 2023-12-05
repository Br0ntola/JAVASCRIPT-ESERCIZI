//esercizio in pair con Davide Lodde

/*Crea una catena di Promises per simulare un'operazione asincrona in più fasi:
-La prima Promise recupera i dati dell'utente { id: 1, name: 'John' }. 
-La seconda Promise recupera i post dell'utente ['Post 1', 'Post 2', 'Post 3']. 
-Infine, chiama le funzioni per recuperare e stampare in console il nome dell'utente e i titoli dei post.*/

let user = { id: 1, name: 'John' };

let userPosts = ['POST 1', 'POST 2', 'POST 3'];

function fetchUserData() {

    console.log("LOADING . . .");

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (user.id > 0 && typeof user.name === "string") {
                resolve(`THIS IS THE USER YOU ARE LOOKING FOR: "${user.name}"`);
            } else {
                reject("THERE IS NO USER WITH THIS NAME OR ID");
            }
        }, 1000);
    });
};

function fetchUserPosts(userId, userName) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("POST LOADING . . .");
        }, 2000);

        setTimeout(() => {
            if (userPosts !== null && userPosts.length !== 0) {
                resolve(`(ID: ${userId} NAME: ${userName}) ${userPosts.join(" - ")}`);
            } else {
                reject(`${userName} HAS NOT POSTED ANYTHING YET`);
            }
        }, 3000);
    });
};

fetchUserData().then((data) => {
    console.log(data);
    return fetchUserPosts(user.id, user.name).then((post) => {
        console.log(post);
    }).catch((noPost) => {
        console.log(noPost);
    });
}).catch((error) => {
    console.log(error)
});
