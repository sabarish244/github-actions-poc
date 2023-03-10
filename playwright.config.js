const { defineConfig } = require('@playwright/test');
module.exports = defineConfig({
reporter: [['junit', { outputFile: 'results.xml' }]],
});