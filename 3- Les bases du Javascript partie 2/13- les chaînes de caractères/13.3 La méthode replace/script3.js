//13.3 La méthode replace

const str = 'Lorem ipsum dolor sit amet.551612561';

const regex = /[0-9\s]/gi;

console.log(str.replace(/a/g, "ttt")); // attention au g pour remplacer toute les occurence de a
console.log(str.replace(regex,"_"))

console.log(str.replace(/[0-9]/gi,""))