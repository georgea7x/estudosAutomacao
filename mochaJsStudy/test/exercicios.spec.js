var chai = require("chai")
var chaiHttp = require("chai-http")
const clientFile = require("../utils/client-config.json")
const environmentFile = require("../utils/environment-config.json")
const endpointFile = require("../utils/url.json")

const clientId = process.env.CLIENT;
const appName = process.env.APP_NAME;
const environment = process.env.ENV;

const urlBase = environmentFile[appName][environment];
const token = clientFile[clientId][environment]
const createChannel = endpointFile['channels']['createChannel']
const updateChannel = endpointFile['channels']['updateChannel']
const getChannel = endpointFile['channels']['getChannel']

const assert = chai.assert

chai.use(chaiHttp)
const request = chai.request(urlBase)

describe('Exercicios de backEnd', () => {

    let repetido

    it("Exercício 1", (done) => {
        let bodyRequest =
        {
            "clientId": clientId,
            "channelId": "ttvvcc",
            "stockThreshold": 3,
            "thresholdType": "FERMENTAL",
            "stockTypes": [
                "PHYSICAL",
                "PRESALE"
            ]
        }


        request.post(createChannel)
            .auth(clientId, token)
            .send(bodyRequest)
            .end((err, res) => {
                assert.equal(res.status, 400)
                    assert.equal(res.status, "One or more fields are invalid")
                    assert.equal(res.errors, "thresholdType must be in { \"INCREMENTAL\", \"PRIORITY\" }")
                    done()
            })

    })

    it("Exercício 2", () => {

        let bodyRequest =
        {
            "clientId": clientId,
            "stockThreshold": 3,
            "thresholdType": "INCREMENTAL",
            "stockTypes": [
                "PHYSICAL",
                "PRESALE"
            ]
        }


        request.post(createChannel)
            .auth(clientId, token)
            .send(bodyRequest)
            .end((err, res) => {
                assert.equal(res.status, 400)
                    assert.equal(res.message, "One or more fields are invalid")
                    assert.equal(res.errors, "Must have keys { \"clientId\", \"channelId\", \"stockThreshold\", \"thresholdType\", \"stockTypes\" }")
            })

    })

    it("Exercício 3", () => {
        let bodyRequest =
        {
            "clientId": clientId,
            "channelId": "gap" + Math.random() * 9999999 + 1111111,
            "stockThreshold": 3,
            "thresholdType": "FERMENTAL",
            "stockTypes": [
                "PHYSICAL",
                "PRESALE"
            ]
        }


        repetido = bodyRequest

        request.post(createChannel)
            .auth(clientId, token)
            .send(bodyRequest)
            .end((err, res) => {
                assert.equal(res.status, 200)
            })

    })


    it("Exercício 4", () => {

        let bodyRequest = repetido

        request.post(createChannel)
            .auth(clientId, token)
            .send(bodyRequest)
            .end((err, res) => {
                assert.equal(res.status, 409)
                    assert.equal(res.error, "Channel already exists")
            })

    })

    it("Exercício 5", () => {
 let perpage = 5
        request.get(createChannel + "/perpage=" + perpage)
            .auth(clientId, token)
            .end((err, res) => {
                assert.equal(res.status, 200)
                    assert.equal(res.header.X-Paginate-Page-Size, perpage)
            })

            request.get(getChannel + repetido.clientId)
            .auth(clientId, token)
            .end((err, res) => {
                assert.equal(res.status, 200)
                    assert.equal(res.clientId, repetido.clientId)
            })
        
    })

    it("Exercício 6", () => {

        request.get(getChannel)
            .auth(clientId, token)
            .end((err, res) => {
                assert.equal(res.status, 404)
                    assert.equal(res.error, "Channel not found with clientId '" + clientId + "' and channelId '0'")
            })

    })

    it("Exercício 7", () => {

        request.get(getChannel + repetido.channelId)
            .auth(clientId, token)
            .end((err, res) => {
                assert.equal(res.status, 200)
                    assert.equal(res.clientId, repetido.clientId)
                    assert.equal(res.channelId, repetido.channelId)
                    assert.equal(res.stockThreshold, repetido.stockThreshold)
                    assert.equal(res.thresholdType, repetido.thresholdType)
                    assert.equal(res.stockTypes, repetido.stockTypes)


            })

    })

    it("Exercício 8", () => {

        let bodyRequest =
        {
            "clientId": clientId,
            "channelId": "s0",
            "stockThreshold": 3,
            "thresholdType": "PRIORITY",
            "stockTypes": [
                "PHYSICAL",
                "PRESALE"
            ]
        }


        request.put(updateChannel + "s0")
            .auth(clientId, token)
            .send(bodyRequest)
            .end((err, res) => {
                assert.equal(res.status, 404)
                    assert.equal(res.error, "Channel not found with clientId 'qa' and channelId 's0'")
            })

    })

    it("Exercício 9", () => {

        let bodyRequest =
        {
            "clientId": clientId,
            "channelId": repetido.channelId,
            "stockThreshold": 3,
            "thresholdType": "FERMENTAL",
            "stockTypes": [
                "PHYSICAL",
                "PRESALE"
            ]
        }


        request.put(updateChannel + repetido.channelId)
            .auth(clientId, token)
            .send(bodyRequest)
            .end((err, res) => {
                assert.equal(res.status, 400)
                    assert.equal(res.message, "One or more fields are invalid")
                    assert.equal(res.error, "thresholdType must be in { \"INCREMENTAL\", \"PRIORITY\" }")
            })

    })

    it("Exercício 10", () => {

        let bodyRequest =
        {
            "clientId": clientId,
            "stockThreshold": 3,
            "thresholdType": "FERMENTAL",
            "stockTypes": [
                "PHYSICAL",
                "PRESALE"
            ]
        }


        request.put(updateChannel + repetido.channelId)
            .auth(clientId, token)
            .send(bodyRequest)
            .end((err, res) => {
                assert.equal(res.status, 400)
                    assert.equal(res.message, "One or more fields are invalid")
                    assert.equal(res.errors, "Must have keys { \"clientId\", \"channelId\", \"stockThreshold\", \"thresholdType\", \"stockTypes\" }")
            })

    })

    it("Exercício 11", () => {
        repetido.thresholdType = "PRIORITY"

        request.put(updateChannel + repetido.channelId)
            .auth(clientId, token)
            .send(repetido)
            .end((err, res) => {
                assert.equal(res.status, 200)
            })

    })

    it("Exercício 12", () => {

        request.get(updateChannel + repetido.channelId)
            .auth(clientId, token)
            .end((err, res) => {
                assert.equal(res.status, 200)
                    assert.equal(res.clientId, repetido.clientId)
                    assert.equal(res.channelId, repetido.channelId)
                    assert.equal(res.stockThreshold, repetido.stockThreshold)
                    assert.equal(res.thresholdType, repetido.thresholdType)
                    assert.equal(res.stockTypes, repetido.stockTypes)
            })

    })

})
