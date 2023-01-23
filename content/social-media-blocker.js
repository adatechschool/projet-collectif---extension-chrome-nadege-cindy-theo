// List of sites we want to block
let sitesBanned = ["google", "twitter", "facebook", "instagram", "mediapart"];
let on = document.getElementById("switch");
console.log(on);
on.addEventListener("click", onActivate);

function onActivate() {
    console.log(on.checked); 
    if (on.checked==true){
        sitesBanned.forEach(blockPage);
    }
}

on.addEventListener("click", onActivate(), true);

function blockPage(){
    for (i=0; i<=sitesBanned.length; i++) {
        if (document.URL.includes(sitesBanned[i])){
            var e = document.body;
            e.parentNode.removeChild(e);
        }
    }
}

/*addEventListener
fonction onActivate appelée au changement d'état sur le bouton
*/