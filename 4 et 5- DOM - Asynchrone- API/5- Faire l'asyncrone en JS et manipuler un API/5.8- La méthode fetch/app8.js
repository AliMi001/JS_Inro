//5.8- La méthode fetch

/**
 * fetch("https://jsonplaceholder.typicode.com/posts") est une promesse
 * fetch("https://jsonplaceholder.typicode.com/posts").then(rep => rep.json()): est promesse
*/
console.log(fetch("https://jsonplaceholder.typicode.com/posts"));
fetch("https://jsonplaceholder.typicode.com/posts").then(reponse => console.log(reponse)); 

 fetch("https://jsonplaceholder.typicode.com/posts").then(rep => rep.json()).then(
   data => console.log(data)
 ); 


const liste = document.querySelector(".liste");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
    fetch("https://jsonplaceholder.typicode.com/posts").then(rep => rep.json()).then(
    data =>{
        for(let i=0; i<data.length; i++){
            let newLi = document.createElement('li');
            let newTitreCarte = document.createElement('h2');
            let newBodyCarte = document.createElement('p');

            newTitreCarte.innerText = data[i].title;
            newBodyCarte.innerText = data[i].body;

            newLi.appendChild(newTitreCarte);
            newLi.appendChild(newBodyCarte);
            liste.appendChild(newLi);

        }
    }
);})
