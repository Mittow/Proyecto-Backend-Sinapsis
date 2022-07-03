// ! RUTAS DE LA APIs CATEGORIAS ! //

const { Router } = require("express");
const router = Router();

const CategoriasController = require('../controllers/categoriasController');

// * IMPORTANDO ESQUEMA DE CATEGORIA Y EL VALIDADOR * //
const validatorHandler = require('../middlewares/validadorHandler');
const { esquemaRegistrarCategoria } = require('../schemas/esquemaCategorias');


router.get('/api/v1/categorias', CategoriasController.listarCategorias);
router.post('/api/v1/categorias', validatorHandler(esquemaRegistrarCategoria, 'body'), CategoriasController.registrarCategoria);

module.exports = router;