//10-Utiliser un Switch
let couleur = "noir";
switch(couleur){
    case 'vert':
        console.log("Prix: 19.99");
        break; //pr sortire du switch
    case 'rouge':
        console.log("Prix: 17.99");
        break;
    case 'blanc':
        console.log("Prix: 15.99");
        break;
    default: // ni rouge ni vert ni blanc
        console.log(`Désolé, nous n'avons pas de ${couleur}.`);
        break;
}