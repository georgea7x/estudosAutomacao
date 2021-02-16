const { browser, element } = require('protractor')
const environmentFile = require('../utils/jsons/environmentConfig.json')
const protractor = require('protractor-helper')

const clientId = process.env.CLIENT
const ENV = process.env.ENV
const url = environmentFile[clientId][ENV]['url']
const email = element(by.id('user_enrollment'))
const senha = element(by.id('user_password'))
const entrar = element(by.name('commit'))

class Login {

    constructor() {

    }

    visit() {
        browser.get(url)
        protractor.waitForElementVisibility(email)
    }

    login() {
        email.sendKeys()
        senha.sendKeys(environmentFile[clientId][ENV]['senha'])
        entrar.click()
    }

}

module.exports = Login