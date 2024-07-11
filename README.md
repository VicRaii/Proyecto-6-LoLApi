###### Proyecto-6-LoLApi

Este proyecto proporciona una API para manejar información sobre campeones del videojuego League of Legends. La API permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en los campeones.

## Controladores

### `getChampions`

- **Descripción**: Recupera una lista de todos los campeones.
- **Ruta**: `GET /champions`
- **Respuesta**: Retorna un array de objetos JSON que representan a los campeones.
- **Errores**: Retorna un mensaje de error con código de estado 404 si ocurre un problema durante la consulta.

### `getChampionsById`

- **Descripción**: Recupera la información de un campeón específico por su ID.
- **Ruta**: `GET /champions/:id`
- **Parámetros**: `id` - El ID del campeón.
- **Respuesta**: Retorna un objeto JSON que representa al campeón.
- **Errores**: Retorna un mensaje de error con código de estado 404 si el campeón no es encontrado o si ocurre un problema durante la consulta.

### `getChampionsByRole`

- **Descripción**: Recupera una lista de campeones por su rol.
- **Ruta**: `GET /champions/role/:role`
- **Parámetros**: `role` - El rol de los campeones.
- **Respuesta**: Retorna un array de objetos JSON que representan a los campeones con el rol especificado.
- **Errores**: Retorna un mensaje de error con código de estado 404 si ocurre un problema durante la consulta.

### `postChampions`

- **Descripción**: Crea un nuevo campeón.
- **Ruta**: `POST /champions`
- **Cuerpo de la solicitud**: Debe incluir un objeto JSON con la información del nuevo campeón.
- **Respuesta**: Retorna el objeto JSON que representa al campeón creado.
- **Errores**: Retorna un mensaje de error con código de estado 404 si ocurre un problema durante la creación del campeón.

### `putChampions`

- **Descripción**: Actualiza la información de un campeón existente.
- **Ruta**: `PUT /champions/:id`
- **Parámetros**: `id` - El ID del campeón a actualizar.
- **Cuerpo de la solicitud**: Debe incluir un objeto JSON con la información actualizada del campeón.
- **Respuesta**: Retorna el objeto JSON que representa al campeón actualizado.
- **Errores**: Retorna un mensaje de error con código de estado 404 si ocurre un problema durante la actualización del campeón.

### `deleteChampions`

- **Descripción**: Elimina un campeón específico por su ID.
- **Ruta**: `DELETE /champions/:id`
- **Parámetros**: `id` - El ID del campeón a eliminar.
- **Respuesta**: Retorna el objeto JSON que representa al campeón eliminado.
- **Errores**: Retorna un mensaje de error con código de estado 404 si ocurre un problema durante la eliminación del campeón.

###### Regions API

Este proyecto proporciona una API para manejar información sobre regiones y sus campeones asociados. La API permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en las regiones.

## Controladores

### `getRegions`

- **Descripción**: Recupera una lista de todas las regiones, incluyendo la información de los campeones asociados.
- **Ruta**: `GET /regions`
- **Respuesta**: Retorna un array de objetos JSON que representan a las regiones junto con sus campeones.
- **Errores**: Retorna un mensaje de error con código de estado 404 si ocurre un problema durante la consulta.

### `getRegionById`

- **Descripción**: Recupera la información de una región específica por su ID, incluyendo la información de los campeones asociados.
- **Ruta**: `GET /regions/:id`
- **Parámetros**: `id` - El ID de la región.
- **Respuesta**: Retorna un objeto JSON que representa a la región junto con sus campeones.
- **Errores**: Retorna un mensaje de error con código de estado 404 si la región no es encontrada o si ocurre un problema durante la consulta.

### `postRegion`

- **Descripción**: Crea una nueva región.
- **Ruta**: `POST /regions`
- **Cuerpo de la solicitud**: Debe incluir un objeto JSON con la información de la nueva región.
- **Respuesta**: Retorna el objeto JSON que representa a la región creada.
- **Errores**: Retorna un mensaje de error con código de estado 404 si ocurre un problema durante la creación de la región.

### `putRegion`

- **Descripción**: Actualiza la información de una región existente y agrega campeones a la lista de campeones asociados.
- **Ruta**: `PUT /regions/:id`
- **Parámetros**: `id` - El ID de la región a actualizar.
- **Cuerpo de la solicitud**: Debe incluir un objeto JSON con la información actualizada de la región y la lista de campeones a agregar.
- **Respuesta**: Retorna el objeto JSON que representa a la región actualizada.
- **Errores**: Retorna un mensaje de error con código de estado 404 si ocurre un problema durante la actualización de la región.

### `deleteRegion`

- **Descripción**: Elimina una región específica por su ID.
- **Ruta**: `DELETE /regions/:id`
- **Parámetros**: `id` - El ID de la región a eliminar.
- **Respuesta**: Retorna el objeto JSON que representa a la región eliminada.
- **Errores**: Retorna un mensaje de error con código de estado 404 si ocurre un problema durante la eliminación de la región.
