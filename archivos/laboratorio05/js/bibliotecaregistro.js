//Declarando variables para los controles
var txtNom=document.getElementById("txtNom");
var txtApe=document.getElementById("txtApe");
var txtCor=document.getElementById("txtCor");
var btnRegistrar=document.getElementById("btnRegistrar");

//Creamos un procedimiento para mostrar
function MostrarRegistro(){
    //Declaramos una variable para guardar los datos
    var listaregistro=Mostrar();
    //Selecciono el tbody de la tabla donde voy a mostrar la información
    var tbody=document.querySelector("#tbRegistro tbody");
    tbody.innerHTML="";
    //Agregamos al tbody las columnas que se registren
    for(var i=0;i<listaregistro.length;i++){
        //Declaramos una variable para las filas
        var fila=tbody.insertRow(i);
        //Declaramos una variable para los títulos
        var titulonom=fila.insertCell(0);
        var tituloape=fila.insertCell(1);
        var titulocor=fila.insertCell(2);
        //Agregamos los valores
        titulonom.innerHTML=listaregistro[i].nombre;
        tituloape.innerHTML=listaregistro[i].apellido;
        titulocor.innerHTML=listaregistro[i].correo;
        tbody.appendChild(fila);
    }
}

//Creamos un procedimiento para registrar los datos
function RegistrarDatos(){
    //----------------  "T A R E A" -----------------------
    //Validación de Datos
    //if + programas

    //Capturando valores
    var nom=txtNom.value;
    var ape=txtApe.value;
    var cor=txtCor.value;
    //Llamamos al procedimiento registrar
    Registrar(nom,ape,cor);
    //Llamamos al procedimiento para mostrar
    MostrarRegistro();
}

//Agregamos un evento al botón

//-------------------1ERA FORMA----------------------------
// btnRegistrar.addEventListener("click", function(){
//     alert("Hola");
// });

//--------------------2DA FORMA----------------------------
// Creamos un procedimiento para mostrar el mensaje
// function Mensaje(){
//     alert("Hola");
// }
// Llamamos al procedimiento en el evento del botón
// btnRegistrar.addEventListener("click", Mensaje);

//Llamamos al procedimiento registrar en el evento del botón
btnRegistrar.addEventListener("click",RegistrarDatos);