class Animal {
        /**
         *  Constructor de clase
         *  @param {string} nombre 
         */
    constructor(nombre){
        this.nombre = nombre;
    }

    sonido(){
        console.log(`${this.Animal} hace un sonido.`);
    }
}

class Perro extends Animal{
        /**
         *  Constructor de clase
         *  @param {string} nombre 
         */
    constructor(nombre){
        super(nombre);
    }
    sonido() {
        console.log(`${this.nombre} dice: Guau Guau!`);
    }
}

class Gato extends Animal {
    sonido() {
        console.log(`${this.nombre} dice: Maaaauuuuuuuuu!`);
    }
}

const perro1 = new Perro ("sebastian");
perro1.sonido();

const gato1 = new Gato ("licifer");
gato1.sonido();