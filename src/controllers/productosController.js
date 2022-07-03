const ProductosDao = require('../dao/productosDao');

class ProductosController {

    async listarProductos (req, res) {
        const { categoria } = req.query;
        try {
            const productos = await ProductosDao.obtenerProductos(categoria);

            if (productos.length === 0) {   // ? Valida si existe productos con un determinada categoría
                throw `No existe ningún producto con la categoría ${categoria}`; 
            } else {
                res.status(200).json(productos);
            }

        } catch (error) {   
            console.error(error);
            res.status(404).send(error);
        }
    }

    async registrarProducto (req, res) {
        const { body } = req;
        try {
            const result = await ProductosDao.crearProducto(body);
            res.status(200).send(`Producto registrado con ID ${result.insertId}`);
            
        } catch (error) {   
            console.error(error);
            // ? Captura el error del SQL donde indica que no existe el id_categoria ingresado ? //
            if (error.code == `ER_NO_REFERENCED_ROW_2`) return res.status(400).send(`No existe la categoría con el ID ${body.id_categoria}`);
            res.status(400).send(error);
        }  
    }
}

module.exports = new ProductosController();