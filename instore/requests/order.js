const urlsFile = require('../utils/jsons/urlsOrder.json')
const orderFile = require('../utils/jsons/orders/order.json')
const updateOrderId = require('../utils/jsons/orders/updateOrder.json')

const clientId = process.env.CLIENT
const ENV = process.env.ENV
const token = urlsFile[clientId][ENV]['token']

const supertest = require("supertest")
const request = supertest.agent(urlsFile[clientId][ENV]['urlBase'] + clientId)

class Order {

    constructor() { }

    //Manipulando o json de criação de pedido

    setInvoiceId() {

        let id = Math.random() * 99999999999999999999999999999999999999999999 + 11111111111111111111111111111111111111111111
        return id

    }

    setInvoiceNumber() {

        let id = Math.random() * 99999999 + 11111111
        return id

    }

    async getOrder(channelId, orderId) {

        await request.get('/channels/' + channelId + '/orders/' + orderId)
            .auth(clientId, token)
            .expect(res => {

                return res

            })


    }

    //Utilizando API

    async createOrder(channelId, orderId, locationId) {

        let bodyRequest = orderFile

        bodyRequest.fulfillments.F1.orderId = orderId
        bodyRequest.id = orderId
        bodyRequest.fulfillments.F1.locationId = locationId
        bodyRequest.channelId = channelId
        bodyRequest.fulfillments.F1.channelId = channelId

        await request.post('/channels/' + channelId + '/orders')
            .auth(clientId, token)
            .send(bodyRequest)
            .expect(res => {

                return res

            })

    }

    async updateOrderWithInvoice(channelId, orderId, fulfillment, status) {

        let bodyRequest = updateOrderId.withInvoice

        bodyRequest.channelId = channelId
        bodyRequest.orderId = orderId
        bodyRequest.status = status
        bodyRequest.id = fulfillment
        bodyRequest.channelId = clientId
        bodyRequest.issuedAt
        bodyRequest.invoice.issuedAt
        bodyRequest.processedAt
        bodyRequest.invoice.id = this.setInvoiceId()
        bodyRequest.invoice.number = this.setInvoiceNumber()

        await request.update('/channels/' + channelId + '/orders/' + orderId + '/fulfillments/' + fulfillment + '/status/' + status)
            .auth(clientId, token)
            .send(bodyRequest)
            .expect(res => {

                return res

            })

    }

    async updateOrderNoInvoice(channelId, orderId, fulfillmentId, status) {

        let bodyRequest = updateOrderId.withInvoice

        bodyRequest.channelId = channelId
        bodyRequest.orderId = orderId
        bodyRequest.status = status
        bodyRequest.id = fulfillmentId
        bodyRequest.channelId = clientId
        bodyRequest.issuedAt
        bodyRequest.processedAt

        await request.update('/channels/' + channelId + '/orders/' + orderId + '/fulfillments/' + fulfillmentId + '/status/' + status)
            .auth(clientId, token)
            .send(bodyRequest)
            .expect(res => {

                return res

            })

    }

    async getSKU(channelId, orderId) {

        let Sku = []

        await request.get('/channels/' + channelId + '/orders/' + orderId)
            .auth(clientId, token)
            .expect(res => {

                for (i = 0; i < res.body.items.lenght; i++) {

                    Sku.push(res.body.items[i].sku)

                }

                return Sku

            })

    }

    async getQtdSKU(channelId, orderId) {

        let qtdSku = []

        await request.get('/channels/' + channelId + '/orders/' + orderId)
            .auth(clientId, token)
            .expect(res => {

                for (i = 0; i < res.body.items.lenght; i++) {

                    Sku.push(res.body.items[i].quantity)

                }

                return qtdSku

            })

    }

}

module.exports = Order