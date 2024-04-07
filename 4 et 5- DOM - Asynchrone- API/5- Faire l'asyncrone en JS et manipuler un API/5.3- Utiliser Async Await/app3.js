// 5.3- Utiliser Async Await


async function foo(){
    return 999;
}
foo(); 
/**
 * ce qui se passe quand on écrit async devant une fonction: elle retourne toujours une promesse qui s'auto résout.
 *  et ça permet d'écrire des promess à l'interieur: voir foo2()
 */

foo().then(console.log);

async function foo2(){
    const p1= new Promise((resolve, reject)=>{
        setTimeout(()=> resolve("Action éffectuée !"), 2000);
    });

    let resultat = await p1;
    console.log(resultat);
}

foo2();
/**
 * utiliser async, await: nous permet d'atteindre toutes les résultats de promesses qu'on veut, c-à-d qu'on peut en écrire autant qu'on veut, des promesses à l'interieur de foo2() ou même en dehors de la fonction et faire des références.
 * ça nous permet d'attendre plein de résultats, de faire plein de requêtes ou d'actions asynchrones.
 */