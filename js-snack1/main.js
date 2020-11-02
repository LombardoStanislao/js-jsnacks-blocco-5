// JSnack1: Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore.



$(document).ready(function() {
    // Creo un array di oggetti

    var bike = [

        {
            'Name' : 'Bikerider',
            'Weight' : 9,
        },

        {
            'Name' : 'Morpheus',
            'Weight' : 5,
        },

        {
            'Name' : 'Leaflife',
            'Weight' : 3,
        },

        {
            'Name' : 'Woodland Climber',
            'Weight' : 12,
        },

        {
            'Name' : 'Caleo',
            'Weight' : 7,
        },

        {
            'Name' : 'Bianchi',
            'Weight' : 8,
        },


    ];

// Uso il ciclo for per scorrere ogni oggetto

    for (var i = 0; i < bike.length; i++) {

//Creo una variabile di appoggio per ogni oggetto

        var currentBike = bike[i];
// Ciclo for in, per recuperare da ogni oggetto le proprietà

        for (var key in currentBike) {

            var weight = currentBike['Weight'];



        };

        var risultato = getMaxOfArray(weight);

        console.log(weight);

        console.log(risultato);
    };


    function getMaxOfArray(numArray) {
        return Math.max.apply(null, numArray);
    }



});
