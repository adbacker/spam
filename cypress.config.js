const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "test/**/*.ts",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
