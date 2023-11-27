var funfact = document.getElementById("superfunfacts")
var bol = true;


function hellofun(){
    if(bol){
        bol = false; 
        funfact.style.display = "block";

    }
    else{
        bol = true;
        funfact.style.display = "none";
    }
    
    
   
}

function redirect(){
    window.location.href = "pentest.html";
}