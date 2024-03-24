// L'ordre de déclaration
function presentation(){
    console.log("Hello world");
}

presentationRetunedValue = presentation();
console.log(presentationRetunedValue); // undefined: presentation retourne rien

let text; // délcaration
text="Good morning everyone!"; //initiation
let text2 = "Hello"; // déclaration et initiation
function presentation2(){
    console.log(text);
}

presentation2();




// mettre l'initiation de la variable text après l'appelle de fonction presnetation2() --> undefined.
// si la déclation de text est faite après la fonction --> une erreur.
// (Voir js hoisting)



/*Variable à porté local ou global */
//la variable à porté global: utilisable partout dans le script.
// varbiable à porté local: définie seulement dans son block

function presentation3(){   
    let maVariableAPorteeLocale = "Var locale";
    console.log(`la valeur de la variable à portée global est:" ${text2}"`);
    console.log(`la valeur de la variable à porté local est: "${maVariableAPorteeLocale}"`);
}
//console.log(maVariableAPorteeLocale); // erreur
presentation3();


