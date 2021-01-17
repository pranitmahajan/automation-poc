const path = require('path')

exports.config = {

    runner: 'local',
   
    specs: [
        './test/specs/**/*.js'
    ],

    suites: {
      poc: [
          './test/specs/signup.spec.js',
          './test/specs/createProject.spec.js',
          './test/specs/addEmployee.spec.js',
          './test/specs/addTasks.spec.js'
      ]
    },

    maxInstances: 1,

    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'info',
    outputDir: path.resolve(__dirname, '../../logs'),

    bail: 0,
    
    baseUrl: 'https://app.productive.io/',

    waitforTimeout: 30000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,

    framework: 'mocha',
    mochaOpts: {
      ui: 'bdd',
      timeout: 90000,
      compilers: ['js:@babel/register'],
    },

    reporters: [
      'spec',

      ['allure', {
          outputDir: './test/reports/allure-results',
          disableWebdriverStepsReporting: true,
          disableWebdriverScreenshotsReporting: true,
      }]

    ],

    before: function (capabilities, specs, browser) {
      browser.setWindowSize(1280, 800);
    },

    beforeCommand: function (commandName, args) {
      browser.pause(200);
    },
}