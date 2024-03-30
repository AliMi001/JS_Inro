// 13.1 les méthodes liées aux chaines

/*
- chaine de caractère: itérable
- les caractères d'une chaine de caractères represente des élément d'un tableau iterable*/

const str = 'Lorem ipsum dolor sit amet.';

console.log(str.charAt(4));
console.log(str[4]);

console.log(str.includes('ipsum'));

console.log(str.indexOf('ipsum')); // index where this string starts

console.log(str.charCodeAt(4)); // le code unicode du caractère à la position 5 ( index 4)

 
console.log(str.slice(15)); // couper à partire de l'index 15
console.log(str.slice(-15)); //fait le compte de la fin et return les dénier 15 caractère

//split
let strToArray = str.split();
console.log(strToArray);

strToArray = str.split('')
console.log(strToArray); //split en lettre
strToArray = str.split(' ')
console.log(strToArray);//split en mot


//join
const arrayToStr = strToArray.join(' ')
console.log(arrayToStr)

//concat
const str1 = "hello";
const str2 = "World";
console.log(str1.concat(str2));
console.log(str1.concat(', ',str2)); //', ' c'est le separateur
//console.log(str1+' '+str2);

 