const configCreator = require('../utils/configCreator.js')

module.exports.config = configCreator({
  capabilites: {
    browserName: 'chrome',
    chromeOptions: {
      args: [
        '--headless'
      ]

    }

  }

})
