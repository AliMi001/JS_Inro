//5.5-Appel basique avec XHR

/**
 * tappez jason placeholder sur google: https://jsonplaceholder.typicode.com/
 * allez à 100 posts: https://jsonplaceholder.typicode.com/posts
 * En fait c'est une API qui est là pour faire des tests et vous renvoyez des posts (ici)
 * vous pouvez tester et commencer à créer votre site en imaginant que vous faites des appels à une API.
 */
const xhr = new XMLHttpRequest();

xhr.open('GET','https://jsonplaceholder.typicode.com/posts');

xhr.send(); //inspecter la page et aller dans réseau (network): vous aurez le fichier posts avec le statut 200, cliquez dessus 

