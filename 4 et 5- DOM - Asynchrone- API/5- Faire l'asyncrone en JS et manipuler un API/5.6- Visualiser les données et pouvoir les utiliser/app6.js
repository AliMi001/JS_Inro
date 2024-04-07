//5.6- Visualiser les données et pouvoir les utiliser

const xhr = new XMLHttpRequest();

xhr.open('GET','https://jsonplaceholder.typicode.com/posts');

//xhr.responseType = 'json';
xhr.onload = function(){
    console.log(xhr.response); // on l'aura ici sous format chaine de caractères
    console.log(JSON.parse(xhr.response)); 
    // on aura des objet js, même resultat si on utilise le code comenté en haut : xhr.responseType = 'json';
    
    
}
xhr.send();




