const { config } = require('./wdio.shared.conf')

exports.config = {
    ...config,
    ...{
      services: ['selenium-standalone'],

      capabilities: [

        {
          browserName: 'chrome'
        },

        // {
        //   maxInstances: 3,
        //   browserName: 'safari',
        // }

      ]
    }
}
