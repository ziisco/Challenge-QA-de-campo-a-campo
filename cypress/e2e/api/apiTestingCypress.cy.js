/// <reference types="cypress" />

// Importación de los helpers
import { AuthHelper } from '../../helpers/authHelpers';

//Imports de productos y carrito
import { ProductHelper } from '../../helpers/productHelper';
import { CartHelper } from '../../helpers/cartHelper';

describe('Fake Store API Tests - Login', () => {
  it('1. Login exitoso y obtención de token', () => {
    const userCredentials = {
      username: Cypress.env('api_user'),
      password: Cypress.env('api_pass')
    };

    AuthHelper.login(userCredentials).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('token');
      expect(response.body.token).to.be.a('string').and.not.be.empty;

      Cypress.env('authToken', response.body.token);
      cy.log('Token obtenido:', Cypress.env('authToken'));
    });
  });

  it('2. Login fallido - Credenciales inválidas', () => {
    const invalidCredentials = {
      username: 'user_invalido',
      password: 'password_incorrecto'
    };

    AuthHelper.login(invalidCredentials).then((response) => {
      expect(response.status).to.eq(401);
      expect(response.body).to.not.have.property('token');
    });
  });
});

describe('Gestión del Carrito de Compras', () => {
  beforeEach(() => {
    const credentials = {
      username: Cypress.env('api_user'),
      password: Cypress.env('api_pass')
    };

    AuthHelper.login(credentials).then((response) => {
      Cypress.env('authToken', response.body.token);
    });
  });

  it('1. Creación de carrito con productos aleatorios del catálogo', () => {
    // 1. return obliga a Cypress a esperar que termine toda la cadena
    return ProductHelper.getRandomProducts(3).then((selectedProducts) => {
      // Log visual de productos seleccionados
      selectedProducts.forEach((p) => cy.log(`ID: ${p.id} - ${p.title}`));

      // 2. Preparar payload
      const cartPayload = CartHelper.buildPayload(1, selectedProducts);

      // 3. Ejecutar y Validar
      return CartHelper.createCart(cartPayload).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body).to.have.property('id');
        expect(response.body.products).to.have.lengthOf(3);

        // Guardamos explícitamente el ID en Cypress.env
        const generatedId = response.body.id;
        Cypress.env('cartId', generatedId);

        cy.log(`Carrito #${generatedId} creado con éxito`);
      });
    });
  });

  it('2. Actualizar el carrito creado', () => {
    // Obtenemos el ID guardado en el paso anterior
    const cartId = Cypress.env('cartId');

    // Validamos la existencia dentro del flujo de comandos
    cy.then(() => {
      expect(cartId, 'cartId debe estar definido desde el test de creación').to.not.be.undefined;
    });

    return ProductHelper.getRandomProducts(3).then((newProducts) => {
      const updatePayload = CartHelper.buildPayload(1, newProducts);

      return CartHelper.updateCart(cartId, updatePayload).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('id');

        cy.log(`Carrito #${cartId} actualizado exitosamente (Status 200)`);
      });
    });
  });

  it('3. Eliminar el carrito', () => {
    const cartId = Cypress.env('cartId');

    cy.then(() => {
      expect(cartId, 'cartId debe estar definido desde el test de creación').to.not.be.undefined;
    });

    return CartHelper.deleteCart(cartId).then((response) => {
      expect(response.status).to.eq(200);

      cy.log(`Carrito #${cartId} eliminado exitosamente (Status 200)`);
    });
  });
});
