const db = require('../database/mysql');

class ProductosDao {

    async obtenerProductos (categoria) {
        return new Promise(async (resolve, reject) => {
            try {
                let query = `SELECT 
                    p.id_producto, 
                    c.nombre_categoria as categoria_producto, 
                    p.nombre_producto, 
                    p.precio_producto,
                    p.cantidad_producto, 
                    p.descripcion_producto 
                    FROM Productos p
                    JOIN Categorias c on p.id_categoria = c.id_categoria `
                    if(categoria != null) query+=`WHERE c.nombre_categoria = '${categoria}' `
                    query +=`ORDER BY p.id_producto ASC;`;  

                let result = await db.query(query);
                resolve(result);
            } catch (err) {
                reject(err);
            }
        });
    }

    async crearProducto ({id_categoria, nombre, precio, cantidad, descripcion}) {
        return new Promise(async (resolve, reject) => {
            try {
                let query = `INSERT INTO Productos (id_categoria ,nombre_producto, precio_producto, cantidad_producto, descripcion_producto) VALUES 
                (${id_categoria}, '${nombre}', ${precio}, ${cantidad}, '${descripcion}');`  

                let result = await db.query(query);
                resolve(result);
            } catch (err) {
                reject(err);
            }
        });
    }
    
}

module.exports = new ProductosDao();