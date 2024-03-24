//Les operations

const operation = 10 - 10; // replace '+' with '-' '/' '*'
console.log(operation);


const operationModulo = 20 % 3;
console.log(operationModulo);


const operationPuissance = 2 ** 4;
console.log(operationPuissance);


//Les chaînes de caractères

const str1 = "Ahmed";
const str2 = "Amine";
console.log(str1+' '+str2); // concaténation
console.log("Je m'appelle "+str1);
console.log("J'ai "+30); // concaténation avec des nombres


console.log(`Salute c'est "${str2}", j'ai ${30} ans `);

console.log(`${str1} ${str2}`);
/*
// autre manière de faire concaténation
console.log(`Je m'appelle ${str2}, je suis ravi de vous connaitre ${str1}`); // template literals: faire des ref à des variables ou à des expressions dans un string
console.log(`${str1} a ${15+15} ans`);
*/