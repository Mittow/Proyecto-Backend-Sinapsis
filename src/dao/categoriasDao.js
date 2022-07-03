const db = require('../database/mysql');

class CategoriasDao {

    async obtenerCategorias () {
        return new Promise(async (resolve, reject) => {
            try {
                let query = `SELECT * FROM Categorias;`;  

                let result = await db.query(query);
                resolve(result);
            } catch (err) {
                reject(err);
            }
        });
    }

    async crearCategoria ({nombre, descripcion}) {
        return new Promise(async (resolve, reject) => {
            try {
                let query = `INSERT INTO Categorias (nombre_categoria, descripcion_categoria) VALUES
                ('${nombre}', '${descripcion}');`  

                let result = await db.query(query);
                resolve(result);
            } catch (err) {
                reject(err);
            }
        });
    }

}

module.exports = new CategoriasDao();