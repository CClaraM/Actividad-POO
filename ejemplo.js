class Rectangulo {
    /**
    * constructor de clase
    *@param {float} base
    *@param {float} altura
    */
    constructor (base, altura){
        this.base = base
        this.altura = altura
    }

    calcularArea() {
        return this.base * this.altura
    }
}

const rectangulo = new Rectangulo(4.5,3,8);
const areaRectangulo = rectangulo.calcularArea();
console.log(`El rectangulo de base ${rectangulo.base} y altura ${rectangulo.altura} con un area de ${areaRectangulo}`);