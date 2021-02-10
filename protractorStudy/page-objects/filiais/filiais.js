const { browser, element } = require('protractor')

const envUrl = require('../../utils/configCreator.js')
const Actions = require('../components/actions.js')
const filiais = element(by.xpath('//*/a[text()="Filiais"]'))
const listFiliais = element(by.xpath('//*/a[text()="Cadastro de filiais"]'))
const ttipFiliais = element(by.xpath('//*/i[@class="fa fa-info-circle tooltip-icon"]'))
const priorizacaoFilials = element(by.xpath('//*/a[text()="Priorização de filiais"]'))
const getFilial = element(by.xpath('//*/div/input[@name="id"]'))
const addFilial = element(by.xpath('//*/a[@href="/locations/new"]'))
const returnFilial = element(by.xpath('//*/a[@class="back-button"]'))
const buttonSalvar = element(by.xpath('//*/div/button/span[text()="Salvar"]'))

const action = new Actions()

class Filiais {
  constructor () {
  }

  menuAcess () {
    action.clicks(filiais)
    action.waitElementVisibility(getFilial)
  }

  getTextTooltip () {
    return action.getText(ttipFiliais)
  }

  adicionarFilial () {
    action.clicks(addFilial)
    action.waitElementVisibility(buttonSalvar)
  }
}

module.exports = Filiais
