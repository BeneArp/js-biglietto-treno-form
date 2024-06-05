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
        document.getElementById("prezzo").innerHTML = ("Il prezzo del tuo biglietto è: " + (prezzoBiglietto).toFixed(2) + "€");



        
        // CALCOLO PREZZO SCONTATO SE L'UTENTE MINORENNE
        // applicare lo sconto del 20% se l'utente ha meno di 18 anni
        if (formValueAnni === "minorenne"){
            let scontoMinori = ((prezzoBiglietto * 20) / 100);
            let prezzoScontoMinori = (prezzoBiglietto - scontoMinori);
            // stampo in console
            console.log("prezzo sconto minorenni " ,prezzoScontoMinori);

            // output prezzo minori
            document.getElementById("prezzo").innerHTML = ("Il prezzo del tuo biglietto con lo sconto per i Minorenni è: " + (prezzoScontoMinori).toFixed(2) + "€");


            // CALCOLO PREZZO SCONTATO SE L'UTENTE >= 65 ANNI
            // applicare lo sconto del 40% se l'utente ha più di 65 anni
        } else if (formValueAnni === "65 >="){
            let scontoEta = ((prezzoBiglietto * 40)/100);
            let prezzoScontoEta = (prezzoBiglietto - scontoEta);
            // stampo in console
            console.log("prezzo sconto età " ,prezzoScontoEta);

            // output prezzo >= 65 anni
            document.getElementById("prezzo").innerHTML = ("Il prezzo del tuo biglietto con lo sconto dai 65 anni in su è: " + (prezzoScontoEta).toFixed(2) + "€");
        }
    }
);













// // stampo in console il prezzo scontato del 20%
// console.log("Il prezzo con lo sconto per minorenni è: ",prezzoScontoMinori + "€");



// // stampo in console il prezzo scontato del 40%
// console.log("Il prezzo con lo sconto dai 65 anni in su è: ",prezzoScontoEta + "€");
