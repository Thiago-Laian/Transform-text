document.addEventListener("DOMContentLoaded", ()=>{

    document.getElementById("btn-uppercase").addEventListener("click", upperCase);
    document.getElementById("btn-lowercase").addEventListener("click", lowerCase);
    document.getElementById("btn-clipboard").addEventListener("click", copyText);

});


function upperCase (){
    const text = document.getElementById("input-text").value;

    document.getElementById("input-text").value = text.toUpperCase();
    
}

function lowerCase (){
    const text = document.getElementById("input-text").value;

    document.getElementById("input-text").value = text.toLowerCase();
    
}

function copyText(){
    const copyText = document.getElementById("input-text");  

    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
}