const { browser, element } = require('protractor')

const envUrl = require('../utils/configCreator.js')
const Actions = require('../page-objects/components/actions.js')

const cliente = 'QA'
const listClient = element(by.xpath('//*/span[@class="btn btn-link dropdownlist-toggle"]/span'))
const client = element(by.xpath('//*/div[@class="dropdownlist-menu"]/ul/li/span[text()="' + cliente + '"]'))

const action = new Actions()

class Home {
  constructor () {
  }

  selectClient () {
       
    if (action.getText(listClient) != cliente.toLowerCase()) {
      action.clicks(listClient)
      action.clicks(client)
    }
  }
}

module.exports = Home
