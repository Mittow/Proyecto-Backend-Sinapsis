# **Proyecto-Backend-Sinapsis**

1. NOMBRE: Prueba Técnica Backend de Sinapsis.

2. DESCRIPCION: Solución de la prueba técnica de backend para la empresa SINAPSIS; realizado con NodeJS y MySQL.

3. PASOS PARA LEVANTAR EL PROYECTO:
    - Ejecutar el comando " npm i " en la terminal CMD o del VSC, (Al ejecutar este comando, se instalarán todas las dependecias y librerías que necesite el proyecto para levantarse).
    - Ejecutar el comando " npm start ", (Al ejecutar este comando, se levantará el servidor y pondrá en funcionamiento).
    - Opcionalmente se puede instalar la libreria nodemon con el comando " npm i nodemon -D ", y luego ejecutar el comando " npm run dev " el cual levantara el servidor en modo desarrollador.

4. COMO USAR: Para utilizar esta aplicación, se debe usar los siguientes endpoints:
    - Listar todos los productos. (Opcionalmente se puede filtrar los productos por su categoría)
        - URL: http://localhost:8080/api/v1/productos (GET)
        - URL: http://localhost:8080/api/v1/productos?categoria=Celulares (GET) - URL con filtro.
    - Registrar producto.
        - URL: http://localhost:8080/api/v1/productos (POST)
        - PARAMETROS: 
            {
                "id_categoria": 3,
                "nombre": "TV Samsung",
                "precio": 399.99,
                "cantidad": 120,
                "descripcion": "Telvisor de la marca Samsung"
            }
 
    Adicionalmente agregue 2 enpoints más para las categorías:
    - Listar todos las categorías.
        - URL: http://localhost:8080/api/v1/categorias (GET)
    - Resgistrar categoría.
        - URL: http://localhost:8080/api/v1/categorias (POST)
            {
                "nombre": "Parlantes",
                "descripcion": "Dispositivos que reproducen sonidos"
            }
            
- **Link de documentación: https://certificablockchain.atlassian.net/l/c/dLQdyXkZ**


NOTA: Los datos ingresados para registrar los productos y categorías estan validados con los siguientes validadores:

    PRODUCTOS:
        - nombre         ==>        nombre es un string y como mínimo debe tener 2 caracteres y como máximo 30 caracteres.
        - id_categoria   ==>        id_categoria es un número entero.
        - precio         ==>        precio es un número y que debe ser mayor a 5.
        - cantidad       ==>        cantidad es un número entero que debe tener como cantidad mínima de 1.
        - descripcion    ==>        descripción es un string con un mínimo de 2 caracteres y como máximo 250 caracteres.
    
    CATEGORIAS:
        - nombre         ==>        nombre es un string y como mínimo debe tener 2 caracteres y como máximo 20 caracteres.
        - descripcion    ==>        descripción es un string con un mínimo de 2 caracteres y como máximo 250 caracteres.

En caso no se cumpla una validación, el sistema retornará un error indicando que se incumplio la validación, cabe resaltar que los datos son requeridos obligatoriamente.



# **SCRIPT DE LA BASE DE DATOS: MYSQL**


### /* CREANDO BASE DE DATOS */

CREATE DATABASE BD;
USE BD;


### /* CREANDO TABLA DE CATEGORIAS */

CREATE TABLE Categorias
	(id_categoria int auto_increment,
    nombre_categoria varchar(20) NOT NULL,
    descripcion_categoria varchar(255) NULL,
    constraint PK_id_categoria primary key(id_categoria));
    
    
### /* INSERTANDO DATOS EN LA TABLA CATEGORIAS */

INSERT INTO Categorias (nombre_categoria, descripcion_categoria) VALUES
	("Celulares", "Dispositivos móviles de comunicación"),
    ("Televisores", "Dispositivos que reproduce imágenes y sonidos transmitidos por televisión"),
    ("Tablets", "Dispositvo informático inteligente portátil");


### /* LISTAR TODAS LAS CATEGORIAS */

SELECT * FROM Categorias;


### /* CREANDO TABLA DE PRODUCTOS */

CREATE TABLE Productos
	(id_producto int auto_increment,
    id_categoria int,
    nombre_producto varchar(30) NOT NULL,
    precio_producto float NULL,
    cantidad_producto int NOT NULL,
    descripcion_producto varchar(255) NULL,
    constraint PK_id_producto primary key(id_producto),
	constraint FK_id_categoria foreign key(id_categoria)
    references Categorias(id_categoria));
    
    
### /* INSERTANDO DATOS EN LA TABLA PRODUCTOS */

INSERT INTO Productos (id_categoria ,nombre_producto, precio_producto, cantidad_producto, descripcion_producto) VALUES 
	(1, "Samsung Galaxy s22 PLus Ultra", 4500.00, 10, "Celular de alta Gama de la marca Samsung serie S"),
    (2, "Televisor LG OLED 75", 10000.00, 5, "Televisor de alta Gama de la marca LG"),
    (3, "Ipad Sexta edición 2017", 999.99, 23, "Tablet de la marca Apple"),
    (1, "Xiaomi Redmi Note 11", 1299.99, 100, "Celular de Gama media de la marca Xiaomi"),
    (1, "Motorola G8 Power", 899.99, 2, "Celular de Gama media de la marca Motorola");


### /* LISTAR TODOS LOS PRODUCTOS POR CATEGORIA */

SELECT 
	p.id_producto, 
    c.nombre_categoria as categoria_producto, 
    p.nombre_producto, 
    p.precio_producto,
    p.cantidad_producto, 
    p.descripcion_producto 
FROM Productos p
JOIN Categorias c on p.id_categoria = c.id_categoria
WHERE c.nombre_categoria = 'Celulares'
ORDER BY p.id_producto ASC;

------------------------------------------------------------------------------------
## En en archivo " .env ", poner las credenciales de la Base de datos creada y ponerlo dentro del archivo de la aplicación.
- ## EJEMPLO:

	### HOST=localhost
	### DATABASE=BD
	### USER=root
	### PASSWORD=password
