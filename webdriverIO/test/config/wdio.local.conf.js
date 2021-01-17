const { config } = require('./wdio.shared.conf')

exports.config = {
    ...config,
    ...{
      services: ['selenium-standalone'],

      capabilities: [

        // {
        //   browserName: 'chrome'
        // },

        {
          browserName: 'safari',
        }

      ]
    }
}
