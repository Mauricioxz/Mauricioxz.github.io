Algoritmo Ejemplo3
	//definiendo variables
	Definir b, h, area Como Real;
	Definir men como texto;
	//inicializando variables
	b=0; h=0; area=0; men="";
	//capturando valores
	Escribir "Ingrese el valor de la base:";
	Leer b;
	Escribir "Ingrese el valor de la altura";
	Leer h;
	//realizando operaciones
	area=b*h;
	//condición
	si (area>100) Entonces
		men="Es un rectángulo grande";
	SiNo
		men="Es un rectángulo pequeño";
	FinSi
	//mostrando resultados
	Escribir "El área del rectángulo es:",area;
	Escribir men;
FinAlgoritmo
