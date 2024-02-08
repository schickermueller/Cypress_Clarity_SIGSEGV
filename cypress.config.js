const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges: false,
  viewportWidth: 1920,
  viewportHeight: 1080,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  reporter: 'mocha-junit-reporter',
  reporterOptions: {
    mochaFile: 'results/test-results-[suiteName].xml',
  },
  outputs: true,
  video: true,
  videoCompression: true,
  numTestsKeptInMemory: 0,
  userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0',
});
