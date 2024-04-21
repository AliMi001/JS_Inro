//7.2- les fonctions pures

function auCarre(n){
    return n * n;
}
console.log(auCarre(3)); //auCarre est une fonction pure


let compteur = 1;
function incrCompteur(val){
    compteur = compteur + val;
}
incrCompteur(1);
console.log(compteur);
//incrCompteur n'est pas une fonction pure

compteur = 1;
function incrCompteurPure(val){
    return compteur + val;
}
console.log(incrCompteurPure(1)); //2
console.log(compteur); //incrCompteurPure est une fction pure



/**
 * Une fonction pure en JavaScript est une fonction qui produit toujours le même résultat pour les mêmes entrées et qui n'a pas d'effets secondaires observables.

Cela signifie que :

1. Déterminisme : Pour une entrée donnée, une fonction pure retourne toujours la même sortie, sans aucun effet de bord. Cela garantit que l'exécution de la fonction ne dépend pas de l'état externe du programme.

2. Pas d'effets secondaires : Une fonction pure ne modifie pas l'état global ou l'état de ses paramètres, elle ne modifie pas les variables en dehors de sa portée, ni ne modifie des variables globales. En d'autres termes, elle ne produit que des résultats calculés à partir de ses arguments.
 */