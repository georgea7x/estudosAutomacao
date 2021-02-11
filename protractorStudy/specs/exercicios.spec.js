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

  /*beforeEach(() => {
    home.selectClient()
  })*/

  afterAll(() => {

    commons.killDriver()

  })

  it('Exercicio 1', () => {

    //acessando o a tela de cadastro de filiais
    filiais.menuAcess()

    //validar tooltip

    console.log(filiais.getTextTooltip())

  })

  it('Exercicio 2', () => {

    filiais.menuAcess()
    filiais.adicionarFilial()

    addFiliais.validLayoutAddFiliais()

  })

  it('Exercicio 3', async () => {

    filiais.menuAcess()
    filiais.adicionarFilial()

    addFiliais.createLocationFieldEmpty('nomeFantasia')
    await console.log(addFiliais.getTextAlert())
    //assert.strictEqual(addFiliais.getTextAlert(), "Informe o Nome fantasia")

  })

  it('Exercicio 4', () => {

filiais.menuAcess()
    filiais.adicionarFilial()

    addFiliais.createLocationFieldEmpty('bairro')
    assert.strictEqual(addFiliais.getTextAlert(), "Informe o Bairro")
    


  })

  it('Exercicio 5', () => {

    filiais.menuAcess()
    filiais.adicionarFilial()

    addFiliais.createLocationFieldEmpty('estado')
    assert.strictEqual(addFiliais.getTextAlert(), "Informe o Estado")

  })

  it('Exercicio 6', () => {

    filiais.menuAcess()
    filiais.adicionarFilial()

    addFiliais.createLocationFieldEmpty('id')
    assert.strictEqual(addFiliais.getTextAlert(), "Informe o ID")


  })

  it('Exercicio 7', () => {

filiais.menuAcess()
    filiais.adicionarFilial()

    addFiliais.createLocationFieldEmpty('cnpj')
    assert.strictEqual(addFiliais.getTextAlert(), "Informe o CNPJ")

  })

  it('Exercicio 8', () => {

filiais.menuAcess()
    filiais.adicionarFilial()

    addFiliais.createLocationFieldEmpty('razaoSocial')
    assert.strictEqual(addFiliais.getTextAlert(), "Informe a Razão social")

  })

  it('Exercicio 9', () => {

filiais.menuAcess()
    filiais.adicionarFilial()

    addFiliais.createLocationFieldEmpty('cep')
    assert.strictEqual(addFiliais.getTextAlert(), "Informe o CEP")

  })

  it('Exercicio 10', () => {

filiais.menuAcess()
    filiais.adicionarFilial()

    addFiliais.createLocationFieldEmpty('endereco')
    assert.strictEqual(addFiliais.getTextAlert(), "Informe o Endereço")

  })

  it('Exercicio 11', () => {

filiais.menuAcess()
    filiais.adicionarFilial()

    addFiliais.createLocationFieldEmpty('numero')
    assert.strictEqual(addFiliais.getTextAlert(), "Informe o Número")

  })

  it('Exercicio 12', () => {

let dados = {
  
  locationName = Faker.Company.companyName(),
  cnpj = "66208590000150",
  id = 

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
    assert.strictEqual(addFiliais.getTextAlert(), 'ID já existente')

  })

  it('Exercicio 14', () => {

    filiais.menuAcess()
    filiais.consultLocation(repetido.id, repetido.locationName + '@')
    assert.strictEqual(filiais.getResultEmpty(), 'Não encontramos nenhum registro.')

  })

  it('Exercicio 15', () => {

    filiais.menuAcess()
    filiais.consultLocationByName(repetido.locationName.substring(0, repetido.locationName.length - 3))
    assert.strictEqual(filiais.getResultConsult(), repetido.id + ' / ' + repetido.locationName)

  })

  it('Exercicio 16', () => {

    filiais.menuAcess()
    filiais.consultLocationByName(repetido.locationName)
    assert.strictEqual(filiais.getResultConsult(), repetido.id + ' / ' + repetido.locationName)

  })

  it('Exercicio 17', () => {

    filiais.menuAcess()
    filiais.consultLocationById(repetido.id)
    assert.strictEqual(filiais.getResultConsult(), repetido.id + ' / ' + repetido.locationName)

  })

  
})
