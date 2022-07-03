// ! SERVER ! //

const express = require('express');
require('dotenv').config();
const cors = require('cors');

const productosRouter = require('./src/routers/productosRouter');
const categoriasRouter = require('./src/routers/categoriasRouter');

const app = express();

//SETTINGS
const PORT = 8080 || process.env.PORT;

//MIDDLEWARES
app.use(cors());
app.use(express.json({ limit: '5mb' }));    
app.use(express.urlencoded({ extended: true, limit: '5mb' }));

//RUTAS
app.use(productosRouter);
app.use(categoriasRouter);

const server = app.listen(PORT, () => console.log(`🚀 Servidor levantado en: http://localhost:${PORT}`));

// ? En caso surga un error al levantar el servidor, mandará el tipo de error en la consola ? //
server.on("error", (error) => console.error(`Hubo un error al levantar el servidor: ${error.message}`)); 