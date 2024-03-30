// 13.2 Utiliser les regex
const str = 'Lorem ipsum dolor sit amet.551612561';


const regex = /[a]/;
console.log(str.match(regex));


const regex2 =  /[aoe]/g; // g donne toute les occurence
console.log(str.match(regex2));


const regex3 =  /[a-z]/g; // chercher toutes les lettres en miniscule 
console.log(str.match(regex3));


const regex4 =  /[^a-z]/g; // tout ce qui n'est pas une lettre miniscule 
console.log(str.match(regex4));


const regex5 =  /[^A-Z]/g; // tout ce qui n'est pas une lettre majuscule 
console.log(str.match(regex5));

const regex6 =  /[A-Z]/gi; // g:donner toutes les occurence i: insensitive (non sensible à la casse) 
console.log(str.match(regex6));


let reg= /[0-9]/g;
console.log(str.match(reg));

reg = /\d/gi; // \d: digits qui est equivalent à [0-9]
console.log(str.match(reg));

reg = /\D/gi; // \D: tout ce qui n'est pas digit
console.log(str.match(reg));

reg = /\s/gi; // \s: les espaces
console.log(str.match(reg));

reg = /\S/gi; // \S: tout ce qui n'est pas un espace
console.log(str.match(reg));

reg = /\w/gi; // \w: [a-zA-Z0-9_]
console.log(str.match(reg));

reg = /\W/gi; // \W: l'inverse de \w
console.log(str.match(reg));


reg = /[0-9\s]/gi; // combinaison de selection
console.log(str.match(reg));

/**
 * aller sur MDN pour plus d'information sur le regex pour  gérer les expressions rationelles
 * https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Regular_expressions
 */

/** La méthode replace */
