class Circulo {
        /**
         *  Constructor de la clase
         *  @param {float} radio
         */
    constructor(radio){
        this.radio = radio
    }

    calcularArea(){
        return Math.PI * Math.pow(this.radio, 2);
    }
}