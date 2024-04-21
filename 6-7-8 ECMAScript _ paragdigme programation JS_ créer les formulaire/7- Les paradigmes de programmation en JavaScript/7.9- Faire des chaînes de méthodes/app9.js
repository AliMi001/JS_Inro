//7.9- Faire des chaînes de méthodes
/**
 * Method chaining:
 * manière de faire pour enchaîner des méthodes qui viennent d'un même objet.
 */

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

const voiture1 = new Voiture('Fiat', 2015, 0);

console.log(voiture1);
voiture1.rajoutOption("Climatisation");
voiture1.rajoutOption("Régulateur de vitesse");
voiture1.rajoutOption(" fermeture centralisée de portes");

const voiture2 = new Voiture('Fiat', 2009, 0);
//chaining methods
voiture2.rajoutOption("Climatisation").rajoutOption("Régulateur de vitesse").rajoutOption(" fermeture centralisée de portes").rajoutOption(" fermeture centralisée de portes"). dateSortie();