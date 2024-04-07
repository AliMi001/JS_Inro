// 5.1- Utiliser setTimeout() & setInterval
/**
 * l'asynchrone en JS: C'est faire des actions qui vont être différées par rapport à un fil d'exécution.
 * On va pouvoir lancer des fonctions pour exécuter des choses dans un temps différé par rapport au fil  d'exécution classique.
 */

//setTimeout


const timeout2 = setTimeout(presentation, 2000); // au bout de 2s execute presentation

console.log("Hello");

//clearTimeout(timeout2);

function presentation(){
    console.log("Hello depuis presentation!");
}


//setInterval
let compteur = 0;
const interval = setInterval(incr, 1000); //executer incr tout les 1000ms
clearInterval(interval);

function incr(){
    compteur++;
    console.log(compteur); 
}

