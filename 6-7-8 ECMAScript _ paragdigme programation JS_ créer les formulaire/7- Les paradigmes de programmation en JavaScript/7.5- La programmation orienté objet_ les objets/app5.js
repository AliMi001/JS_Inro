//7.5- La programmation orienté objet_ les objets

/**
 * Soit en créant des objets 
 * soit en créant des classes instanciables.
 */
const voiture = {
    marque : 'ford',
    annee: 2009,
    couleur: 'blanche',
    rouler: function(){
        console.log("Rouler!!");
    }
}

voiture.rouler();
console.log(voiture.hasOwnProperty('marque'));
console.log(voiture.hasOwnProperty('roues'));
console.log(Object.values(voiture));
console.log(Object.keys(voiture));

