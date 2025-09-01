class Autor {
        /**
         * Constructor de clase
         * @param {string} nombre 
         */
    constructor(nombre) {
        this.nombre = nombre;
    }
}

class Editorial {
        /**
         * Constructor de clase
         * @param {string} nombre 
         */
    constructor(nombre){
        this.nombre = nombre;
    }
}

class Libro {
        /**
         * Constructor de clase
         * @param {string} titulo 
         * @param {Object} autor 
         * @param {Object} editorial 
         */
    constructor(titulo, autor, editorial) {
        this.titulo = titulo;
        this.autor = autor;
        this.editorial = editorial;
    }

    info(){
        console.log(`Titulo: ${this.titulo}\nAutor: ${this.autor.nombre}\nEditorial: ${this.editorial.nombre}`);
    }
}

const libro1 = new Libro("Cien anios de soledad",new Autor("Gabriel Garcia Marquess"),new Editorial("El patito"));
libro1.info();
