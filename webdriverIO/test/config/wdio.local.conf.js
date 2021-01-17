const { config } = require('./wdio.shared.conf')

exports.config = {
    ...config,
    ...{
      services: ['selenium-standalone'],

      capabilities: [
        // {
        //   maxInstances: 1,
        //   browserName: 'chrome',
        //   'goog:chromeOptions': {
        //       //headless: true
        //   }
        // },

        {
          maxInstances: 1,
          browserName: 'safari',
        },

      ]
    }
}
