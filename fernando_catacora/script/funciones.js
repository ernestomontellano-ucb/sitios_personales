
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

//Formulario
let formulario=document.getElementById("formulario1");

//eventos del formualrio
    function validar(e) {
        e.preventDefault();
        let inputN=document.getElementById("nombre"),
            inputT=document.getElementById("telefono"),
            inputC=document.getElementById("correo"),
            inputM=document.getElementById("mensaje"),
            alertS=document.getElementById("a-s"),
            alertF=document.getElementById("a-f");
        if (inputN.value== "" || inputC.value=="" || inputT.value=="" || inputM.value==""){
          
            alertF.classList.remove("hide");
            alertF.classList.add("show");
            setTimeout(function () {
                alertF.classList.remove("show");
                alertF.classList.add("hide");

            },2500)
            
        }else{
        
            alertS.classList.remove("hide");
            alertS.classList.add("show");
           
            setTimeout(function () {
                alertS.classList.remove("show");
                alertS.classList.add("hide");

            },2500)
            inputC.value="";
            inputM.value="";
            inputN.value="";
            inputT.value="";
        }    
    }


formulario.addEventListener("submit", validar)