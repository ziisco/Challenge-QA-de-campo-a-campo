# Prueba E2E de compra en SauceDemo

## Descripción

La prueba `uiSauceDemo.cy.js` valida el flujo completo de compra de un usuario en SauceDemo, desde el inicio de sesión hasta la confirmación exitosa del pedido.

## Alcance

La prueba cubre:

- Inicio de sesión mediante `loginPage`.
- Selección de tres productos predeterminados.
- Validación del contador del carrito.
- Acceso al carrito de compras.
- Validación de productos, nombres, cantidades y precios.
- Inicio del proceso de checkout.
- Registro de la información del comprador.
- Validación del resumen de compra, totales e impuestos.
- Finalización del pedido.
- Validación del mensaje de confirmación.

## Flujo validado

1. El usuario inicia sesión antes de cada prueba.
2. Se agregan tres productos al carrito.
3. Se verifica que el contador muestre `3`.
4. Se accede al carrito.
5. Se valida la información de los productos.
6. Se inicia el checkout.
7. Se completan los datos:
   - Nombre: `Juan`
   - Apellido: `Pérez`
   - Código postal: `1001`
8. Se valida el resumen de la compra.
9. Se finaliza el pedido.
10. Se verifica la confirmación final.

## Estructura utilizada

La prueba implementa el patrón Page Object Model mediante:

- `loginPage`: autenticación del usuario.
- `inventoryPage`: productos, carrito y navegación.
- `cartPage`: validaciones y acceso al checkout.
- `checkoutPage`: información del comprador, resumen y finalización.

## Dependencias

- Node.js y npm.
- Cypress.
- Objetos de página ubicados en `cypress/pagesObject`.
- Configuración de autenticación definida en `loginPage`.
- Conexión a Internet para acceder a SauceDemo.

## Instalación

Desde la raíz del proyecto:

````powershell
npm install