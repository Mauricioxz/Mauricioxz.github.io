//Crear un vector que contenga la información del registro
var alumno=[];

//Creamos un procedimiento para poder registrar
function Registrar(nomalumno,apealumno,dnialumno,curalumno,turalumno,estalumno){
    var NuevoAlumno={
        nombre:nomalumno,
        apellido:apealumno,
        dni:dnialumno,
        curso:curalumno,
        turno:turalumno,
        estado:estalumno
    };
    alumno.push(NuevoAlumno);
}

//Creamos una función para mostrar la información del registro
function Mostrar(){
    return alumno;
}