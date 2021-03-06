/*
    Calcolare il prezzo del biglietto in base ai km,
    prendendo i dati da un form e stampare il biglietto.
*/

// Variabili
var prezzokm = 0.21;
var btn = document.getElementById('btnCrea');

btn.addEventListener("click", function() {
    var statoBtn = document.getElementById('btnCrea').innerHTML;

    if (statoBtn == "Calcola") {
        var nome = document.getElementById('name').value;
        var km = document.getElementById('km').value;
        var categoria = document.getElementById('categoria').value;
        var prezzo;
        var numTreno;
        var maxNumTreno = 100000;
        var minNumTreno = 90000;
        var carrozza;
        var maxCarrozza = 12;
        var minCarrozza = 1;

        console.log(nome, km, categoria);

        if ((km == "") || (nome == "")) {
            alert("Tutti i campi devono essere compilati!");
        } else if (km < 1) {
            alert("Chilometri non validi");
        } else {
            // Verifico se bisogna scontare il prezzo
            if (categoria == "Over65") {
                prezzo = km * prezzokm * 0.6;
            } else if (categoria == "Minorenne") {
                prezzo = km * prezzokm * 0.8;
            } else {
                prezzo = km * prezzokm;
            }
            console.log(prezzo);

            // Genero numero treno e carrozza
            numTreno = Math.floor(Math.random() * (maxNumTreno - minNumTreno +1) + minNumTreno);
            carrozza = Math.floor(Math.random() * (maxCarrozza - minCarrozza +1) + minCarrozza);
            console.log(carrozza);

            // Inserisco i valori
            document.getElementById('passeggero').innerHTML = nome;
            document.getElementById('numTreno').innerHTML = numTreno;
            document.getElementById('nCarrozza').innerHTML = carrozza;
            document.getElementById('prezzo').innerHTML = "€" + prezzo.toFixed(2);
            document.getElementById('tariffa').innerHTML = categoria;

            // Animazioni
            document.getElementById('titolo').innerHTML = "Ecco il tuo biglietto!";
            document.getElementById('form').className = "hidden";
            document.getElementById('biglietto').className = "show";

            // Cambio stato button
            document.getElementById('btnCrea').innerHTML = "Annulla";

        }

    } else if (statoBtn == "Annulla") {

        //Pulisco il form
        document.getElementById('name').value = "";
        document.getElementById('km').value = "";
        document.getElementById('categoria').value = "Standard";

        // Animazioni
        document.getElementById('titolo').innerHTML = "Calcolo prezzo biglietto";
        document.getElementById('biglietto').className = "hidden";
        document.getElementById('form').className = "show";

        // Cambio stato button
        document.getElementById('btnCrea').innerHTML = "Calcola";
    }


});
