let arreglo = [];

function almacenarRegistros(){

    let objeto = {
        "usuario":document.getElementById("campoNombre").value,
        "contrasena":document.getElementById("campoContrasena").value,
        "correo":document.getElementById("campoCorreo").value,
        "confirmacioncorreo":document.getElementById("campoConfirmacionCorreo").value,
        "telefono":document.getElementById("campoTelefono").value   
    }

    if (arreglo.length<30){
        arreglo.push(objeto);

        console.log("diccionario",objeto);
        console.log("arreglo",arreglo);
        return true;
    }
    console.log("arreglolleno",arreglo);
    return false;
    
}

function ordenarRegistros(args){
    args.sort();
    return args;
}

// module.exports.arreglo = arreglo;
// module.exports.almacenarRegistros = almacenarRegistros;
// module.exports.ordenarRegistros = ordenarRegistros;