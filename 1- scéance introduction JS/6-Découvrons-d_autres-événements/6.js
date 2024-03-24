// 6.js

const titre = document.querySelector("#monTitre");
const btn = document.querySelector(".btn");

titre.addEventListener("mouseenter", presentation);
btn.addEventListener("click", presentation);

function presentation() {
    //titre.classList.add('taille-txt');
    console.log("éléments survolés");
}

document.addEventListener("keydown", presentation2);

function presentation2() {
    console.log("touche pressées");
}
