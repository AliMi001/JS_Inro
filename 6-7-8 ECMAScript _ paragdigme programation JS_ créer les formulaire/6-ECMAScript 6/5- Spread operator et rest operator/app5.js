//6.5- Spread operator et rest operator

/* Spread operator */

const arr = [1, 2, 3];

console.log([arr,4]); //ici on aura [ [1, 2, 3], 4 ] alors que ce qu'on veut est [1, 2, 3, 4 ]

//solution: spread operator '...'
console.log([...arr,4]); // ça va étendre le tableau arr et cela donnera [1, 2, 3, 4 ]

const personne = {
    nom: "Tom",
    age: 25
}

const presentation = {
    ...personne, // là on étend notre objet prenom
    email: "tom@gmail.com"
}

console.log(presentation);


/* Rest operator */
function foo(nbs) {
    console.log(nbs);
}
foo(1,2,3,4,5,6,7,8); // ça va afficher seulement '1' qui est le premier paramêtre mais on veut qu'il nous retourn [1,2,3,4,5,6,7,8]

//solution: rest operator '...'
function foo2(...nbs) {
    console.log(nbs);
}
foo2(1,2,3,4,5,6,7,8)


/**
 * Spread Operator (...) : Le spread operator est utilisé pour étendre un objet itérable (comme un tableau ou une chaîne de caractères) en tant qu'arguments ou éléments distincts.
 * Rest Operator (...) : Le rest operator est utilisé pour collecter un nombre indéfini d'arguments en tant que tableau dans une fonction. Il est utilisé dans les paramètres de fonction pour capturer les arguments restants dans un tableau.
 */