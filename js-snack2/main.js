// JSnack2: Creare un array di nomi e chiedere all'utente due numeri. Creare un nuovo array con i valori che si trovano in una posizione compresa tra i due numeri inseriti dall'utente.


$(document).ready(function() {

// Creo l'array di nomi

    var names = ['Luca', 'Paolo', 'Chiara', 'Giulia', 'Elena', 'Angelo', 'Cinzia', 'Nicola', 'Laura', 'Francesca', 'Claudio'];

// Creo l'array da riempire con il range di nomi

    var chosenName = [];

// Chiedo all'utente un numero
    var firstUserNumber = parseInt(prompt('Inserisci un numero tra 0 e 11'));

    var secondUserNumber = parseInt(prompt('Inserisci un numero tra 0 e 11'));

    for (var i = 0; i < names.length; i++) {

        if ((i >= firstUserNumber) && (i <= secondUserNumber)) {

            console.log(names[i-1]);
        }
    }




});
