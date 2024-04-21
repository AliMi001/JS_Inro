//6.3- fonctions fléchés rappel

function foo(){
    //fonction classique
    //...
}

const foo2 = () =>{
    //fonction fléchée
    console.log("Hello");
}

foo2();


//on peut aussi faire une fonction fléchée sans lui donner de nom
 const element = document.querySelector("div");
 element.addEventListener('click', () => {
     console.log('mouse click div');
     event.stopPropagation(); // Empêchez l'événement de remonter jusqu'au body.
});

document.body.addEventListener('click', () => {
    console.log('mouse click body');
});


// si vous avez une seul ligne on peut déclarer la fonction fléché aussi de cette façon:
const foo3 = () => console.log('Hi World! ');
foo3();

const foo4 = argumentText => console.log(argumentText);
foo4("ceci est un bonjour");

const foo5 = (txt1, txt2) => console.log(txt1, txt2);
foo5("text 1", "text 2");

//hoisting

/**
 * les déclarations de variables et de fonctions sont déplacées (ou "hissées") vers le haut de leur contexte d'exécution pendant la phase de compilation.
 *i.e. même si vous déclarez une variable ou une fonction plus tard dans votre code, JavaScript les traitera comme si elles avaient été déclarées au début du contexte d'exécution.
 *Seul le processus de déclaration est hissé, pas l'initialisation ou l'assignation de valeur. 
 */

 
 fTest(); // vu que la fonction est hissées ça va s'éxécuter
 function fTest(){
    console.log("Test")
 }
 fTest(); //c'est normale

 // quand une fonction est mis dans une variable le concept d'hoisting ne marchera pas

//fct();
const fct = function fct(){
    console.log(" fonction déclaré dans une variable");
 }
fct()

//fct2();
const fct2=() => console.log("fonction fléché déclaré dans une variable");
fct2();




//diffrence avec les objets
const myObj = {
    txt: 'orem ipsum dolor sit ametl.',
    foo: () => {
        console.log(this.txt); // on n'aura pas accès 
    },
    foo2: function () {
        console.log(this.txt); // on aura accès 
    },
    //On peut aussi ecrire notre fonction classique comme ça à l'intérieur d'un objet
    foo3(){
        console.log(this.txt);
    }
}

myObj.foo(); // undefined : parceque les fonctions fléchées font tjrs référence à l'objet global "window"
myObj.foo2();
myObj.foo3();
