console.log("JS Funzionante");

// Input:
// Recupero: numero di chilometri ed età del passeggero
const age = parseInt(prompt("Inserisci l'età del viaggiatore"));
const distance = parseInt(prompt("Inserisci la distanza da percorrere in chilometri"));
const costoKm = 0.21;
let percentualeSconto = 0;

// Elaborazione: 
// Calcolo la tariffa di base (distanza * costo chilometrico)
// Verifico se l'utente è in una fascia d'età con scontistica
// Eventualmente applico lo sconto (cioè il ricalcolo il totale)
console.log("Input age: ", age);
console.log("Input distance: ", distance);

const costoBigliettoBase = distance * costoKm;
console.log("Costo del biglietto: ", costoBigliettoBase);

if ( age < 18 ) {
    console.log("Applicare scontistica Junior");
    percentualeSconto = 0.20;
} else if ( age > 65 ) {
    console.log("Applicare scontistica Senior");
    percentualeSconto = 0.40;
}

const costoBigliettoFinale = costoBigliettoBase - (costoBigliettoBase * percentualeSconto);

// Output: 
document.getElementById("risultato").innerHTML = `Il costo del biglietto è di ${ costoBigliettoFinale.toFixed(2) } €`;