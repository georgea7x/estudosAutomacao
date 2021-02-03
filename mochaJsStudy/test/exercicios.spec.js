const chai = require("chai")
const clientFile = require("../utils/client-config.json")
const environmentFile = require("../utils/environment-config.json")
const endpointFile = require("../utils/url.json")
const supertest = require("supertest")

const clientId = process.env.CLIENT
const appName = process.env.APP_NAME
const environment = process.env.ENV

const token = clientFile[clientId][environment]['token']
const createChannel = endpointFile['channels']['createChannel']
const updateChannel = endpointFile['channels']['updateChannel']
const getChannel = endpointFile['channels']['getChannel']

const assert = chai.assert

const request = supertest.agent(environmentFile[appName][environment] + clientId)

describe('Exercicios de backEnd', () => {

    let repetido;

    it("Exercício 1", async () => {

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

        await request.post(createChannel)
            .auth(clientId, token)
            .send(bodyRequest)
            .expect(res => {
                assert.equal(res.status, 400)
                assert.equal(res.body.message, "One or more fields are invalid")
                assert.equal(res.body.errors, "thresholdType must be in { \"INCREMENTAL\", \"PRIORITY\" }")
            })
    })

    it("Exercício 2", async () => {

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


        await request.post(createChannel)
            .auth(clientId, token)
            .send(bodyRequest)
            .expect(res => {
                assert.equal(res.status, 400)
                assert.equal(res.body.message, "One or more fields are invalid")
                assert.equal(res.body.errors, "Must have keys { \"clientId\", \"channelId\", \"stockThreshold\", \"thresholdType\", \"stockTypes\" }")
            })

    })

    it("Exercício 3", async () => {

        let bodyRequest =
        {
            "clientId": clientId,
            "channelId": "gap" + Math.random() * 9999999 + 1111111,
            "stockThreshold": 3,
            "thresholdType": "INCREMENTAL",
            "stockTypes": [
                "PHYSICAL",
                "PRESALE"
            ]
        }

        repetido = bodyRequest

        await request.post(createChannel)
            .auth(clientId, token)
            .send(bodyRequest)
            .expect(res => {
                assert.equal(res.status, 201)
            })

    })

    it("Exercício 4", async () => {

        let bodyRequest = repetido

        await request.post(createChannel)
            .auth(clientId, token)
            .send(bodyRequest)
            .expect(res => {
                assert.equal(res.status, 409)
                assert.equal(res.body.error, "Channel already exists")
            })

    })

    it("Exercício 5", async () => {

        let perpage = '5'
        let firstChannelId = "0.10525908730315314"

        await request.get(createChannel + "?perpage=" + perpage)
            .auth(clientId, token)
            .expect(res => {
                assert.equal(res.status, 200)
                assert.equal(res.body[0].channelId, firstChannelId)
                assert.include(res.headers, { "x-paginate-page-size": perpage })

            })
    })

    it("Exercício 6", async () => {

        await request.get(getChannel + "0")
            .auth(clientId, token)
            .expect(res => {
                assert.equal(res.status, 404)
                assert.equal(res.body.error, "Channel not found with clientId '" + clientId + "' and channelId '0'")
            })

    })

    it("Exercício 7", async () => {

        await request.get(getChannel + repetido.channelId)
            .auth(clientId, token)
            .expect(res => {
                assert.equal(res.status, 200)
                assert.equal(res.body.clientId, repetido.clientId)
                assert.equal(res.body.channelId, repetido.channelId)
                assert.equal(res.body.stockThreshold, repetido.stockThreshold)
                assert.equal(res.body.thresholdType, repetido.thresholdType)
                assert.equal(res.body.stockTypes[0], repetido.stockTypes[0])
                assert.equal(res.body.stockTypes[1], repetido.stockTypes[1])
            })

    })

    it("Exercício 8", async () => {

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

        let wrongChannelId = "s0"

        await request.put(updateChannel + wrongChannelId)
            .auth(clientId, token)
            .send(bodyRequest)
            .expect(res => {
                assert.equal(res.status, 404)
                assert.equal(res.body.error, "Channel not found with clientId 'qa' and channelId '" + wrongChannelId + "'")
            })
    })

    it("Exercício 9", async () => {

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

        await request.put(updateChannel + repetido.channelId)
            .auth(clientId, token)
            .send(bodyRequest)
            .expect(res => {
                assert.equal(res.status, 400)
                assert.equal(res.body.message, "One or more fields are invalid")
                assert.equal(res.body.errors, "thresholdType must be in { \"INCREMENTAL\", \"PRIORITY\" }")
            })
    })

    it("Exercício 10", async () => {

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

        await request.put(updateChannel + repetido.channelId)
            .auth(clientId, token)
            .send(bodyRequest)
            .expect(res => {
                assert.equal(res.status, 400)
                assert.equal(res.body.message, "One or more fields are invalid")
                assert.equal(res.body.errors, "Must have keys { \"clientId\", \"channelId\", \"stockThreshold\", \"thresholdType\", \"stockTypes\" }")
            })
    })

    it("Exercício 11", async () => {

        repetido.thresholdType = "PRIORITY"

        await request.put(updateChannel + repetido.channelId)
            .auth(clientId, token)
            .send(repetido)
            .expect(res => {
                assert.equal(res.status, 200)
            })
    })

    it("Exercício 12", async () => {

        await request.get(updateChannel + repetido.channelId)
            .auth(clientId, token)
            .expect(res => {
                assert.equal(res.status, 200)
                assert.equal(res.body.clientId, repetido.clientId)
                assert.equal(res.body.channelId, repetido.channelId)
                assert.equal(res.body.stockThreshold, repetido.stockThreshold)
                assert.equal(res.body.thresholdType, repetido.thresholdType)
                assert.equal(res.body.stockTypes[0], repetido.stockTypes[0])
                assert.equal(res.body.stockTypes[1], repetido.stockTypes[1])
            })
    })
})
