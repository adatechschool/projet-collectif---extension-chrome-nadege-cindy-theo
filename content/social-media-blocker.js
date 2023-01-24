// List of sites we want to block
let sitesBanned = ["google", "twitter", "facebook", "instagram", "mediapart"];

sitesBanned.forEach(blockPage);

function blockPage() {
  for (let i = 0; i <= sitesBanned.length; i++) {
    if (document.URL.includes(sitesBanned[i])) {
      var body = document.body;
      body.parentNode.removeChild(body);
    }
  }
}

let on = document.getElementById("switch");
console.log(on);
on.addEventListener("click", onActivate);

function onActivate() {
    console.log(on.checked); 
    if (on.checked==true){
        sitesBanned.forEach(blockPage);
    }
}

function blockPage(){
    for (i=0; i<=sitesBanned.length; i++) {
        if (document.URL.includes(sitesBanned[i])){
            var e = document.body;
            e.parentNode.removeChild(e);
        }
    }
}
