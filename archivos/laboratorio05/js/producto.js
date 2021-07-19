//Crear un vector que contenga la información del registro
var producto=[];

//Creamos un procedimiento para poder registrar
function Registrar(nomproducto,catproducto,preproducto,canproducto){
    var NuevoProducto={
        nombre:nomproducto,
        categoria:catproducto,
        precio:preproducto,
        cantidad:canproducto
    };
    producto.push(NuevoProducto);
}

//Creamos una función para mostrar la información del producto
function Mostrar(){
    return producto;
}