class Cart {
    constructor(title, description, thumbnail, price, stock, code) {
        this.id = 0;
        this.timestamp = new Date(Date.now());
        this.productos = [];
    }

    updateCart(object) {
        try {
            this.id = object.id;
            this.timestamp = object.timestamp;
            this.productos = object.productos;
        } catch(err) {
            console.log('Error en método updateCart: ', err);
        }
    }

    getAll() {
        try {
            return this.productos;
        } catch(err) {
            console.log('Error en método getAll: ', err);
        }
    }

    getById(number) {
        try {
            const object = this.productos.find(object => object.id === number);
            return object ? object : null;
        } catch (err) {
            console.log('Error en método getById: ', err);
        }
    }

    addProduct(object) {
        try {
            this.productos = [...this.productos, object];
        } catch(err) {
            console.log('Error en método addProduct: ', err);
        }
    }

    removeProduct(object) {
        this.productos = this.productos.filter(producto => producto.id != object.id);
    }
}

module.exports = {
    Cart: Cart,
};