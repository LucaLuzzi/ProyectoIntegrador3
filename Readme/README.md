#  StockMaster

*StockMaster* es un proyecto que ofrece un sistema de gestión de productos con operaciones *CRUD* (Crear, Leer, Actualizar y Eliminar). En este readme se verán las funcionalidades de cada página y un poco de detalle de como se hicieron.






## Características

- **Create**: Permite agregar un nuevo producto a la base de datos.

- **Read**: Muestra la lista de productos existentes, con capacidad de búsqueda y ordenamiento.

- **Update**: Permite modificar la información de un producto existente.

- **Delete**: Permite eliminar un producto de la base de datos.


## Tecnologías

- Front-end: **React**
- Estilos: **Bootstrap**
- Back-end: **Node.js con Express**
- Base de datos: **API REST** con endpoints para cada operación **CRUD**
## Componentes


 1. ### Create

El componente *Create* cumple la funcionalidad de la creación de nuevos productos en el sistema. Aquí hay un poco más de detalle sobre este componente:

- **Manejo de Cambios**:

Utiliza la función `handleChange` para actualizar dinámicamente el estado según la entrada del usuario.

- **Envío de Datos**:

Al enviar el formulario, se realiza una solicitud **POST** a la **API** para agregar el nuevo producto.
Maneja casos de error y éxito, mostrando mensajes adecuados.

![CREATE](https://github.com/JSkuzco/CRUD-IMAGES/blob/main/CRUDCreate.jpg?raw=true)

2. ### Delete

El componente *Delete* se encarga de mostrar un botón para eliminar un producto. Más detalles: 

- **Estado**:

Utiliza el estado `showModal` para controlar la visibilidad del modal.

- **Confirmación**:

Al confirmar la eliminación, realiza una solicitud **DELETE** a la **API**.
Maneja casos de *éxito* y *error*, mostrando mensajes correspondientes.

- **Modal de Confirmación**:

Utiliza un modal para pedir confirmación al usuario antes de eliminar el producto.



3. ### Update

El componente `Update` permite la edición de un producto existente. Aquí hay información adicional:

 
- **Estado Inicial**:

Inicializa el estado con los datos actuales del producto.

- **Modal de Edición**:

Al hacer clic en el botón "Editar", muestra un modal con un formulario prellenado.

- **Envío de Datos**:

Al enviar el formulario, realiza una solicitud **PUT** a la **API** para actualizar la información del producto.
Cierra el modal y recarga la página después de la actualización.

- **Manejo de Cambios**:

Utiliza la función `handleChange` para actualizar dinámicamente el estado según la entrada del usuario.

![UPDATE](https://github.com/JSkuzco/CRUD-IMAGES/blob/main/CRUDUpdate.jpg?raw=true)


4. ### Index

El componente `Index` es la vista principal que muestra la lista de productos. Aquí están los detalles clave:

**Búsqueda**:

- Permite buscar productos por nombre utilizando el estado `searchTerm`.

- Realiza solicitudes a la **API** para obtener productos según el término de búsqueda.

**Ordenamiento**:

- Permite ordenar la lista por diferentes criterios como `precio`, `stock`, y `id`.

- Utiliza el estado `sortOrder` para gestionar el orden.

**Moneda**:

- Permite cambiar entre dólares y pesos con el botón `Cambiar Moneda`.

**Presentación de Productos**:

- Utiliza un diseño de tabla para mostrar productos con detalles como `ID`, `Nombre`, `Descripción`, `Precio`, `Stock`, y acciones.

![INDEX](https://github.com/JSkuzco/CRUD-IMAGES/blob/main/CRUDIndex.jpg?raw=true)

![INDEXDETAILS](https://github.com/JSkuzco/CRUD-IMAGES/blob/main/CRUDDetails.jpg?raw=true)





## Autores

- [@Ignacio Ravettini](https://github.com/Ravettini)

- [@Luca Luzzi](https://github.com/LucaLuzzi-03)

- [@Joaquín Schvindt](https://github.com/JSkuzco)


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://katherineoelsner.com/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/)

