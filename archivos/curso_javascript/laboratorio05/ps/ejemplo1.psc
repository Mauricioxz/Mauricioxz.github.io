Algoritmo Ejemplo1
	//definiendo variables
	Definir est Como Entero;
	Definir men como texto;
	//inicializando variables
	est=0; men="";
	//obteniendo valores
	Escribir "Ingrese el número de estación 1 o 2 o 3 o 4:";
	Leer est;
	//condición
	si(est=1) Entonces
		men="Primavera";
	SiNo
		si(est=2) Entonces
			men="Verano";
		SiNo
			si(est=3) Entonces
				men="Otoño";
			SiNo
				si(est=4) Entonces
					men="Invierno";
				SiNo
					men="No es un número válido.";
				FinSi
			FinSi
		FinSi
	FinSi
	Escribir "La estación es: ",men;
FinAlgoritmo
