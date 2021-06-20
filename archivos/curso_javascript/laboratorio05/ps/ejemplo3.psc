Algoritmo Ejemplo3
	//definiendo variables
	Definir sb, sf, bon, des Como Real;
	Definir cat como texto;
	//inicializando variables
	sb=0; sf=0; bon=0; des=0; cat="";
	//capturando valores
	Escribir "Ingrese el sueldo básico";
	Leer sb;
	Escribir "Ingrese su categoría A o B o C o D:";
	Leer cat;
	//condición + realizando operaciones
	si(cat="a" || cat="A") Entonces
		bon=0.03*sb;
		des=0.01*sb;
	SiNo
		si(cat="b" || cat="B") Entonces
			bon=0.05*sb;
			des=0.02*sb;
		SiNo
			si(cat="c" || cat="C") Entonces
				bon=sb*0.07;
				des=sb*0.03;
			SiNo
				si(cat="d" || cat="D") Entonces
					bon=sb*0.09;
					des=sb*0.04;
				SiNo
					bon=0;
					des=0;
				FinSi
			FinSi
		FinSi
	FinSi
	sf=sb+bon-des;
	//obteniendo resultados
	Escribir "El sueldo básico es:",sb;
	Escribir "La bonificación es:",bon;
	Escribir "El descuento es:",des;
	Escribir "El sueldo final es:",sf;
FinAlgoritmo
