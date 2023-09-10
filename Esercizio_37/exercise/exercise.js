const number = 1;

let newPromise = new Promise ((resolve, reject) => {
    if(number > 10) {
        resolve("Il numero è più grande di 10")
    }   else {
        reject("Il numero non è più grande di 10")
    }
})

newPromise
    .then ((risultato) => {
        console.log("Successo", risultato)
    })
    .catch((error) => {
        console.error("Error", error)
    })