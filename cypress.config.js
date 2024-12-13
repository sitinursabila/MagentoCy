const fs = require('fs');
const path = require('path');

module.exports = {
  e2e: {
    baseUrl: "https://magento.softwaretestingboard.com", // Pindahkan baseUrl ke sini
    chromeWebSecurity: false,
    viewportHeight: 720,
    viewportWidth: 1280,
    video: false,
    setupNodeEvents(on, config) {
      on('task', {
        updateFixture({ fileName, key, validUser }) {
          const filePath = path.join(__dirname, `cypress/fixtures/${fileName}.json`);

          // Membaca file JSON
          const fileContent = JSON.parse(fs.readFileSync(filePath, 'utf8'));

          // Perbarui data di key `validUser`
          if (fileContent[key]) {
            fileContent[key] = { ...fileContent[key], ...validUser };
          } else {
            throw new Error(`Key "${key}" tidak ditemukan di ${fileName}.json`);
          }

          // Menulis ulang file JSON dengan data yang diperbarui
          fs.writeFileSync(filePath, JSON.stringify(fileContent, null, 2));

          console.log(`Updated ${key} in ${fileName}.json`);
          return null;
        },
      });
    },
  },
};
