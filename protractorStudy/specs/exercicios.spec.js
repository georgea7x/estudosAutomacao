const Login = require('../page-objects/login')
const Home = require('../page-objects/home')
const Filiais = require('../page-objects/filiais/filiais')
const AddFiliais = require('../page-objects/filiais/cadastroFilial')
const Commons = require('../utils/commons')
const Faker = require('Faker')
const assert = require('assert')

describe('Exercicios Front-end', () => {
  const login = new Login()
  const home = new Home()
  const filiais = new Filiais()
  const addFiliais = new AddFiliais()
  const commons = new Commons()

  let repetido

  beforeAll(() => {
    login.visit()
    login.logar()
  })

  it('Exercicio 1', async () => {


    //validar tooltip
    filiais.menuAcess()
    await assert.equal(filiais.getTooltip().getText(), 'Lista de lojas ou CDs cadastrados no OMS como filiais, ou seja, centros de processamento de pedido com a possibilidade de Ship from Store e/ou Pickup in Store e/ou Ship to Store configuradas.')

  })/*

  it('Exercicio 2', () => {

    filiais.menuAcess()
    filiais.adicionarFilial()

    addFiliais.validLayoutAddFiliais()

  })

  it('Exercicio 3', () => {

    filiais.menuAcess()
    filiais.adicionarFilial()

    addFiliais.createLocationFieldEmpty('nomeFantasia')
    addFiliais.closeAlertBox()
    assert.equal(addFiliais.getTextAlert(), "Informe o Nome fantasia")

  })

  it('Exercicio 4', () => {

    filiais.menuAcess()
    filiais.adicionarFilial()

    addFiliais.createLocationFieldEmpty('bairro')
    addFiliais.closeAlertBox()
    assert.equal(addFiliais.getTextAlert(), "Informe o Bairro")

  })

  it('Exercicio 5', () => {

    filiais.menuAcess()
    filiais.adicionarFilial()

    addFiliais.createLocationFieldEmpty('estado')
    addFiliais.closeAlertBox()
    assert.equal(addFiliais.getTextAlert(), "Informe o Estado")

  })

  it('Exercicio 6', () => {

    filiais.menuAcess()
    filiais.adicionarFilial()

    addFiliais.createLocationFieldEmpty('id')
    addFiliais.closeAlertBox()
    assert.equal(addFiliais.getTextAlert(), "Informe o ID")

  })

  it('Exercicio 7', () => {

    filiais.menuAcess()
    filiais.adicionarFilial()

    addFiliais.createLocationFieldEmpty('cnpj')
    addFiliais.closeAlertBox()
    assert.equal(addFiliais.getTextAlert(), "Informe o CNPJ")

  })

  it('Exercicio 8', () => {

    filiais.menuAcess()
    filiais.adicionarFilial()

    addFiliais.createLocationFieldEmpty('razaoSocial')
    addFiliais.closeAlertBox()
    assert.equal(addFiliais.getTextAlert(), "Informe a Razão social")

  })

  it('Exercicio 9', () => {

    filiais.menuAcess()
    filiais.adicionarFilial()

    addFiliais.createLocationFieldEmpty('cep')
    addFiliais.closeAlertBox()
    assert.equal(addFiliais.getTextAlert(), "Informe o CEP")

  })

  it('Exercicio 10', () => {

    filiais.menuAcess()
    filiais.adicionarFilial()

    addFiliais.createLocationFieldEmpty('endereco')
    addFiliais.closeAlertBox()
    assert.equal(addFiliais.getTextAlert(), "Informe o Endereço")

  })

  it('Exercicio 11', () => {

    filiais.menuAcess()
    filiais.adicionarFilial()

    addFiliais.createLocationFieldEmpty('numero')
    addFiliais.closeAlertBox()
    assert.equal(addFiliais.getTextAlert(), "Informe o Número")

  })

  it('Exercicio 12', () => {

    let dados = {

      locationName: Faker.Company.companyName(),
      cnpj: "66208590000150",
      id: "gap" + Faker.random.number(6)

    }

    repetido = dados

    //acessando o a tela de cadastro de filiais

    filiais.menuAcess()
    filiais.adicionarFilial()

    addFiliais.createLocation(dados.locationName, dados.cnpj, dados.id)
    addFiliais.confirmCreateLocation()

  })

  it('Exercicio 13', () => {


    //acessando o a tela de cadastro de filiais
    filiais.menuAcess()
    filiais.adicionarFilial()

    addFiliais.createLocation(repetido.locationName, repetido.cnpj, repetido.id)
    addFiliais.getTextAlert()
    assert.equal(addFiliais.getTextAlert(), 'O ID informado já foi cadastrado.')

  })

  it('Exercicio 14', () => {

    filiais.menuAcess()
    filiais.consultLocation(repetido.id, repetido.locationName + '@')
    assert.equal(filiais.getResultEmpty(), 'Não encontramos nenhum registro.')

  })

  it('Exercicio 15', () => {

    filiais.menuAcess()
    filiais.consultLocationByName(repetido.locationName.substring(0, repetido.locationName.length - 3))
    assert.equal(filiais.getResultConsult(), repetido.id + ' / ' + repetido.locationName)

  })

  it('Exercicio 16', () => {

    filiais.menuAcess()
    filiais.consultLocationByName(repetido.locationName)
    assert.equal(filiais.getResultConsult(), repetido.id + ' / ' + repetido.locationName)

  })

  it('Exercicio 17', () => {

    filiais.menuAcess()
    filiais.consultLocationById(repetido.id)
    assert.equal(filiais.getResultConsult(), repetido.id + ' / ' + repetido.locationName)

  })

*/
})
