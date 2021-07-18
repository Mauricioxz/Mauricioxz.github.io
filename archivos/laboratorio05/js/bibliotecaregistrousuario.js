//Declarando variables para los controles
var txtCor=document.getElementById("txtCor");
var txtCon=document.getElementById("txtCon");
var btnRegistrar=document.getElementById("btnRegistrar");

//Creamos un procedimiento para registrar el usuario
function RegistrarUsuario(){
    if(txtCor.value=="" || txtCor.value==null){
        alert("Ingresa el correo");
        txtCor.focus();
    }else if(txtCon.value=="" || txtCon.value==null){
        alert("Ingrese la contraseña");
        txtCon.focus();
    }else{
        //Capturando valores
        var cor=txtCor.value;
        var con=txtCon.value;
        //Llamamos a la función de Firebase para crear usuarios
        auth.createUserWithEmailAndPassword(cor,con)
        .then((userCredential) => {
            //Signed in
            alert("Se registró el usuario en Firebase");
        })
        .catch((error) => {
            alert("No se pudo registrar el usuario en Firebase");
        });
    }
}

//Llamamos al procedimiento en el botón
btnRegistrar.addEventListener("click",RegistrarUsuario);