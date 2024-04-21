//7.11- Comprendre le prototype
class Voiture{
    constructor(marque, annee, option){
        this.marque = marque;
        this.annee = annee;
        this.option = option;
    }
    rajoutOption(nomOption){
        this.option++;
        console.log(`Rajout de ${nomOption}, nombre d'option: ${this.option}`);
        return this;
    }
    dateSortie(){
        console.log(`Date de sortie de cette voiture ${this.annee}`);
    }

}

class Moto extends Voiture{

    assurance(){
        console.log("Vous avez pris une assurance !");
    }

}


console.log({a:'a'});
    /**
     * <prototype> (dans la console ) contient:
     * un ressemblement des méthodes qui sont liées aux objets (e.g. hasownProperty())
     */

console.log({a:'a'}.hasOwnProperty('a')); // true

console.log([1,2,3]); // on a aussi <prototype> qui rassemble les méthodes liée à cet objet (tableau)

const voiture1 = new Voiture('Ferrari', 2015, 'tout option');
console.log(voiture1); // nous aurons crée un <prototype> qui rassemble nos méthodes en plus du rassemblement <prototype> par défaut.



/**
 * <prototype> : 
 * Sert à créer des packages de méthodes qui vont pouvoir être utilisables sur tous nos objets, au lieu de répéter des méthodes qu'on rentrerait dans des propriétés ce qui serait mauvais pour la mémoire par exemple.
 */
