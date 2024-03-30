//14.2- Valeurs primitives vs références

/**
 * type primitives: string, number, boolean, undefined, null.
 * type de références: objets et tableaux.
 */

//type primitives
let a = "abc";
let b = a;

console.log(a,b);
a = "zzz";
console.log(a,b);
/**
 * pour le type primitive
 * à la seconde ou je donne référence a une variable de type primitive (let b = a;) ça crée une nouvelle place dans la mémoire qui s'appelle le stack et ça crée directement une nouvelle place qui va être indépendante de toutes les autres.
 */




// type de références
let obj1 = {str: 'abc'};
let obj2 = obj1;

console.log(obj1,obj2);
obj1.str = "zzz";
console.log(obj1,obj2);

let arr1 = [1,2,3];
let arr2 = arr1;
console.log(arr1, arr2);
arr1.push(4500);
console.log(arr1, arr2); // font tous les deux reference au même tableaux

/**
* Notre objet c'est une valeur de référence.

* Si je fais 10 000 let qui vont être égal à cet objet obj1, ils vont tous pointer vers le même objet.
D'accord, ça va être la même référence partout.

* Donc si je change la valeur de cet objet, ça va changer la valeur de toutes nos let (vu que tous nos let vont pointer vers le même objet.)
 */