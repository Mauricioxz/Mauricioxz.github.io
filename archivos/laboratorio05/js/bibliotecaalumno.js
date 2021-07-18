//Declarando variables para los controles
var txtNom=document.getElementById("txtNom");
var txtApe=document.getElementById("txtApe");
var txtDni=document.getElementById("txtDni");
var cboCurso=document.getElementById("cboCurso")
var rbM=document.getElementById("rbM");
var rbT=document.getElementById("rbT");
var rbN=document.getElementById("rbN");
var chkEst=document.getElementById("chkEst")
var btnRegistrar=document.getElementById("btnRegistrar");

//Creamos un procedimiento para mostrar
function MostrarAlumno(){
    //Declaramos una variable para guardar los datos
    var listaalumno=Mostrar();
    //Selecciono el tbody de la tabla donde voy a mostrar la información
    var tbody=document.querySelector("#tbAlumno tbody");
    tbody.innerHTML="";
    //Agregamos al tbody las columnas que se registren
    for(var i=0;i<listaalumno.length;i++){
        //Declaramos una variable para las filas
        var fila=tbody.insertRow(i);
        //Declaramos una variable para los títulos
        var titulonom=fila.insertCell(0);
        var tituloape=fila.insertCell(1);
        var titulodni=fila.insertCell(2);
        var titulocur=fila.insertCell(3);
        var titulotur=fila.insertCell(4);
        var tituloest=fila.insertCell(5);
        //Agregamos los valores
        titulonom.innerHTML=listaalumno[i].nombre;
        tituloape.innerHTML=listaalumno[i].apellido;
        titulodni.innerHTML=listaalumno[i].dni;
        titulocur.innerHTML=listaalumno[i].curso;
        titulotur.innerHTML=listaalumno[i].turno;
        tituloest.innerHTML=listaalumno[i].estado;
        tbody.appendChild(fila);
    }
}

//Creamos un procedimiento para registrar los datos
function RegistrarAlumno(){
    //----------------  "T A R E A" -----------------------
    //Declarando variables para los controles
    var txtNom=document.getElementById("txtNom");
    var txtApe=document.getElementById("txtApe");
    var txtDni=document.getElementById("txtDni");
    var cboCurso=document.getElementById("cboCurso");
    var rbM=document.getElementById("rbM");
    var rbT=document.getElementById("rbT");
    var rbN=document.getElementById("rbN");
    var chkEst=document.getElementById("chkEst");
    //validando el ingreso de datos
    if(txtNom.value=="" || txtNom.value==null){
        alert("Ingrese sus Nombres");
        txtNom.focus();
    }else if(txtApe.value=="" || txtApe.value==null){
        alert("Ingrese sus Apellidos");
        txtApe.focus();
    }else if(txtDni.value=="" || txtDni.value==null){
        alert("Ingrese su DNI");
        txtDni.focus();
    }else if(cboCurso.selectedIndex==0){
        alert("Seleccione un Curso");
        cboCurso.focus();
    }else if(rbM.checked==false && rbT.checked==false && rbN.checked==false){
        alert("Seleccione un Turno");
        rbM.focus();
    }else if(chkEst.checked==false){
        alert("Seleccione el Estado");
        chkEst.focus();
    }else{
        //Capturando valores
        var nom=txtNom.value;
        var ape=txtApe.value;
        var dni=txtDni.value;
        var cur="";
        var indice=cboCurso.selectedIndex;
        switch(indice){
            case 1:
                cur="Diseño Web";
                break;
            case 2:
                cur="Base de Datos";
                break;
            case 3:
                cur="Programación Java";
                break;
            default:
                cur="";
                break;
        }
        var tur="";
        if(rbM.checked){
            tur="Mañana";
        }else if(rbT.checked){
            tur="Tarde";
        }else if(rbN.checked){
            tur="Noche";
        }else{
            tur="";
        }
        var est=""
        if(chkEst.checked){
            est="Habilitado";
        }else{
            alert("Seleccione el estado");
        }
        //Llamamos al procedimiento registrar
        Registrar(nom,ape,dni,cur,tur,est);
        //Llamamos al procedimiento para mostrar
        MostrarAlumno();
    }
}