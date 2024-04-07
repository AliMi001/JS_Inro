//5.7- Créer une liste à partit des données
const liste = document.querySelector(".liste");
const btn = document.querySelector(".btn");
const xhr = new XMLHttpRequest();

btn.addEventListener("click", () => {
    xhr.open('GET','https://jsonplaceholder.typicode.com/posts');
    
    xhr.responseType = 'json';
    xhr.onload = function(){
        console.log(xhr.response); 
        
        for(let i=0; i<xhr.response.length; i++){
            let newLi = document.createElement('li');
            let newTitreCarte = document.createElement('h2');
            let newBodyCarte = document.createElement('p');

            newTitreCarte.innerText = xhr.response[i].title;
            newBodyCarte.innerText = xhr.response[i].body;

            newLi.appendChild(newTitreCarte);
            newLi.appendChild(newBodyCarte);
            liste.appendChild(newLi);

        }
    };
    xhr.send();
}); 

/**
 * on va voir des méthodes plus simples pour faire des appels a des API.
 * Parce que voila avec tout ce qui est XMLHttpRequest, on l'utilise plus, c'était la manière de faire avant.
 * Maintenant, vous allez voir qu'on a Fetch() par exemple, qui nous permet de faire tout ça beaucoup plus facilement au lieu d'aller tout initialiser, etc.
 */


