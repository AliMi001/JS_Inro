//7.12- Les fonctions constructeur

//avant l'apparition des classes en JS (càd avant ES6)

function Personnage(nom, taille){
    this.nom = nom;
    this.taille = taille;

    this.avancer = function(){
        console.log(`${this.nom} avance...`);
    }
}

const perso1 = new Personnage('Raspoutine', 190);
const perso2 = new Personnage('césar', 175)

console.log(perso1, perso2);

perso1.avancer();

/**
 * la fonction avancer n'est pas placer dans <prototype>.
 * pour chaque objet crée ça va créer un fonction avancer(). => problème de mémoire si on a beaucoup d'instance Personnage.
 */

// solution 1:

function Personne(nom, taille){
    this.nom = nom;
    this.taille = taille;
}

Personne.prototype.avancer = function(){
    console.log(`${this.nom} avance...`);
}

const perso = new Personne('Youssef', 178);
console.log(perso);
perso.avancer();

const pers = new Personne('Ali', 178);
console.log(pers);



//solution2:

//utilisation des classes

