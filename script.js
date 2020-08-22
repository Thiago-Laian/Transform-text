document.addEventListener("DOMContentLoaded", ()=>{

    document.getElementById("btn-uppercase").addEventListener("click", upperCase);
    document.getElementById("btn-lowercase").addEventListener("click", lowerCase);

});


function upperCase (){
    const text = document.getElementById("input-text").value;

    document.getElementById("input-text").value = text.toUpperCase();
    
}

function lowerCase (){
    const text = document.getElementById("input-text").value;

    document.getElementById("input-text").value = text.toLowerCase();
    
}