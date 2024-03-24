//8-Les_conditions_If
//operateur: >; >=; <=; <; ==; ===
let nb = 50;

if(nb<=50){
    console.log("La condition est respectée");
}

// == une égalité non-strict(déconseillée)
if(nb == '50'){
    console.log("égalité non-strict");
}

// === une égalité strict
if(nb === '50'){
    console.log("égalité strict");
}
if(nb === 50){
    console.log("égalité strict");
}

if (nb = 30){
    console.log("affectation");
    console.log(nb);
}
/* Les condition If else */

nb = 50;

if(nb === 50){

    console.log("NB = 50")

} else if (nb > 50){

    console.log("NB > 50");

} else {

    console.log("NB < 50");

}

