// ! MIDDLEWARE PARA VALIDAR LOS DATOS AL REGISTRAR UN PRODUCTO O CATEGORIA ! //

const boom = require('@hapi/boom'); // * LIBRERIA QUE SIRVE PARA CAPTURAR ERRORES * //

function validatorHandler(schema, property) {
    return (req, res, next) => {
        const data = req[property];
        const { error } = schema.validate(data, { abortEarly: false });
        if (error) {
            next(boom.badRequest(error));
        }
        next(); 
    }
}

module.exports = validatorHandler;