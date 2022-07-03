# Proyecto-Backend-Sinapsis

1. NOMBRE: Prueba Técnica Backend de Sinapsis.

2. DESCRIPCION: Solución de la prueba técnica de backend para la empresa SINAPSIS; realizado con NodeJS y MySQL.

3. PASOS PARA LEVANTAR EL PROYECTO:
    - Ejecutar el comando " npm i ", (Al ejecutar este comando, se instalarán todas las dependecias y librerías que necesite el proyecto para levantarse).
    - Ejecutar el comando " npm start ", (Al ejecutar este comando, se levantará el servidor y pondrá en funcionamiento).

4. COMO USAR: Para utilizar esta aplicación, se debe usar los siguientes endpoints:
    - Listar todos los productos. (Opcionalmente se puede filtrar los productos por su categoría)
        - URL: http://localhost:8080/api/v1/productos (GET)
    - Registrar producto.
        - URL: http://localhost:8080/api/v1/productos (POST)

    Adicionalmente agregue 2 enpoints más para las categorías:
    - Listar todos las categorías.
        - URL: http://localhost:8080/api/v1/categorias (GET)
    - Resgistrar categoría.
        - URL: http://localhost:8080/api/v1/categorias (POST)





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
