/* Les fonctions classiques */
    // comme la fonction presentation, sum, etc.
    // pré-2015
    // déclaré comme ça:
    function presentation(a,b){
       console.log("Hello world!");
       return a + b; 
    }
    console.log(presentation(5,6));
    


/* Les fonctions fléchées */
    // post-2015
    //apparu en 2015 dans la version ES6 du javascript 
    // déclaré comme une variable

    const foo = (a,b) =>{
        console.log("Hello world!");
        return a + b;
    }
    console.log(foo(6,66));

    const foo1 = () =>{
        console.log("Hello world!");}

    const btn = document.querySelector("#btn");
    //btn.addEventListener('click',foo1);
    btn.addEventListener('click', ()=>{console.log("tu as cliqué sur le bouton");});
    // fction fléchée en une seul ligne
    btn.addEventListener('click', () => console.log("tu as cliqué sur le bouton!!!"));
    
   


    // fct fléchées contenant une seul ligne
    const foo2 = ()=> console.log("Hello word!!!!");
    foo2();
    

//Lorsqu'un seul paramètre est requis, les parenthèses () sont optionnelles:
    const puissanceCarree = (x) =>{ return x**2;}
    console.log(puissanceCarree(2))

    const puissanceCarree2 = x =>{ return x**2;}
    console.log(puissanceCarree2(2))