//Crear un vector que contenga la información del registro
var registro=[];

//Creamos un procedimiento para poder registrar
function Registrar(nomregistro,aperegistro,corregistro){
    var NuevoRegistro={
        nombre:nomregistro,
        apellido:aperegistro,
        correo:corregistro
    };
    registro.push(NuevoRegistro);
}

//Creamos una función para mostrar la información del registro
function Mostrar(){
    return registro;
}