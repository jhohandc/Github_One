
function encriptar(userInput){
    // Si encuentra una vocal en el recorrido la encripta
    // de lo contrario deja pasar la palabra y la adhiere a la cadena encripted

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




var usuario = prompt("ingrese la palabra que desea encriptar");

var codigoEncriptado = encriptar(usuario);
var codigoDesencriptado = desencriptar(codigoEncriptado);

console.log(codigoEncriptado);
console.log(codigoDesencriptado);

