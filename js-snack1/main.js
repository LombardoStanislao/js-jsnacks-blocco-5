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

    var min = bike[0].Weight;
    var oggettoMin = bike[0];

    for (var i = 0; i < bike.length; i++) {

//Creo una variabile di appoggio per ogni oggetto

        var currentBike = bike[i];

        var weight = currentBike['Weight'];

        // var risultato = getMaxOfArray(weight);

        console.log('peso da verificare', weight);

        if (weight < min) {

            min = weight;
            oggettoMin = currentBike;
        }
    };

    for (var key in oggettoMin) {

        $('#light-bike').append(key + ": " + oggettoMin[key] + ' ');
    }



    console.log(min);
    console.log(oggettoMin);



});
