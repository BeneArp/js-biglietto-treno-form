// Scrivere un programma che chieda all’utente:
// - Il numero di chilometri da percorrere - Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole: - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.
// [insomma quello che avete fatto ieri… :riciclo::occhiolino: ]
//  MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
// MILESTONE 2:
// Solo una volta che il milestone 1 sarà completo e funzionante, allora completeremo il form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
// Il recap dei dati e l’output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).








// predo dal documento il bottone 'Genera'
const bottoneCalcolo = document.querySelector(".calcolo");
// prendo dal documento il form per il campo chilometri da percorrere
const chilometriDaPercorrere = document.getElementById("chilometri");
// prendo dal documento il form per il campo anni
const anniUtente = document.getElementById("anni");

// prendo dal documento il div con i dettagli del biglietto in display none
const anteprimaBiglietto = document.getElementById("hidden");





// evento legato al click sul bottone 'Genera'
bottoneCalcolo.addEventListener('click',

    function(){
        // lettura valore nel form chilometri da percorrere
        let formValueChilomteri = parseInt(chilometriDaPercorrere.value);
        // stampo in console
        console.log(formValueChilomteri);

        // lettura valore nel form anni utente
        let formValueAnni = anniUtente.value;
        // stampo in console
        console.log(formValueAnni);


        // CALCOLO PREZZO BASE SENZA SCONTI
        // moltiplicare i chilometri inseriti dall'utente per 0.21€ (prezzo al km)
        let prezzoBiglietto = (formValueChilomteri * 0.21);
        // stampo in console
        console.log("prezzo intero " ,prezzoBiglietto);

        // output prezzo base
        document.getElementById("prezzo").innerHTML = ((prezzoBiglietto).toFixed(2) + "€");

        // output tipo di tariffa
        document.getElementById("tariffa").innerHTML = ("Biglietto Standard");



        
        // CALCOLO PREZZO SCONTATO SE L'UTENTE MINORENNE
        // applicare lo sconto del 20% se l'utente ha meno di 18 anni
        if (formValueAnni === "minorenne"){
            let scontoMinori = ((prezzoBiglietto * 20) / 100);
            let prezzoScontoMinori = (prezzoBiglietto - scontoMinori);
            // stampo in console
            console.log("prezzo sconto minorenni " ,prezzoScontoMinori);

            // output prezzo minori
            document.getElementById("prezzo").innerHTML = ((prezzoScontoMinori).toFixed(2) + "€");

            // output tipo di tariffa
            document.getElementById("tariffa").innerHTML = ("Biglietto Minorenni");


            // CALCOLO PREZZO SCONTATO SE L'UTENTE >= 65 ANNI
            // applicare lo sconto del 40% se l'utente ha più di 65 anni
        } else if (formValueAnni === "65 >="){
            let scontoEta = ((prezzoBiglietto * 40)/100);
            let prezzoScontoEta = (prezzoBiglietto - scontoEta);
            // stampo in console
            console.log("prezzo sconto età " ,prezzoScontoEta);

            // output prezzo >= 65 anni
            document.getElementById("prezzo").innerHTML = ((prezzoScontoEta).toFixed(2) + "€");

            // output tipo di tariffa
            document.getElementById("tariffa").innerHTML = ("Biglietto Over 65");
        }



        // ATTRIBUZIONE VALORI CAMPI DA MOSTRARE NELLA SEZIONE "IL MIO BIGLIETTO"
        // prendo dal documento il form per il campo nome e cognome
        const datiUtente = document.querySelector(".info");

        // attribuisco alla variabile il valora inserito nel form
        let nomeCognome = datiUtente.value;

        // output valore nome e cognome utente
        document.getElementById("nomepasseggero").innerHTML = nomeCognome;


        // cambio display div con dettagli del biglietto al click
        anteprimaBiglietto.style.display = "block"

    }

);


// output numero carrozza
document.getElementById("carrozza").innerHTML = Math.floor((Math.random() * 10) + 1);


// output codice
document.getElementById("codice").innerHTML = Math.floor(Math.random() * 10000);




// prendo dal documento il bottone annulla
const bottoneReset = document.querySelector(".close");

bottoneReset.addEventListener('click',
    function(){
        anteprimaBiglietto.style.display = "none"
    }
);





