//5.2- Comprendre les promesses
const promise1 = new Promise((resolve, reject)=>{
    console.log("Code s'éxecute de manière asynchrone");
    
    resolve("les données sont arrivées");
    //reject("les données ne sont pas arrivées")
});

console.log(promise1); 
/**
 * pending: càd nous n'avons pas utilisé ni la méthode resolve ni la méthode reject
 * quand le code qu'on exécute dans notre promesse fonctionne en utilisant Resolve et on lui passe en argument ce qu'on a.
 * Et quand ça ne fonctionne pas, on met reject.
 */

promise1.then((value) =>{
    console.log(value);
}).catch(()=>{
    console.log("il y a eu une erreur");
});

/**
 * then : ça nous permet de lancer une méthode après qu'il y ait eu un resolve.
 * catch: quand il y a une erreur par exemple.
 */

