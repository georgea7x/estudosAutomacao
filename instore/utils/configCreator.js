
module.exports = provideConfig => {
  const environmentFile = require('../utils/environment-config.json')

  const ENV = process.env.ENV

  const defaultConfig = {
    baseUrl: 'http://www.google.com/',
    specs: ['../specs/*.spec.js'],
    onPrepare: () => {
      browser.waitForAngularEnabled(false)
    },

    jasmineNodeOpts: { random: false }

  }

  return Object.assign(
    {},
    defaultConfig,
    provideConfig

  )
}
