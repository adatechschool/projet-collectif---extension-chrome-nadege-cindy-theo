// Our test word
let word = "google";
// List of sites we want to block
let sitesBanned = ["google", "twitter", "facebook", "instagram", "mediapart"];

sitesBanned.forEach(blockPage);

function blockPage(){
    for (i=0; i<=sitesBanned.length; i++) {
        if (document.URL.includes(sitesBanned[i])){
            var body = document.body;
            body.parentNode.removeChild(body);
        }
    }
}

/* condition d'activation du script : si toggle on dans l'extension

if document.HTML.toggleOn = true {
    sitesBanned.forEach(blockPage);
}
ou eventlistener ? -> + propre
*/