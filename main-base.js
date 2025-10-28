console.log("JS Funzionante");

// Input:
// Recupero: numero di chilometri ed età del passeggero
const age = parseInt(prompt("Inserisci l'età del viaggiatore"));
const distance = parseInt(prompt("Inserisci la distanza da percorrere in chilometri"));
const costoKm = 0.21;

// Elaborazione: 
// Calcolo la tariffa di base (distanza * costo chilometrico)
// Verifico se l'utente è in una fascia d'età con scontistica
// Eventualmente applico lo sconto (cioè il ricalcolo il totale)
console.log("Input age: ", age);
console.log("Input distance: ", distance);

const costoBigliettoBase = distance * costoKm;
console.log("Costo del biglietto: ", costoBigliettoBase);

let costoBigliettoFinale = costoBigliettoBase;

if ( age < 18 ) {
    console.log("Applicare scontistica Junior");

    // const sconto = costoBigliettoBase / 100 * 20;
    // costoBigliettoFinale = costoBigliettoBase - sconto;

    costoBigliettoFinale = costoBigliettoBase * 0.80;

} else if ( age > 65 ) {
    console.log("Applicare scontistica Senior");
    costoBigliettoFinale = costoBigliettoBase * 0.60;

}

const datoStampabile = costoBigliettoFinale.toFixed(2);

// Output: 
const msg = `Il costo del biglietto è di ${datoStampabile} €`;

document.getElementById("risultato").innerHTML = msg;
console.log(msg);
