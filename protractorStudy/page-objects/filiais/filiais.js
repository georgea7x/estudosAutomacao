const { browser, element } = require('protractor')

const envUrl = require('../../utils/configCreator.js')
const Actions = require('../components/actions.js')
const filiais = element(by.xpath('//*/a[text()="Filiais"]'))
const listFiliais = element(by.xpath('//*/a[text()="Cadastro de filiais"]'))
const ttipFiliais = element(by.xpath('//*/i[@class="fa fa-info-circle tooltip-icon"]'))
const priorizacaoFilials = element(by.xpath('//*/a[text()="Priorização de filiais"]'))
const getFilialName = element(by.xpath('//*/div/input[@name="tradingName"]'))
const getFilialId = element(by.xpath('//*/div/input[@name="id"]'))
const lupaFilialId = element(by.xpath('//*/input[@name="id"]/../button'))
const resultId = element(by.xpath('//*/tbody/tr[1]/td[1]'))
const nameLocationId = element(by.xpath('//*/tbody/tr[1]/td[2]'))
const addFilial = element(by.xpath('//*/a[@href="/locations/new"]'))
const emptyTable = element(by.xpath('//*/div[@class="empty-table"]/p'))
const returnFilial = element(by.xpath('//*/a[@class="back-button"]'))
const buttonSalvar = element(by.xpath('//*/div/button/span[text()="Salvar"]'))

const action = new Actions()

class Filiais {
  constructor() {
  }

  menuAcess() {
    action.clicks(filiais)
    action.waitElementVisibility(getFilialId)
  }

  getTextTooltip() {
    action.waitElementVisibility(ttipFiliais)
    return action.getAtribute(ttipFiliais, 'data-tip')
  }

  adicionarFilial() {
    action.clicks(addFilial)
    action.waitElementVisibility(buttonSalvar)
  }

  consultLocationById(id) {
    action.keysSend(getFilialId, id)
    action.clicks(lupaFilialId)

  }

  consultLocationByName(id) {
    action.keysSend(getFilialName, name)
    action.clicks(lupaFilialId)

  }

  consultLocation(id, name) {
    action.keysSend(getFilialId, id)
    action.keysSend(getFilialName, name)
    action.clicks(lupaFilialId)

  }

  getResultConsult(){
    action.waitElementVisibility(resultId)
    return action.getTexts(resultId) + " / " + action.getTexts(nameLocationId)
  }

  getResultEmpty(){
    action.waitElementVisibility(emptyTable)
    return action.getTexts(emptyTable)
  }

}
module.exports = Filiais
