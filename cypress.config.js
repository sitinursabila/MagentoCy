const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
        },
    baseUrl: "https://magento.softwaretestingboard.com",
  },
  //downloadsFolder: "cypress/downloads",
  chromeWebSecurity: false,
  viewportHeight: 720,
  viewportWidth: 1280,
  defaultCommandTimeout: 10000, // Tambahkan sedikit timeout untuk reliabilitas
  video: false, 
});
