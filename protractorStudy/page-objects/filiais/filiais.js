const { browser, element } = require('protractor')

const envUrl = require('../../utils/configCreator.js')
const Actions = require('../components/actions.js')

const action = new Actions()

const textTooltip = 'Lista de lojas ou CDs cadastrados no OMS como filiais, ou seja, centros de processamento de pedido com a possibilidade de Ship from Store e/ou Pickup in Store e/ou Ship to Store configuradas.'

const filiais = element(by.xpath('//*/a[text()="Filiais"]'))
const listFiliais = element(by.xpath('//*/a[text()="Cadastro de filiais"]'))
const ttipFiliais = element(by.xpath('//*/i[@data-tip="'+ textTooltip + '"]'))
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


class Filiais {
  constructor() {


  }

   getTooltip() {

    action.waitElementVisibility(ttipFiliais)

  }

  menuAcess() {
    action.clicks(filiais)
    action.waitElementVisibility(getFilialId)
  }

  adicionarFilial() {
    action.clicks(addFilial)
    action.waitElementVisibility(buttonSalvar)
  }

  consultLocationById(id) {
    action.clears(getFilialId)
    action.clears(getFilialName)
    action.keysSend(getFilialId, id)
    action.clicks(lupaFilialId)

  }

  consultLocationByName(name) {
    action.clears(getFilialId)
    action.clears(getFilialName)
    action.keysSend(getFilialName, name)
    action.clicks(lupaFilialId)

  }

  consultLocation(id, name) {
    action.clears(getFilialId)
    action.clears(getFilialName)
    action.keysSend(getFilialId, id)
    action.keysSend(getFilialName, name)
    action.clicks(lupaFilialId)

  }

  getResultConsult() {
    action.waitElementVisibility(resultId)
    return action.getTexts(resultId) + " / " + action.getTexts(nameLocationId)
  }

  async getResultEmpty() {
    action.waitElementVisibility(emptyTable)
    return await emptyTable.getText()
  }

  getValidTextTableEmpty(text) {

    action.waitElementVisibility(emptyTable)
    action.waitForTextToBePresentInElement(emptyTable, text)
    
  }

  getValidTextReturnResult(ResultId, NameLocationId) {

    action.waitElementVisibility(resultId)
    action.waitForTextToBePresentInElement(resultId, ResultId)
    action.waitForTextToBePresentInElement(nameLocationId, NameLocationId)

  }


}
module.exports = Filiais
