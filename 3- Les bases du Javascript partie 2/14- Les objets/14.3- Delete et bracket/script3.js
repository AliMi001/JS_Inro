//14.3- Delete et bracket_dot notation
const chat = {
    race : 'Siamois',
    poids : 3,
    couleur : 'gris',
    //'couleur' : 'gris',
    'couleur du chat': 'blanc'
}

console.log(chat.couleur); // dot notation: la plus appréciée
console.log(chat['couleur du chat']);// bracket notation
console.log(chat['couleur']);


delete chat.poids;
console.log(chat);

// Un objet peut contenir des objets

const chien = {
    poids : 3,
    couleur : 'noir',
    nvObj : {
        abc : 'abc',
        zzz : 'zzz',
        nvnvObj : {
            uuu :'uuu',
            ppp : 'ppp'
        }
    }
}

console.log(chien.nvObj.nvnvObj.ppp);
console.log(chien['nvObj']['nvnvObj']['ppp']); // bracket notation
