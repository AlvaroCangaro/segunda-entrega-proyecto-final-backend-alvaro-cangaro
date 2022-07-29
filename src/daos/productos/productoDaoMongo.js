import ContenedorMongo from '../../contenedores/ContenedorMongo.js';

class ProductoDaoMongo extends ContenedorMongo {
    constructor() {
        super('productos', {
            title: { type: String, required: true },
            price: { type: Number, required: true },
            img: { type: String, required: true },
            stock: { type: Number, required: true },
        });
    }
}

export default ProductoDaoMongo;