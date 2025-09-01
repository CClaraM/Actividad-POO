class Persona {
        /**
         *  Constructor de clase
         *  @param {int} identificacion
         *  @param {string} nombre  
         *  @param {string} correo 
         */

    constructor(identificacion, nombre, correo){
        this.identificacion = identificacion;
        this.nombre = nombre;
        this.correo = correo;
    }
}

class Aprendiz extends Persona {
        /**
         *  Constructor de clase
         *  @param {int} identificacion
         *  @param {string} nombre  
         *  @param {string} correo 
         *  @param {float} puntajeIcfes 
         */
    constructor(identificacion, nombre, correo, puntajeIcfes) {
        super(identificacion, nombre, correo);
        this.puntajeIcfes = puntajeIcfes;
    }

    info() {
        console.log(`Aprendiz:\n ID: ${this.identificacion}\nNombre: ${this.nombre}\nCorreo: ${this.correo}\nPuntaje ICFES: ${this.puntajeIcfes}`);
    }
}

class Instructor extends Persona {
        /**
         * Constructor de clase
         *  @param {int} identificacion
         *  @param {string} nombre  
         *  @param {string} correo  
         *  @param {string} especialidad 
         */
    
    constructor(identificacion, nombre, correo, especialidad) {
        super(identificacion, nombre, correo);
        this.especialidad = especialidad;
    }

    info() {
        console.log(`Instructor:\n ID: ${this.identificacion}\nNombre: ${this.nombre}\nCorreo: ${this.correo}\nEspecialidad: ${this.especialidad}`);
    }

}

const aprendiz1 = new Aprendiz (123,"Anastasia", "anastasialamejor@123.com",289);
aprendiz1.info();

const instructor1 = new Instructor (1234, "Nestor", "nesatoroficial@institucion.com", "Pararse de manos y hacer flecciones");
instructor1.info();