const { defineConfig } = require("cypress");

module.exports = defineConfig({
  "reporter": "mochawesome",
  "reporterOptions": {
    "charts": true,
    "overwrite": false,
    "html": false,
    "json": true,
    "reportDir": "cypress/reports"
  },
  e2e: {
    "chromeWebSecurity": false,
    "watchForFileChanges": false,

    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
  },
});
