import { ProductDao as productos } from '../daos/index.js';


const getProducts = async (req, res) => {
    try {
        const resultado = await productos.getAll();
        res.json(resultado);
    } catch (e) {
        res.status(500).json({ error: e });
    }
}

const getProductById = async (req, res) => {
    try {
        const id = req.params.id;
        const producto = await productos.getById(id);

        if (!producto) throw 'producto no encontrado';
        res.status(200).json(producto);

    } catch (e) {
        res.status(500).json({ error: e });
    }
}

const saveProduct = async (req, res) => {
    try {
        const { title, img, price, stock} = req.body;
        const producto = { title: title, img: img, price: Number(price), stock: Number(stock)};

        const id = await productos.save(producto);
        res.status(201).json(id);
    } catch (e) {
        res.status(500).json({ error: e });
    }
}

const updateProduct = async (req, res) => {
    try {
        const { title, img, price, stock} = req.body;
        const id = req.params.id;
        const producto = await productos.getById(id);

        if (!producto) throw 'producto no encontrado';

        const productoModif = { title: title, img: img, price: Number(price), stock: Number(stock)};
        await productos.updateById(id, productoModif);

        res.status(200).json('Producto modificado');

    } catch (e) {
        res.status(500).json({ error: e });
    }
}

const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const producto = await productos.getById(id);

        if (!producto) throw 'producto no encontrado';

        await productos.deleteById(id);
        res.status(200).json('Producto eliminado');

    } catch (e) {
        res.status(500).json({ error: e });
    }
}

export { getProducts, getProductById, saveProduct, updateProduct, deleteProduct }