export const config = {
  runner: 'local',

  specs: ['./test/specs/**/*.e2e.js'],

  maxInstances: 1,

  capabilities: [
    {
      browserName: 'chrome',
      acceptInsecureCerts: true,
    },
  ],

  logLevel: 'info',

  baseUrl: 'https://app.thecasework.com',

  waitforTimeout: 15000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,

  //
  // IMPORTANT: REMOVE CHROMEDRIVER SERVICE
  //
  services: [],

  framework: 'mocha',
  reporters: ['spec'],

  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  }
};
