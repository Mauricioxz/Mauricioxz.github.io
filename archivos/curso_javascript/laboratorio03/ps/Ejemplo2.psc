Algoritmo Ejemplo2
	//definiendo variables
	Definir lado,area Como Entero;
	Definir men como texto;
	//inicializando variables
	lado=0; area=0; men="";
	//capturando valores
	Escribir "Ingrese el valor del lado del cuadrado:";
	Leer lado;
	//realizando operaciones
	area=lado*lado;
	//condición
	si (area>100) Entonces
		men="Es un cuadrado grande";
	FinSi
	//mostrando resultados
	Escribir "El área del cuadrado es:",area;
	Escribir men;
FinAlgoritmo
