//4.5- Créer et insérer un élément
const premierTitre= document.querySelector(".premier-titre");
const liste = document.querySelector('ul');

//ajouter du contenu text dans le titre H1
premierTitre.innerText = "Hello World from the JS!";

//ajouter du contenu html
const parent = document.querySelector(".parent");
parent.innerHTML = '<p>contenu html</p>';

//attention
//document.body.innerHTML = "<h1>Un text titre</h1>";//décommenter

//Créer un nouveau élément
let nvEl = document.createElement('li');
nvEl.innerText = "Nouvel item !"; //ou innerHTML
liste.appendChild(nvEl);

//document.body.appendChild( nvEl); // là on peut l'ajouter ou body

/**
 * Un nouveau élément créer peut être raajouter une seul fois, sinon il faut créer autant d'éléments que vous avez envie de rajouter.
 */