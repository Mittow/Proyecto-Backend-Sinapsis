// ! ESQUEMA DE VALIDACION DE DATOS DE LAS CATEGORIAS ! //

const Joi = require('joi');  // * LIBRERIA PARA REALIZAR ESQUEMAS DE VALIDACION DE DATOS *//

const nombre = Joi.string().min(2).max(20);         // ? Valida si nombre es un string y como mínimo debe tener 2 caracteres y como máximo 20 caracteres.
const descripcion = Joi.string().min(2).max(250);   // ? Valida si la descripción es un string con un mínimo de 2 caracteres y como máximo 250 caracteres.

const esquemaRegistrarCategoria = Joi.object({
    nombre: nombre.required(),
    descripcion: descripcion.required()
});

module.exports = { esquemaRegistrarCategoria }