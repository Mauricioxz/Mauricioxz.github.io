//Declarando variables para los controles
var txtNom=document.getElementById("txtNom");
var txtApe=document.getElementById("txtApe");
var txtCor=document.getElementById("txtCor");
var rbMas=document.getElementById("rbMas");
var rbFem=document.getElementById("rbFem");
var rbOtr=document.getElementById("rbOtr");
var chkEst=document.getElementById("chkEst");

//------------- M É T O D O - 1 -----------------

//Creamos procedimientos para validar
//Nombre
function ValidarNombre(){
    if(txtNom.value=="" || txtNom.value==null){
        error.style.display="block";
        error.innerHTML+="<li>Por favor ingrese sus Nombres</li>";
    }else{
        error.style.display="none";
    }
}

//Apellido
function ValidarApellido(){
    if(txtApe.value=="" || txtApe.value==null){
        error.style.display="block";
        error.innerHTML+="<li>Por favor ingrese sus Apellidos</li>";
    }else{
        error.style.display="none";
    }
}

//Correo
function ValidarCorreo(){
    if(txtCor.value=="" || txtCor.value==null){
        error.style.display="block";
        error.innerHTML+="<li>Por favor ingrese su Correo</li>";
    }else{
        error.style.display="none";
    }
}

//Sexo
function ValidarSexo(){
    if(rbMas.checked==false && rbFem.checked==false && rbOtr.checked==false){
        error.style.display="block";
        error.innerHTML+="<li>Por favor seleccione un Sexo</li>";
    }else{
        error.style.display="none";
    }
}

//Estado
function ValidarEstado(){
    if(chkEst.checked==false){
        error.style.display="block";
        error.innerHTML+="<li>Por favor seleccione el Estado</li>";
    }else{
        error.style.display="none";
    }
}


//creamos un procedimiento para validar
function Validar(){
    //reiniciamos el error
    error.innerHTML="";
    //Llamamos a los procedimientos para validar
    ValidarNombre();
    ValidarApellido();
    ValidarCorreo();
    ValidarSexo();
    ValidarEstado();
}

//----------M É T O D O  - 2 -------------------

//Creamos un procedimiento para asignar a la clase error
function LlamarClase(m){
    error.style.display="block";
    error.innerHTML+="<li>"+m+"</li>"
}

//Creamos una función Registrar
function Registrar(){
    //reiniciamos el estilo error
    error.innerHTML="";
    if(txtNom.value=="" || txtNom.value==null){
        LlamarClase("Por favor ingresa tus nombres");
        LlamarClase("Por favor ingresa tus apellidos");
        LlamarClase("Por favor ingresa tu correo");
        LlamarClase("Por favor selecciona un sexo");
        LlamarClase("Por favor selecciona el estado");
        txtNom.focus();
    }else if(txtApe.value=="" || txtApe.value==null){
        LlamarClase("Por favor ingresa tus apellidos");
        LlamarClase("Por favor ingresa tu correo");
        LlamarClase("Por favor selecciona un sexo");
        LlamarClase("Por favor selecciona el estado");
        txtApe.focus();
    }else if(txtCor.value=="" || txtCor.value==null){
        LlamarClase("Por favor ingresa tu correo");
        LlamarClase("Por favor selecciona un sexo");
        LlamarClase("Por favor selecciona el estado");
        txtCor.focus();
    }else if(rbMas.checked==false && rbFem.checked==false && rbOtr.checked==false){
        LlamarClase("Por favor seleccione un sexo");
        LlamarClase("Por favor selecciona el estado");
        rbMas.focus();
    }else if(chkEst.checked==false){
        LlamarClase("Por favor seleccione el estado");
        chkEst.focus();
    }else{
        alert("Se registró correctamente");
        error.innerHTML="";
    }
}