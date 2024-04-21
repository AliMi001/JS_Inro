//6.7- Paramètre par défaut

function ajouter(nbs = [1,2]){
    total = 0;
    for(let acc of nbs){
        total += acc;
    }
    console.log(total);
}

ajouter();
ajouter([5,6]);

