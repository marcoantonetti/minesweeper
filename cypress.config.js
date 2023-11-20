// const { defineConfig } = require("cypress");
import { defineConfig } from "cypress";

export default defineConfig({
  "viewportWidth": 900,
  "viewportHeight": 900,
  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:1234"
  },
});
