// 5.js
const titre = document.querySelector("#monTitre");
const btn = document.querySelector(".btn");

btn.addEventListener("click", presentation);

function presentation() {
    titre.classList.add('taille-txt');
}
