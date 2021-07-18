//Creamos una función para cuando cargue el documento
function Cargar(url,titulo,ancho,alto){
    //Declaramos variables para calcular el ancho y alto de la pantalla
    var anc=screen.width;
    var alt=screen.height;
    //Alert(anc);
    //Alert(alt);
    //Declaramos variables para la posición
    var x=(anc/2)-(ancho/2);
    var y=(alt/2)-(alto/2);
    //Alert(x);
    //Alert(y);
    window.open(url,titulo,"width="+ancho+", height="+alto+", left="+x+", top="+y+", scrollbars=No");
}
//Llamamos a la función cargar
window.onload=Cargar("pagina4.html","Ventana Emergente",400,400);