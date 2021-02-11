
const { browser } = require('protractor')
const helper = require('protractor-helper')
let stringss

class Actions {
  constructor() {
  }

  getAtribute(campo, atributo) {

    return campo.getAttribute(atributo)

  }

  clears(campo) {

    campo.clear()

  }

  getURL(url, campo) {
    browser.get(url)
    helper.waitForElementVisibility(campo)
  }

  keysSend(campo, conteudo) {
    campo.sendKeys(conteudo)
  }

  waitElementVisibility(campo) {
    helper.waitForElementVisibility(campo)
  }

  getEnabled(campo) {
    campo.isEnabled()
  }

  clicks(campo) {
    campo.click()
  }

  async getTitle(campo) {
    return await campo.getTitle()
  }

  getTexts(campo) {
    return campo.getText()
  }

  selectOption(campo, subcampo) {
    this.clicks(campo)
    helper.waitForElementVisibility(subcampo)
    this.clicks(subcampo)
  }

  clickMenu(clicks, campo) {
    this.clicks(clicks)
    helper.waitForElementVisibility(campo)
  }

  selectDado(campo, dado) {
    if (dado != '') {
      clicks(campo)
    }
  }
}

module.exports = Actions
