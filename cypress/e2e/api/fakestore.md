# Pruebas de API con Cypress

## Descripción

El archivo `APITestingCypress.cy.js` valida la autenticación y la gestión de carritos mediante Fake Store API.

## Alcance

### Autenticación

- Login exitoso con credenciales configuradas en `Cypress.env`.
- Validación del código `201`.
- Verificación de un token válido y no vacío.
- Login fallido con credenciales inválidas.
- Validación del código `401`.
- Confirmación de que no se genere un token inválido.

### Gestión del carrito

- Autenticación previa antes de cada prueba.
- Selección aleatoria de tres productos.
- Creación de un carrito.
- Actualización del carrito.
- Eliminación del carrito.
- Validación de las respuestas HTTP.

## Flujo validado

1. Obtener las credenciales desde las variables de entorno.
2. Ejecutar el login.
3. Guardar el token de autenticación.
4. Obtener tres productos aleatorios.
5. Construir el payload del carrito.
6. Crear el carrito.
7. Guardar el identificador generado.
8. Actualizar el carrito con nuevos productos.
9. Eliminar el carrito.

## Componentes utilizados

- `AuthHelper`: gestiona la autenticación.
- `ProductHelper`: obtiene productos aleatorios.
- `CartHelper`: construye payloads y gestiona el carrito.
- `Cypress.env`: almacena credenciales, token e identificador del carrito.

## Requisitos previos

- Node.js y npm instalados.
- Dependencias del proyecto instaladas.
- Credenciales válidas configuradas.
- Conexión a Internet para acceder a Fake Store API.

## Configuración de credenciales

- `api_user`
- `api_pass`

## Instalación

Desde la raíz del proyecto:

````powershell
npm install