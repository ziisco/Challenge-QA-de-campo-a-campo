const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  
  // Configuración del Reportador
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',           // Carpeta donde se guardarán los reportes
    reportPageTitle: 'Suite Test Report - API & UI',
    embeddedScreenshots: true,              // Capturas integradas en el reporte HTML
    inlineAssets: true,                     // Genera un único archivo HTML autocontenido
    overwrite: false,                       // Evita sobrescribir reportes previos
    timestamp: 'yyyy-mm-dd_HHMMss',        // Agrega marca de tiempo a cada archivo generado
    charts: true                            // Incluye gráficos estadísticos
  },

  env: {
    // Credenciales Fake Store API
    api_user: "johnd",
    api_pass: "m38rmF$",

    // Configuración SauceDemo UI
    sauceDemo_url: "https://www.saucedemo.com",
    sauceDemo_user: "standard_user",
    sauceDemo_pass: "secret_sauce"
  },

  e2e: {
    baseUrl: "https://fakestoreapi.com",
    setupNodeEvents(on, config) {
      // Registra el plugin de mochawesome
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});