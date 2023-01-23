//On écoute l'initialisation du bouton dans le chrome storage
chrome.storage.local.onChanged.addListener((changes, local) => {
  
  console.log("Coucou !");
  typeNote();
  createNote();
})

//variables pour stocker les liens de éléments de mon HTML
var container2 = document.getElementsByClassName("container2")[0];
var container3 = document.getElementsByClassName("container3")[0];
var checkIcon = document.getElementById("check-icon");
var xIcon = document.getElementById("x-icon");
var i = 0;

//évènement de l'icon pour supprimer mon post-it principal
xIcon.addEventListener("click", function() {
  typeNote();  
})

//évènement de l'icon pour valider mon post-it
checkIcon.addEventListener("click", function() {

  createNote();
})

//fonction qui permet de généré un post-it quand on clique sur "create Note" et de l'effacer avec l'icone "x"
function typeNote() {

  
  //si on clique  que le boutton "Create Note" et que le conteneur n'est pas afficher à l'écran
  if(container3.style.display == "none") {
    
    //alors fait apparaitre une note
    container3.style.display = "block";
  }
  else {
    
    //sinon si on clique sur l'icon "x" et que le conteneur est afficher alors fait le disparaitre
    container3.style.display = "none";
  }
}

//fonction pour valider un post-it et son contenue
function createNote() {
  var noteText = document.getElementById("note-text").value;
  var node0 = document.createElement("div");
  var node1 = document.createElement("h1");
  
  //on créer un  nouvelle élément "h1" 
  node1.innerHTML = noteText;
  
  //On donne des éléments de style à node1
  node1.setAttribute("style","width:250px; height:250px; font-size:26px; padding:25px; margin-top:10px; over-flow:hidden; box-shadow:0px 10px 24px 0px rgba(0,0,0,0.75)");
 
  //on attribut à l'élément créer par node1 les fonction margin(), rotate(), color()
  node1.style.margin = margin();
  node1.style.transform = rotate();
  node1.style.background = color();
  
  //j'insère node1 à l'intérieur de node0
  node0.appendChild(node1);
  
  //fait disparaitre mon post-it validé si je double click dessus 
  node0.addEventListener("dblclick", function() {
    node0.remove();
  })

  document.getElementById("note-text").value = '';
  
  node0.onmousedown = function(event) {
      
      
      node0.style.position = 'absolute';
      node0.style.zIndex = 1000;
      
      document.body.append(node0);
      
    function moveAt(pageX, pageY) {

        node0.style.left = pageX - node0.offsetWidth / 2 + 'px';
        node0.style.top = pageY - node0.offsetHeight / 2 + 'px';
    };
    
    moveAt(event.pageX, event.pageY);
    
    function onMouseMove(event) {
        
        moveAt(event.pageX, event.pageY);
    };
    
    document.addEventListener('mousemove', onMouseMove);
    
    node0.onmouseup = function() {
        
        document.removeEventListener('mousemove', onMouseMove);
        node0.onmouseup = null;
    };

    node0.ondragstart = function() {
  
        return false;
    };


  }
  
  //insère mon node0 et node1 dans ma page HTML
  container2.insertAdjacentElement("beforeend", node0);
}

//fonction qui permet de générer un placement aléatoire au post-it (au choix entre plusieurs valeurs)
function margin() {
  
  //variable qui contient un tableau, qui contient lui même plusieurs placement en px
  var random_margin = ["-5px","1px","5px","10px","15px","20px"];

  //On return un index aléatoire du tableau "random_margin" pour générer un placement
  return random_margin[Math.floor(Math.random() * random_margin.length)];
}

//fonction qui permet de générer aléatoirement une rotation différente pour chaque post-it
function rotate() {

  //même système que la fonction "margin()" 
  var random_rotate = ["rotate(3deg)","rotate(1deg)","rotate(-1deg)","rotate(-3deg)","rotate(-5deg)","rotate(-10deg)"];

  return random_rotate[Math.floor(Math.random() * random_rotate.length)]
}

//fonction qui permet de générer aléatoirement une couleur de post-it
function color() {
  
  //On stock dans un tableau différente couleur
  var random_color = ["#c2ff3d","#ff3de8","#3dc2ff","#04e022","#ebb328"];

  if(i > random_color.length - 1) {
    i = 0;
  }

  return random_color[i++];
}
