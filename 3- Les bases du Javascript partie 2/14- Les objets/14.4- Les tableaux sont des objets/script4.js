// 14.4- Les tableaux sont des objets

const tableau = ['a', 'b', 'c'];

console.log(tableau);
console.log(typeof(tableau));
console.log(typeof tableau);
console.log(typeof(5))



console.log(tableau.length); //propriété de longueur
console.log(tableau[0]); // comme si on utilise la proporiété qui s'appelle 0 pour accéder à 'a' (VOIR chat[0] en dessous)
// + les tableaux en JS disposent de bien d'autres méthodes de manipulation.

const chat = {
    race : 'Siamois',
    poids : 3,
    couleur : 'gris',
    0 : 'chat'
}
console.log(chat[0]); // la dot notation ne marchera pas
