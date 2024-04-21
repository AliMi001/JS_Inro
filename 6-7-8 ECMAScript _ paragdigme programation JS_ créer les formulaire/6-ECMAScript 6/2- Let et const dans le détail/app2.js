//6.2- Let et const dans le détail

function foo(){

    var txt1 = "txtVAR";
    let txt2 = "txtLET";

    

    console.log(txt1, txt2);
}
foo();

function foo2(){

    if(true){
        var txt1 = "txtVAR";
        let txt2 = "txtLET"; //accessible que dans ce bloque ou ces bloque enfant
        
    }

    console.log(txt1);
    console.log(txt2); //non accessible
}

foo2();
/**
 * L'instruction let permet de déclarer une variable dont la portée est celle du bloc courant, éventuellement en initialisant sa valeur.
 * La déclaration const permet de créer une constante nommée accessible uniquement en lecture.
 * Les constantes font partie de la portée du bloc (comme les variables définies avec let). À la différence des variables définies avec var
 */