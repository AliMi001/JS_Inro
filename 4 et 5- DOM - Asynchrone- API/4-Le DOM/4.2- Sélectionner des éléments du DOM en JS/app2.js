//4.2- Sélectionner des éléments du DOM en JS

const premierTitre = document.getElementsByClassName('premier-titre');
console.log(premierTitre);


const premierID = document.getElementById('premier-id');
console.log(premierID);


const titreNu = document.querySelector('h3'); // selectionner juste le premier élément dans l'ordre du DOM
console.log(titreNu);


const titreNu2 = document.querySelector('.premier-titre'); // query selector est utilisable aussi pour les ids/classes
console.log(titreNu2);


const allItems = document.querySelectorAll('.item-liste');
console.log(allItems); // nodelist: tableau comparable à htmlCollection
