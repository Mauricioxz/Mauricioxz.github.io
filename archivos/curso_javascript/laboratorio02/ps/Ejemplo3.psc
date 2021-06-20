Algoritmo Ejemplo3
	//definiendo variables
	Definir pre,sbt,igv,tot Como Real;
	Definir cant Como Entero;
	//inicializando variables
	pre=0; cant=0; sbt=0; igv=0; tot=0;
	//capturando valores
	Escribir "Ingrese el precio del producto:";
	Leer pre;
	Escribir "Ingrese la cantidad a comprar del producto:";
	Leer cant;
	//realizando operaciones
	sbt=pre*cant;
	igv=0.18*sbt;
	tot=sbt+igv;
	//mostrando resultados
	Escribir "El subtotal es:",sbt;
	Escribir "El IGV es:",igv;
	Escribir "El total a pagar es:",tot;
	
FinAlgoritmo
