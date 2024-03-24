//9-Comprendre les valeurs_truthy_et_falsy

/* les opérateur logiques */
let nb = 52;

if(nb === 50){

    console.log("NB = 50")

} 
// l'operateur 'et'
else if (nb > 50 && nb < 100){ 

    console.log("nb > 50 && nb < 100");

}

// l'operateur 'ou'||
else if (nb > 55 || nb == 52) {

    console.log("nb > 55 || nb == 52");

}


// conversion d'un type nbre en boolean
let na = 20;
console.log(Boolean(na));
    /*
        na==0 ---> false
        na==null ---> false
        na==undefined ---> false
    */

// le non logique
na= 100;
console.log(Boolean(na))
console.log(!na);

na = false;
console.log(!na);
console.log(10 === '10');

console.log(10 != '10'); // l'inégalité non strict
console.log(10 !== '10');
console.log(10 !== 10);

//les valeur truthy et falsy 
if ("bonjour") {
    // Ce bloc sera exécuté car "bonjour" est une valeur vraie: chaines non vide
    console.log("chaines non vide");
}
if ("") {
    // Ce bloc ne sera pas exécuté car une chaîne vide est fausse: chaine vide
    console.log("chaines vide");
}
if (42) {
    // Ce bloc sera exécuté car 42 est une valeur vraie
    console.log(42);
}
if ({ cle: "valeur" }) {
    // Ce bloc sera exécuté car { cle: "valeur" } est une valeur vraie
    console.log("{ cle: valeur }");
}
if (0) {
    // Ce bloc ne sera pas exécuté car 0 est faux
    console.log(" 0 est faux");
}
if (NaN) { 
    // Ce bloc ne sera pas exécuté car NaN est faux
    // 0/0 : NaN
    console.log(" NaN");
}
if (null) {
    // Ce bloc ne sera pas exécuté car null est faux
    console.log("NULL");
}
if (undefined) {
    // Ce bloc ne sera pas exécuté car undefined est faux
    console.log(" undefined");
}
if (10 > 5) {
    // Ce bloc sera exécuté car 10 > 5 est une expression vraie
    console.log("10 > 5 est une expression vraie");
}
