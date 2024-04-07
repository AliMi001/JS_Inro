//4.3- Sélectionner parent_enfant_même niveau

const liste = document.querySelector('ul');
/**
 * ul a des enfants
 * ses enfants sont aussi des noeuds (les noeud sont des noeuds mais aussi des élément html)
 * les nodes: englobent tout, même le text et les comentaires, etc.
 * html élement: n'englobe que les éléments HTML.
 */
console.log(liste.children); // cibler les éléments html qui sont enfants à cette liste

console.log(liste.childNodes); // text c'est un simple retour à la ligne: i.e. le text et le comentaire sont comptés ici comme des noeuds

console.log(liste.firstElementChild);
console.log(liste.lastElementChild);


console.log(liste.parentNode);
console.log(liste.parentElement); // même chose que parentNode

const i2 = document.querySelector(".i2");
console.log(i2.nextSibling);//next node du même fraterie

console.log(i2.previousSibling);


console.log(i2.nextElementSibling); // next element du même fraterie
console.log(i2.previousElementSibling);

