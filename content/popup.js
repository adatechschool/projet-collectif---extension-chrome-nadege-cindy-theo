//Ici on met la fonctionnalité pour le click du bouton qui génèrera les post-it
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('button').addEventListener('click', typeNote, false)
    //création de l'objet déclencheur dans le Chrome Storage Local
    function onClick() {
        chrome.storage.local.set( {
            status: postItDeclencheur = {
                value: true
            }
        })
    };
    console.log(postItDeclencheur);
  }, false);