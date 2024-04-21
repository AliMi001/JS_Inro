//7.3- Fonction d'ordre supérieur et immutabilité
/**
 * Fonction d'ordre supérieur :  est une fonction qui prend d'autres fonctions en tant qu'arguments ou qui retourne une fonction en tant que résultat. 
 * Immuabilité : L'immutabilité fait référence au concept de rendre les données non modifiables une fois qu'elles ont été créées.
 */

const tabNumbers = [0,1,2,3,4,5,6,7,8,9,10];


//style impératif
let tableauPairs = [];
for(let i = 0; i < tabNumbers.length; i++){
    if(tabNumbers[i] % 2 == 0){
        tableauPairs.push(tabNumbers[i]);
    }
}
console.log(tableauPairs);

//style déclaratif
const checkPair = (n) => n%2 == 0; //renvoi true ou false
console.log(tabNumbers.filter(checkPair)); //filter prend la fonction checkPair en callback