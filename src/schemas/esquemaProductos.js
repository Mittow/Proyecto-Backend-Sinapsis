// ! ESQUEMA DE VALIDACION DE DATOS DE LOS PRODUCTOS ! //

const Joi = require('joi');  // * LIBRERIA PARA REALIZAR ESQUEMAS DE VALIDACION DE DATOS *//

const nombre = Joi.string().min(2).max(30);         // ? Valida si nombre es un string y como mínimo debe tener 2 caracteres y como máximo 30 caracteres.
const id_categoria = Joi.number().integer();        // ? Valida si el id_categoria es un número entero.
const precio = Joi.number().min(5);                 // ? Valida si el precio es un número y que debe ser mayor a 5.
const cantidad = Joi.number().integer().min(1);     // ? Valida si la cantidad es un número entero que debe tener como cantidad mínima de 1.
const descripcion = Joi.string().min(2).max(250);   // ? Valida si la descripción es un string con un mínimo de 2 caracteres y como máximo 250 caracteres.

const esquemaRegistrarProducto = Joi.object({
    nombre: nombre.required(),
    id_categoria: id_categoria.required(),
    precio: precio.required(),
    cantidad: cantidad.required(),
    descripcion: descripcion.required()
});

module.exports = { esquemaRegistrarProducto }
