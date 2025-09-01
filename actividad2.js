class Estudiante {
        /**
         *  Constructor de clase
         *  @param {string} nombre
         *  @param {string[]} materias
         */
    constructor(nombre, materias = []){
        this.nombre = nombre;
        this.materias = materias;
    }

    listarMaterias(){
        console.log(`Materias de  ${this.nombre}:`);
        this.materias.forEach((materia, index) => {console.log(`${index + 1}. ${materia}`);});
    }
}

const estudiante1 = new Estudiante("Anamaria",["Matematicas","Sociales","Programacion"]);
estudiante1.listarMaterias();