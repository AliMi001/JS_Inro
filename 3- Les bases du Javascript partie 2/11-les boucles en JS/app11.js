// 11-les boucles en JS
/*une boucle sert à:
    --> répéter une action +ieurs fois, 
    --> itérer un tableau par example*/

/* Boucle for */
for(let i = 0; i < 5; i=i+2){
   console.log(`Notre variable i est égale à: ${i}`);
}

/* boucle while */

let i=0;

while(i<10){
  console.log(i);
  i++; 
} // attention au boucle infini


/* La boucle do while*/

let j=0;

do{
    console.log(j);
    //s'execute au moin une fois avant de vérifier la condition: mettez j=5 en haut et vérifier
    j++;
}while(j<5) 

