
/*Menu responsive*/
let boton=document.getElementById("open"),
    botonClose=document.getElementById("close"),
    menuR=document.getElementById("des"),
    enlace=document.getElementById("enlaces");
//click abrir
boton.addEventListener("click", function () {
    menuR.classList.add("active");
})   
//Click cerrar
botonClose.addEventListener("click", function () {
    menuR.classList.remove("active");
})
//Cerrar menu al hacer click en algun enlace
enlace.addEventListener("click", function () {
    menuR.style.transitionDelay = "0.5s";
    menuR.classList.remove("active");
})