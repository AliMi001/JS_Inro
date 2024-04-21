//7.4- les fonctions comme expression

/**
 * En JavaScript, les fonctions peuvent être utilisées comme des expressions, ce qui signifie qu'elles peuvent être affectées à des variables, passées en tant qu'arguments à d'autres fonctions, ou même retournées comme résultats d'autres fonctions. Cette capacité est rendue possible grâce à la nature de première classe des fonctions en JavaScript.
 */

const carre = n => n*n;
const returnType = n => typeof n;

const manipuleData = (val, auCarre, type)=>{
    let valFinale;

    valFinale = auCarre(val);

    return `Valeur finale ${valFinale} et c'est un type: ${type(val)}`;
};

console.log(manipuleData(4, carre, returnType));

/**
 * manipuleData est une fonction d'ordre suppérieur
 */