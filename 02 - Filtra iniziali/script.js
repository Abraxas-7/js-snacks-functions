/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function checkFirstLetter(arr, letter) {
    let filtredNames = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0].toLowerCase() === letter.toLowerCase()) {
            filtredNames.push(arr[i]);
        }
    }
    return filtredNames;
}

// Invoca la funzione qui e stampa il risultato in console
const userLetter = prompt("Inserisci l'iniziale dei nomi");
const result = checkFirstLetter(names, userLetter);

console.log(result.length > 0  ? result : "Nessuna parola trovata con quel iniziale")
//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]