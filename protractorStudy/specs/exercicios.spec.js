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

  it('Exercicio 1', () => {

    //validar tooltip
    filiais.menuAcess()
    filiais.getTooltip()
  
  })

  it('Exercicio 2', () => {

    filiais.menuAcess()
    filiais.adicionarFilial()

    addFiliais.validLayoutAddFiliais()

  })

  it('Exercicio 3', () => {

    filiais.menuAcess();
    filiais.adicionarFilial();
    addFiliais.createLocationFieldEmpty('nomeFantasia');
    addFiliais.getValidTextRequiredFields('Informe o Nome fantasia.');
    addFiliais.closeAlertBox();
  })

  it('Exercicio 4', () => {

    filiais.menuAcess()
    filiais.adicionarFilial()

    addFiliais.createLocationFieldEmpty('bairro')
    addFiliais.getValidTextRequiredFields('Informe o Bairro.');
    addFiliais.closeAlertBox()

  })

  it('Exercicio 5', () => {

    filiais.menuAcess()
    filiais.adicionarFilial()

    addFiliais.createLocationFieldEmpty('estado')

    addFiliais.getValidTextRequiredFields('Informe o Estado.');
    addFiliais.closeAlertBox()
   
  })

  it('Exercicio 6', () => {

    filiais.menuAcess()
    filiais.adicionarFilial()

    addFiliais.createLocationFieldEmpty('id')
    addFiliais.getValidTextRequiredFields('Informe o ID.');
    addFiliais.closeAlertBox()

  })

  it('Exercicio 7', () => {

    filiais.menuAcess()
    filiais.adicionarFilial()

    addFiliais.createLocationFieldEmpty('cnpj')
    addFiliais.getValidTextRequiredFields('Informe o CNPJ.');
    addFiliais.closeAlertBox()

  })

  it('Exercicio 8', () => {

    filiais.menuAcess()
    filiais.adicionarFilial()

    addFiliais.createLocationFieldEmpty('razaoSocial')
    addFiliais.getValidTextRequiredFields('Informe a Razão social.');
    addFiliais.closeAlertBox()

  })

  it('Exercicio 9', () => {

    filiais.menuAcess()
    filiais.adicionarFilial()

    addFiliais.createLocationFieldEmpty('cep')
    addFiliais.getValidTextRequiredFields('Informe o CEP.');
    addFiliais.closeAlertBox()

  })

  it('Exercicio 10', () => {

    filiais.menuAcess()
    filiais.adicionarFilial()

    addFiliais.createLocationFieldEmpty('endereco')
    addFiliais.getValidTextRequiredFields('Informe o Endereço.');
    addFiliais.closeAlertBox()

  })

  it('Exercicio 11', () => {

    filiais.menuAcess()
    filiais.adicionarFilial()

    addFiliais.createLocationFieldEmpty('numero')

    addFiliais.getValidTextRequiredFields('Informe o Número.');
    addFiliais.closeAlertBox()

  })

  it('Exercicio 12', () => {

    let dados = {

      locationName: Faker.Company.companyName(),
      cnpj: "66208590000150",
      id: "gap" + Math.floor(Math.random() * 99999999 + 11111111)

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
    addFiliais.getValidTextRequiredFields('O ID informado já foi cadastrado.')
    addFiliais.closeAlertBox()
    

  })

  it('Exercicio 14', () => {

    filiais.menuAcess()
    filiais.consultLocation(repetido.id, repetido.locationName + '@')
    filiais.getValidTextTableEmpty('Não encontramos nenhum registro.');

  })

  it('Exercicio 15', () => {

    filiais.menuAcess()
    filiais.consultLocationByName(repetido.locationName.substring(0, repetido.locationName.length - 3))
    filiais.getValidTextReturnResult(repetido.id, repetido.locationName);

  })

  it('Exercicio 16', () => {

    filiais.menuAcess()
    filiais.consultLocationByName(repetido.locationName)
    filiais.getValidTextReturnResult(repetido.id, repetido.locationName);

  })

  it('Exercicio 17', () => {

    filiais.menuAcess()
    filiais.consultLocationById(repetido.id)
    filiais.getValidTextReturnResult(repetido.id, repetido.locationName);

  })


})
