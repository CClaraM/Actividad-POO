class Producto {
        /**
         *  Constructor de clase
         *  @param {string} nombre
         *  @param {int} precio  
         */
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
}

class Pedido {
        /**
         * Constructor de clase
         * @param {int} id
         * @param {Objeto} [productos=[]]  
         */
    constructor(id, productos = []){
        this.id = id;
        this.productos = productos;
    }

        /**
         * Metodo que permite agregar productos
         * @param {Objeto} producto 
         */
    agregarProducto(producto){
        this.productos.push(producto);
    }

    total(){
        return this.productos.reduce((suma, p) => suma + p.precio, 0);
    }
}

const pedido1 = new Pedido(101);
pedido1.agregarProducto(new Producto("camisa",32000));
pedido1.agregarProducto(new Producto("Pantalon", 80000));

console.log("Total del pedido: ",pedido1.total());