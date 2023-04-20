document.getElementById("aside_after").style.display = "none";

function encriptar(){

    // obtiene el COntenido dentor del Text area Que ingreso el Usuario
    var userInput = document.getElementById("cajaEntradaUsuario").value;
    

    var encripted = "";

    for(x in userInput){
        switch(userInput[x]){
            case 'a':
                encripted += "ai";
                break;
            case 'e':
                encripted += "enter";
                break;
            case 'i':
                encripted += "imes";
                break;
            case 'o':
                encripted += "ober";
                break;
            case 'u':
                encripted += "ufat";
                break;
            default:
                encripted += userInput[x];
                break;
        }
    }
    return encripted;
}


function desencriptar(phrase){
// remplaza las combinaciones clave por las vocales
    var filtrandoA = phrase.replace(/ai/g , "a");
    var filtrandoE = filtrandoA.replace(/enter/g, "e");
    var filtrandoI = filtrandoE.replace(/imes/g, "i");
    var filtrandoO = filtrandoI.replace(/ober/g, "o");
    var filtrandoU = filtrandoO.replace(/ufat/g, "u");
    return filtrandoU;
}

// Funcion que cambia el display de los divs before and after Aside
var clic = 2;
function cambiandoCajaSalida(encriptado,desencriptado){
    if(clic ==1){
        document.getElementById("aside_after").style.display = "none";
        document.getElementById("aside_before").style.display = "block";

        clic = clic + 1;
    }else{
        document.getElementById("aside_before").style.display = "none";
        
        document.getElementById("aside_after").innerHTML= encriptado;
        document.getElementById("aside_after").style.display = "block";
        
        clic = 1;
    }
}


// Entry point:


// obtiene el Elemnto Boton que va encriptar el contenido
var botonOscuro = document.getElementsByClassName("botonOscuro")[0];

// Crea un listener para cuando el usuario le de click
botonOscuro.addEventListener("click",function(){

    var codigoEncriptado = encriptar(); // el contenido del textArea sale del interior de a funcion
    var codigoDesencriptado = desencriptar(codigoEncriptado);

    //Cambia el estilo del Div Aside_before
    cambiandoCajaSalida(codigoEncriptado,codigoDesencriptado);
});


botonOscuro.addEventListener("clic")





