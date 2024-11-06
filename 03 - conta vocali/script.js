/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function countVowels(str) {
    const vowels = "aeiouAEIOU"; // Vocali sia minuscole che maiuscole 
    let vowelsCount = 0;
    str
    for(let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i]))  // Controlla se la l'elemento selezionato della stringa è all'interno della stringa vowels per vedere se è una vocale
            vowelsCount++;
    }
    return vowelsCount;
}

// Invoca la funzione qui e stampa il risultato in console
const result = countVowels(word);
console.log( result !== 0  ? result : "Nessuna vocale contenuta in questa parola");

//Risultato atteso se si passa 'javascript': 3 (a, a, i)