//7.8- Créer des méthodes dans nos classes

class Voiture{
    constructor(marque, annee){ 
        this.marque = marque;
        this.annee = annee;
    }

    dateSortie(){
        console.log(`Date de sortie de cette voiture ${this.annee}`);
    }

}

const voiture1 = new Voiture('Fiat', 2015);
const voiture2 = new Voiture('Peugeot', 2009);
const voiture3 = new Voiture('Renault', 2014);
voiture1.dateSortie();
voiture2.dateSortie();
voiture3.dateSortie();

console.log(voiture1);