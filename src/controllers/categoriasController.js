const CategoriasDao = require('../dao/categoriasDao');

class CategoriasController {

    async listarCategorias (req, res) {
        try {
            const categorias = await CategoriasDao.obtenerCategorias();
            res.status(200).json(categorias);

        } catch (error) {   
            console.error(error);
            res.status(404).send(error);
        }
    }

    async registrarCategoria (req, res) {
        try {
            const { body } = req;
            const result = await CategoriasDao.crearCategoria(body);
    
            res.status(200).send(`Categoría registrada con ID ${result.insertId}`);

        } catch (error) {   
            console.error(error);
            res.status(400).send(error);
        }
    }

}

module.exports = new CategoriasController();