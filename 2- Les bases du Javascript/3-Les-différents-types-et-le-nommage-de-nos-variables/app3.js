/*Nommage des variable:*/ 

    //  convention camelCase: conseillée
    const prenomUser = "Ahmed";
    console.log(prenomUser);
    
    // utilisation de l'underscore
    const prenom_user = "Ahmed";
    console.log(prenom_user);

/* Les différents types de variable en javascript */ 

    //string: chaine de caractères
    const typeString="hello world";
    console.log(typeString);

    //number
    const typeNumber = 9255;
    console.log(typeNumber);

    //undefined
    const typeUndefined = undefined;
    console.log(typeUndefined);

    let x; //déclaration
    console.log(x);


    //les objets : contenant des propriété
    const typeObj = {
        age:12, // propriété age: sa valeur
        nom:"Ahmed", // propriété nom
        classement:3,
        niveauScolaire: "master",
        //...
    }
    console.log(typeObj);
    console.log(typeObj.niveauScolaire);
    console.log(typeObj.age);

    //les tableaux
    const typeTableau = [1,2,3,5,6];
    console.log(typeTableau);
    console.log(typeTableau[0]);
    console.log(typeTableau[2]);
    typeTableau[1]=3
    console.log(typeTableau);

    //boolean;
    const typeBoolean = true;
    console.log(typeBoolean);
