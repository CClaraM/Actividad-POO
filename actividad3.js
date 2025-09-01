class Empleado{
    /**
     *  Definicion de la propiedad salario como privada
     */
    #salario

    /**
     *  Constructor de clase
     *  @param {string} nombre
     *  @param {float} sueldoInicial
     */

    constructor(nombre, salarioInicial) {
        this.nombre = nombre;
        this.#salario = salarioInicial;
    }

    /**
     *  Metodo que permite asignar un nuevo salario
     *  @param {*} monto
     */

    actualizarSalario(monto) {
        this.#salario = monto;
    }
    
    obtenerSalario() {
        return this.#salario;
    }
}

const empleado = new Empleado("Francisco", 1200000);
console.log(empleado);
console.log(empleado.obtenerSalario());
empleado.actualizarSalario(1400000);
console.log(empleado.obtenerSalario());