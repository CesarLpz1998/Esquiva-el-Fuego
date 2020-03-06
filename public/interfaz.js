class Saludo {
3	  saluda() { throw new Error("Hola"); }
4	}
5	/** @implements {Saludo} */
6	class Bienvenido {
7	  /** @override */
8	  saluda() {
9	    console.log("Hola Bienvenido a Esquiva el Fuego");
10	  }
11	}
12	/** @implements {Saludo} */
13	class Listo {
14	  /** @override */
15	  saluda() {
16	    console.log("Listo para Jugar ");
17	  }
18	}
19	const saludos =
20	  [new Listo(), new Bienvenido()];
21	for (var saludo of saludos) {
22	  saludo.saluda();
23	}