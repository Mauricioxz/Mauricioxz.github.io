Algoritmo Ejemplo1
	//definiendo variables
	Definir edad Como Entero;
	Definir men como texto;
	//inicializando variables
	edad=0; men="";
	//capturando valores
	Escribir "Ingrese su edad";
	Leer edad;
	//condición
	si (edad>=18) Entonces
		men="Eres mayor de edad";
	SiNo
		men="Eres menor de edad";
	FinSi
	//mostrando resultados
	Escribir "La edad es:",edad;
	Escribir men;
FinAlgoritmo
