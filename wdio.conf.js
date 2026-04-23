export const config = {
  runner: 'local',

  specs: ['./test/specs/**/*.js'],

  maxInstances: 1,

  capabilities: [
    {
      browserName: 'chrome'
    }
  ],

  logLevel: 'info',

  baseUrl: 'https://app.thecasework.com',

  framework: 'mocha',

  reporters: ['spec'],

  mochaOpts: {
    ui: 'bdd',
    timeout: 120000
  }
};
