const { element } = require("protractor")
const protractor = require('protractor-helper')

/*
menus para abrir as listas

const boxIndexPending = element(by.xpath('//h3[text()="Pendentes"]/../..'))
const boxIndexPicking = element(by.xpath('//h3[text()="Separação"]/../..'))
const boxIndexbillingChecking = element(by.xpath('//h3[text()="Faturamento"]/../..'))
const boxIndexBilled = element(by.xpath('//h3[text()="Preparar Entrega"]/../..'))
const boxIndexShipping = element(by.xpath('//h3[text()="Lista de despacho"]/../..'))
const boxIndexTransfer = element(by.xpath('//h3[text()="Recebimento"]/../..'))
const boxIndexPackingList = element(by.xpath('//h3[text()="Lista de romaneio"]/../..'))
const boxIndexPickup = element(by.xpath('//h3[text()="Lista de retirada"]/../..'))
const boxIndexShipped = element(by.xpath('//h3[text()="Despachadas"]/../..'))
const boxIndexDelivered = element(by.xpath('//h3[text()="Entregues"]/../..'))
const boxIndexTreatment = element(by.xpath('//h3[text()="Tratamento"]/../..'))
const boxIndexPreReservation = element(by.xpath('//h3[text()="Pré Reserva"]/../..'))
*/

const search = element(by.xpath('//a[@class="btn-quick-search"]'))
const orderIdSearch = element(by.xpath('//div[@class="form-group modal-check-order-product-code"]/input'))
const buttonSearchBox = element(by.xpath('//div[@class="form-group form-button clearfix"]/button[@type="submit"]'))


class Home {

    constructor() { }

    fastSearch(orderId, fulfillmentId) {
        
        protractor.waitForElementVisibility(search)
        search.click()
        orderIdSearch.sendKeys(orderId + '-' + fulfillmentId)
        buttonSearchBox.click()

    }

}

module.exports = Home