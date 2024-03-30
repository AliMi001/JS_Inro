/*12.2-Les méthodes liées aux tableaux */
let tableau = ['a','b','c','d','e','d'];

//mettre une valeau à la fin du tableau
tableau.push(5);
console.log(tableau);

// enlever le dernier élément d'un tableau
tableau.pop()
console.log(tableau);

// enlever le premier élément d'un tableau
tableau.shift();
console.log(tableau);

// rajouter le premier élément du tableau
tableau.unshift('a');
console.log(tableau);

//index de la première occurence d'une valeur
console.log(tableau.indexOf('d'));




// enlever des éléments d'un tableau ou en rajouter: modifier le même tableau   
tableau.splice(0,5); //enlever les 2 premiers élmts à partir de l'index 0
console.log(tableau);

tableau = ['a','b','c','d','e'];
tableau.splice(0,1,'start'); // à partir de l'indx 0, enlever 1 elmts, et ajouter à l'indx 0 l'élément 'start'
console.log(tableau);


//enlever des éléments d'un tableau : en retournant un nouveau tableau
tableau = ['a','b','c','d','e'];
let tabSliced=[];

tabSliced = tableau.slice(0,3); // tableau commence de l'index 0 à l'index (3-1) 
console.log(tabSliced);
//console.log(tableau);



//Assembler deux tableaux : concaténation
const tableau1 = ['a','b','c','d','e'];
const tableau2 = ['z','x','y'];
const tableau3 = tableau1.concat(tableau2);
console.log(tableau3);

//savoir si une valeur se trouve dans un tableau
console.log(tableau3.includes("j"));

//aplatir un tableau
const multitab = [1,2,3,[4,5,6]];
console.log(multitab.flat());

const multitab2 = [1,2,3,[4,5,[6]]];
console.log(multitab2.flat()); //aplatir à 1 niveau

console.log(multitab2.flat(2)); //aplatir à 2 niveaux

//Join(): transformer un tableau en chaine de caractères
console.log(tableau1.join());
console.log(tableau1.join(' '));

//renverser un tableau
console.log(tableau1.reverse())

/* plus d'info  sur les methodes en js:
tappez sur google "array method in js MDN"
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
*/

