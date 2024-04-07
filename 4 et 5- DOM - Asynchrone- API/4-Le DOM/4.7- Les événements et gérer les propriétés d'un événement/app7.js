//Les événements et gérer les propriétés d'un événement
const block = document.querySelector('.block');

//click event 
block.addEventListener('click', (event)=>{ console.log("les propriétés de l'evenment", event); }); //on peut ne pas mettre d'argument ( déjà vu dans l'introduction fct presentation)

// double click event
block.addEventListener("dblclick",(e)=>{ console.log(e); });

// mouse down: utile dans le drag and drop
block.addEventListener("mousedown",(e)=>{ console.log("Appuie sur la souris!"); });

// mouse up:utile dans le drag and drop
block.addEventListener("mouseup",(e)=>{ console.log("La souris relaché!"); });

//mouseenter
block.addEventListener("mouseenter",(e)=>{ console.log("La souris entre!"); });


//mouseleave
block.addEventListener("mouseleave",(e)=>{ console.log("mouse leave!"); });

//mouseover
block.addEventListener("mouseover",(e)=>{ console.log("mouseover!"); });

//mousemove
let posX = 0;
let posY = 0;
const titre = document.querySelector("h1");
block.addEventListener("mousemove",(event)=>{ console.log("mousemove!");
    posX = event.clientX;
    posY = event.clientY;
    titre.innerText = `PosX: ${posX}, PosY: ${posY}`;
});


