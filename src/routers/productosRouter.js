// ! RUTAS DE LA APIs PRODUCTOS ! //

const { Router } = require("express");
const router = Router();

const ProductosController = require('../controllers/productosController');

// * IMPORTANDO ESQUEMA DE PRODUCTO Y EL VALIDADOR * //
const validatorHandler = require('../middlewares/validadorHandler');
const { esquemaRegistrarProducto } = require('../schemas/esquemaProductos');

// * RUTAS * //
router.get('/api/v1/productos', ProductosController.listarProductos);
router.post('/api/v1/productos', validatorHandler(esquemaRegistrarProducto, 'body'), ProductosController.registrarProducto);

module.exports = router;