//7.6- Utilisation des classes

/**
 * les classes sont vue comme des prototype d'objet
 * Comme des petites usines à créer des objets avec à chaque fois avec des propriétés differentes
 */


class Voiture{
    
    constructor(){ // cela est statique
        this.marque = 'Ford';
        this.annee = 2009;
    }
}

const voiture1 = new Voiture();
console.log(voiture1)
const voiture2 = new Voiture();
console.log(voiture2)



class Vehicule{
    constructor(marque, annee){ // cela est dynamique
        this.marque = marque;
        this.annee = annee;
    }
}

const vehicule1 = new Vehicule('Fiat', 2015);
console.log(vehicule1);
const vehicule2 = new Vehicule('Toyota', 2012);
console.log(vehicule2);
const vehicule3 = new Vehicule('Peugeot', 2011);
console.log(vehicule3);


