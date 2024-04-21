//6.6- Destructuring

const tab = [1,2,3];

// je veux affecter les éléments de ce tableau à des variable la manière classique c'est de faire:
let x = tab[0];
let y= tab[1]; //...etc.

//descructuring: affecter par decomposition
[a, b, c] = tab; // simple et rapid
console.log(a,b,c); 


//On peut faire la même chose pour les objets
const obj = {
    a1: 2,
    b1: 4, 
    c1: 6
}

let x1 = obj.a1; 
let x2 = obj.b1; //...etc.

const {a1,b1,c1} = obj;
console.log(a1,b1,c1);

const hero = {
    name: 'Batman',
    realName: 'Bruce Wayne'
};
  
  const { name, realName } = hero;
  
  console.log(name);     // => 'Batman',
  console.log(realName); // => 'Bruce Wayne
