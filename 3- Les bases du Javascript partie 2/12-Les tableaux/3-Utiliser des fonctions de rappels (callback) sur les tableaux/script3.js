/*3-Utiliser des fonctions de rappels (callback) sur les tableaux */

//une fonction callback est utilisé en tant qu'argument pour une autre  fonction
function usingCallback(callback){
    callback();
}

function foo(){
    console.log(("Hello depuis la callback 1"));
}

usingCallback(foo);

usingCallback(function (){
    console.log(("Hello depuis la callback 2"));
});



// les fcts callback et les tableaux 
const numTab=[1,2,3,4,5];


//forEach: utilise une fonction callback pour chaque element du tableau
numTab.forEach(function(element){
    console.log(element);
});


//map: effectuer une action sur chaque element d'un tableau et retourner un nouveau tableau contenant ces actions sur chaque élement
const mapTab = numTab.map(function(x){
    return x**2;
}); //numTab.map(x => x*2); //fonction fléché
console.log(mapTab);

const mapTab2 =  numTab.map(x => x*2);
console.log(mapTab2);



//filter
const fruits = ['Fraise', 'Pomme', 'Pastèque', 'kiwi', "abc"];
const filterTab = fruits.filter(
    function(fruit){
        return fruit.length > 5;
    });
console.log(filterTab);


//reduce
const numTab3 = [1,2,3,4]
const reduced = numTab3.reduce(function(a,b){
    //a: l'acumulateur par défaut démarre à 0 mais ici démare à 5
    //b: valeur courant du tableau
    return a+b; 
}, 5);
console.log(reduced);

// Voir la liste des callback des tableau sur MDN






