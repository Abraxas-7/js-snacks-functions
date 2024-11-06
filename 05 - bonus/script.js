/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
function greet(inputName) {
    let currentHour = new Date().getHours();
    if(currentHour < 13) {
        return `Buongiorno ${inputName}!`;
    } 
    else if (currentHour < 17) {
        return `Buonpomeriggio ${inputName}!`;
    }
    else {
        return `Buonasera ${inputName}!`;
    }
}   

// Invoca la funzione qui e stampa il risultato in console
const result = greet(name);
console.log(result);


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.