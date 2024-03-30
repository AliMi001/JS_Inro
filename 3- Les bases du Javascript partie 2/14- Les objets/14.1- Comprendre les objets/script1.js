//14.1- Comprendre les objets

/** Qu'est ce qu'un objet?
 * un objet fait partie des types javascript
 * 
 */

let myObjet = {
    prenom : "Victor",
    age : 25,
    taille : 185,
    brun : true,
    presentation : function(){ 
        //une méthode: c'est une fonction apartenant à un objet
        // console est objet et log l'une de ses méthodes 
        console.log("Hello world")
        
    }    
};

console.log(myObjet.prenom);
console.log(myObjet.taille);
console.log(myObjet.presentation); // va montrer la fonction en elle même
console.log(myObjet.presentation()); 


//Rajouter une propriété dans un objet
myObjet.passions = ['Lecture', 'Sport'];
console.log(myObjet);
console.log(myObjet.passions);
console.log(myObjet.passions[1]);
