// inspecter votre page HTML et vous aurez ces messages console.log dans la console
const nombre = 10;
//nombre = 25 // on ne peut pas rassigner une valeur à une variable constante
console.log(nombre);

// differntes manière de selectionner des lement HTML
const elmt1 = document.querySelector("h1");
console.log(elmt1);

const elmt2 = document.querySelector(".titre1");
console.log(elmt2);

const elmt3 = document.querySelector("#monTitre");
console.log(elmt3);

const elmt4 = document.getElementById("monTitre");
console.log(elmt4);

const elmt5 = document.getElementsByClassName("titre1");
console.log(elmt5);

const allH2 = document.querySelectorAll(".titre2");
console.log(allH2);