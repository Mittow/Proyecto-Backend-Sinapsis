
/******************************************** MYSQL *********************************************/
/************************************************************************************************/
								/* CREANDO BASE DE DATOS */
/************************************************************************************************/
CREATE DATABASE BD;
USE BD;

/************************************************************************************************/
								/* CREANDO TABLA DE CATEGORIAS */
/************************************************************************************************/
CREATE TABLE Categorias
	(id_categoria int auto_increment,
    nombre_categoria varchar(20) NOT NULL,
    descripcion_categoria varchar(255) NULL,
    constraint PK_id_categoria primary key(id_categoria));
    
/************************** INSERTANDO DATOS EN LA TABLA CATEGORIAS *****************************/
INSERT INTO Categorias (nombre_categoria, descripcion_categoria) VALUES
	("Celulares", "Dispositivos móviles de comunicación"),
    ("Televisores", "Dispositivos que reproduce imágenes y sonidos transmitidos por televisión"),
    ("Tablets", "Dispositvo informático inteligente portátil");

/******************************* LISTAR TODAS LAS CATEGORIAS ************************************/
SELECT * FROM Categorias;

/************************************************************************************************/
								/* CREANDO TABLA DE PRODUCTOS */
/************************************************************************************************/
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
    
/*************************** INSERTANDO DATOS EN LA TABLA PRODUCTOS *****************************/
INSERT INTO Productos (id_categoria ,nombre_producto, precio_producto, cantidad_producto, descripcion_producto) VALUES 
	(1, "Samsung Galaxy s22 PLus Ultra", 4500.00, 10, "Celular de alta Gama de la marca Samsung serie S"),
    (2, "Televisor LG OLED 75", 10000.00, 5, "Televisor de alta Gama de la marca LG"),
    (3, "Ipad Sexta edición 2017", 999.99, 23, "Tablet de la marca Apple"),
    (1, "Xiaomi Redmi Note 11", 1299.99, 100, "Celular de Gama media de la marca Xiaomi"),
    (1, "Motorola G8 Power", 899.99, 2, "Celular de Gama media de la marca Motorola");

INSERT INTO Productos (id_categoria ,nombre_producto, precio_producto, cantidad_producto, descripcion_producto) VALUES 
(2, 'TV Samsung 32 full HD', 299.99, 200, 'Telvisor de baja gama de la marca Samsung');

/*Lista todos los productos sin filtro*/
SELECT * FROM Productos;

/*Borrado en grupo de producto por su id*/
DELETE FROM Productos where id_producto in (12,13,14,15); 

/***********************************************************************************************/
						/* LISTAR TODOS LOS PRODUCTOS POR CATEGORIA */
/***********************************************************************************************/
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



/*********************************** PRIVILEGIOS **********************************************/
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
flush privileges;




