//Declarando variables para los controles
var txtNom=document.getElementById("txtNom");
var cboCat=document.getElementById("cboCategoria");
var txtPre=document.getElementById("txtPre");
var txtCan=document.getElementById("txtCan");
var btnRegistrar=document.getElementById("btnRegistrar");

//Creamos un procedimiento para mostrar
function MostrarProducto(){
    //Declaramos una variable para guardar los datos
    var listaproducto=Mostrar();
    //Selecciono el tbody de la tabla donde voy a mostrar la información
    var tbody=document.querySelector("#tbProducto tbody");
    tbody.innerHTML="";
    //Agregamos al tbody las columnas que se registren
    for(var i=0;i<listaproducto.length;i++){
        //Declaramos una variable para las filas
        var fila=tbody.insertRow(i);
        //Declaramos una variable para los títulos
        var titulonom=fila.insertCell(0);
        var titulocat=fila.insertCell(1);
        var titulopre=fila.insertCell(2);
        var titulocan=fila.insertCell(3);
        //Agregamos los valores
        titulonom.innerHTML=listaproducto[i].nombre;
        titulocat.innerHTML=listaproducto[i].categoria;
        titulopre.innerHTML=listaproducto[i].precio;
        titulocan.innerHTML=listaproducto[i].cantidad;
        tbody.appendChild(fila);
    }
}

//Creamos un procedimiento para registrar los datos
function RegistrarProducto(){
    //----------------  "T A R E A" -----------------------
    //Validación de Datos
    //if + programas

    //Capturando valores
    var nom=txtNom.value;
    var cat="";
    var indice=cboCategoria.selectedIndex;
    switch(indice){
        case 1:
            cat="Entretenimiento";
            break;
        case 2:
            cat="Tecnología";
            break;
        case 3:
            cat="Línea Blanca";
            break;
        default:
            cat="";
            break;
    }
    var pre=txtPre.value;
    var can=txtCan.value;
    //Llamamos al procedimiento registrar
    Registrar(nom,cat,pre,can);
    //Llamamos al procedimiento para mostrar
    MostrarProducto();
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
btnRegistrar.addEventListener("click",RegistrarProducto);