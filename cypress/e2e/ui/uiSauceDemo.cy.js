/// <reference types="cypress" />
import loginPage from '../../pagesObject/login/loginPage';
import inventoryPage from '../../pagesObject/inventory/inventoryPage';
import cartPage from '../../pagesObject/cart/cartPage';
import checkoutPage from '../../pagesObject/checkout/checkoutPage';

describe('SauceDemo - Flujo Completo E2E de Compra', () => {
  beforeEach(() => {
    loginPage.login();
  });

  it('Debe completar el circuito de compra validando productos, precios y confirmación final', () => {
    // 1 & 2. Seleccionar 3 productos
    inventoryPage.addThreeDefaultProducts();
    inventoryPage.elements.cartBadge().should('be.visible').and('have.text', '3');

    // 3. Acceder al carrito de compras
    inventoryPage.goToCart();

    // 4. Validar: Cantidad, Nombres, Precios e Información en el carrito
    cartPage.verifyCartInformation();

    // 5. Iniciar proceso de checkout
    cartPage.goToCheckout();

    // 6. Completar datos requeridos
    checkoutPage.fillInformation('Juan', 'Pérez', '1001');

    // Validación de resumen de compra (Totales e impuestos)
    checkoutPage.verifyOverviewSummary();

    // 7. Finalizar la compra
    checkoutPage.finishOrder();

    // 8. Validar el mensaje final de confirmación
    checkoutPage.verifyOrderSuccess();
  });
});
