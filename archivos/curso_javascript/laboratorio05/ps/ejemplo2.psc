Algoritmo Ejemplo2
	//definiendo variables
	Definir tur, men como texto;
	//inicializando variables
	tur=""; men="";
	//capturando valores
	Escribir "Ingrese el turno [m]mañana, [t]tarde, [n]noche:";
	Leer tur;
	//condición
	si(tur="m" || tur="M") Entonces
		men="Mañana";
	SiNo
		si(tur="t" || tur="T") Entonces
			men="Tarde";
		SiNo
			si(tur="n" || tur="N") Entonces
				men="Noche";
			SiNo
				men="No es una letra válida.";
			FinSi
		FinSi
	FinSi
	Escribir "El turno es: ",men;
FinAlgoritmo
