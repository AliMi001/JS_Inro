//7.10- Les sous-classes


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
        console.log(`Date de sortie de cette véhicule ${this.annee}`);
    }

}

class Moto extends Voiture{

    assurance(){
        console.log("Vous avez pris une assurance !");
    }

}

const moto1 = new Moto('Suzuki', 2012, 1);

console.log(moto1);
moto1.dateSortie();
moto1.assurance();

const v1 = new Voiture('fiat', 2009, 2);
//v1.assurance(); // erreur car c'est méthode associé seulement à la class Moto
