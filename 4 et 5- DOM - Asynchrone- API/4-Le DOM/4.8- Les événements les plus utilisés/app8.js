//4.8- Les événements les plus utilisés

//load event
window.addEventListener('load',()=>{
    console.log("Le page a chargé!");
});

//DOMContentLoaded
window.addEventListener('DOMContentLoaded',()=>{
    console.log("Le DOM est entrain de se charger, avants les images. ");
});

//scroll (utile quand on fait des animation lié au scroll)
window.addEventListener('scroll',()=>{
    console.log("Tu viens de scroll!");
});

//keydown
 window.addEventListener('keydown',(key)=>{
     console.log("vous avez appuyez sur une touche!", key);
 });

//keyup

window.addEventListener('keyup',(key)=>{
    console.log("vous avez relevez de la touche!", key);
});

//input event
document.getElementById("inp").addEventListener('input',()=>{
    console.log("l'input est entrain de recevoir des données");
});

//submit event
document.querySelector("form").addEventListener('submit',(e)=>{
    e.preventDefault(); // empêcher le comportement par défaut de l'actualisation de la page
    console.log("Formulaire envoyé! ");
});

/**
 * MDN vous donne accés à ces evenment avec des explications.
 * A chaque fois que vous voulez utiliser un evenement vous pouvez juste chercher sur MDN l'evenement que vous voulez implémenter, et vous l'adaptez à votre besoin.
 */