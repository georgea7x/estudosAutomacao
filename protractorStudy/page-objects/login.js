const { browser, element } = require('protractor')

const envFile = require('../utils/environment-config.json')
const envUrl = require('../utils/configCreator.js')
const Actions = require('../page-objects/components/actions.js')

const url = 'https://oms-homolog.chaordic.com.br/'
const login = element(by.xpath('//*[@type="email"]'))
const password = element(by.xpath('//*[@type="password"]'))
const buttonLogin = element(by.xpath('//*[@type="submit"]'))
const imgOMS = element(by.xpath('//*/img[@class="pull-left"]'))

const email = envFile.homolog.login
const senha = envFile.homolog.password

const action = new Actions()

class Login {
  constructor () {

  }

  visit () {
    action.getURL(url, login)
  }

  logar () {
    action.keysSend(login, email)
    action.keysSend(password, senha)
    action.clicks(buttonLogin)
    action.waitElementVisibility(imgOMS)
  }
}

module.exports = Login
