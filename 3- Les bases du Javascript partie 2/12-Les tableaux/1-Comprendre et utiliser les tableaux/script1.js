/* 12.1-Comprendre et utiliser les tableaux */

let tableau = ['a','b','c','d','e'];
   //indexes:   0   1   2   3   4
   //positions: 1   2   3   4   5
   
//acceder à une valeur
console.log(tableau[2]); //index va de 0 à 4

//longueur d'un tableau
console.log(tableau.length);
console.log(tableau[tableau.length-1]); //log le dérnier élément


//Utiliser une boucle avec des tableaux
const numTab = [1,2,3,4,5,6,7,8];

for(let i=0; i < numTab.length; i++){
    console.log(numTab[i]);
}

