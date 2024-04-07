// 4.6- Supprimer un élément
const premierTitre= document.querySelector(".premier-titre");
const liste = document.querySelector('ul');


let nvEl = document.createElement('li');
nvEl.innerText = 'Nouvel item!';

//supprimer un élément
liste.children[2].remove();
//liste.remove();

//remplacer un élément
liste.children[1].replaceWith(nvEl);

