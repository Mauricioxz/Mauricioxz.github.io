//Variables para los controles
var txtNom=document.getElementById("txtNom");
var txtApe=document.getElementById("txtApe");
var txtCor=document.getElementById("txtCor");
var btnRegistrar=document.getElementById("btnRegistrar");

//Utilizamos la función para registrar del Firebase
// function writeUserData(n, a, c) {
//     firebase.database().ref('registro/').set({
//       nombre: n,
//       apellido: a,
//       correo: c
//     });
//   }

//Creamos un procedimiento para mostrar los datos de la tabla
function Mostrar(){
    //Declaramos una variable para el contar el número de filas
    var i=0;
    //Selecciono el tbody de la tabla donde voy a mostrar la información
    var tbody=document.querySelector("#tbRegistro tbody");
    tbody.innerHTML="";
    //Seleccionamos la tablar que se quiere mostrar
    var db=database.ref().child("registro");
    db.once("value", function(snapshot){
        if (snapshot.exists()){
            snapshot.forEach(function(data){
                var nom=data.val().nombre;
                var ape=data.val().apellido;
                var cor=data.val().correo;
                //Declaramos una variable para las filas
                var fila=tbody.insertRow(i);
                //Declaramos una variable para los títulos
                var titulonom=fila.insertCell(0);
                var tituloape=fila.insertCell(1);
                var titulocor=fila.insertCell(2);
                //Agregamos los valores
                titulonom.innerHTML=nom;
                tituloape.innerHTML=ape;
                titulocor.innerHTML=cor;
                tbody.appendChild(fila);
                i++;
            });
        }
    });
}

//Llamamos a la función Mostrar cuando carga la página
window.onload=Mostrar;

//Creamos un procedimiento para limpiar
function Limpiar(){
    txtNom.value="";
    txtApe.value="";
    txtCor.value="";
    txtNom.focus();
}

//Creamos un procedimiento para registrar
function Registrar(){
    if (txtNom.value=="" || txtNom.value==null){
        alert("Ingrese sus Nombres");
        txtNom.focus();
    }else if (txtApe.value=="" || txtApe.value==null){
        alert("Ingrese sus apellidos");
        txtApe.focus();
    }else if (txtCor.value=="" || txtCor.value==null){
        alert("Ingrese su Correo");
        txtCor.focus();
    }else{
        //Capturando valores
        var nom=txtNom.value;
        var ape=txtApe.value;
        var cor=txtCor.value;
        //Llamando a la función para registrar del firebase
        // writeUserData(nom,ape,cor);
        //Creamos la tabla si no existiera y las seleccionamos
        var db = database.ref("registro");
        //Asignamos los valores a la tabla que ha sido creada
        var registros=db.push();
        //Le paso los campos y los valores que tendrá la tabla
        registros.set({
            nombre: nom,
            apellido: ape,
            correo: cor,
        });
        alert("Se registraron los datos");
        //Llamamos a la función Limpiar
        Limpiar();
        //Llamamos a la función Mostrar
        Mostrar();
    }
}
//Asignamos el procedimiento al botón
btnRegistrar.addEventListener("click", Registrar);