document.addEventListener("DOMContentLoaded", ()=>{

    document.getElementById("btn-uppercase").addEventListener("click", upperCase);

});


function upperCase (){
    const text = document.getElementById("input-text").value;

    document.getElementById("input-text").value = text.toUpperCase();
    
}