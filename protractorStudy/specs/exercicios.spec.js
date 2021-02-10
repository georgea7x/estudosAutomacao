const Login = require('../page-objects/login')
const Home = require('../page-objects/home')
const Filiais = require('../page-objects/filiais/filiais')
const AddFiliais = require('../page-objects/filiais/cadastroFilial')

describe('Exercicios Front-end', () => {
  const login = new Login()
  const home = new Home()
  const filiais = new Filiais()
  const addFiliais = new AddFiliais()

  beforeAll(() => {
    login.visit()
    login.logar()
  })

  beforeEach(() => {
    home.selectClient()
  })
  /*
    afterAll(() => { 
  
  
    })
  
  it('Exercicio 1', () => {

    //acessando o a tela de cadastro de filiais
    filiais.menuAcess()
    filiais.adicionarFilial()

    //validar tooltip

    filiais.getTextTooltip
    
  })*/

  it('Exercicio 2', () => {
    let locationName = "teste teste"
    let cnpj = "66208590000150"
    let id = "785teste"

    //acessando o a tela de cadastro de filiais
    filiais.menuAcess()
    filiais.adicionarFilial()

    addFiliais.createLocation(locationName, id, cnpj)

  })/*

  it('Exercicio 3', () => {

  })

  it('Exercicio 4', () => {

  })

  it('Exercicio 5', () => {

  })

  it('Exercicio 6', () => {

  })

  it('Exercicio 7', () => {

  })

  it('Exercicio 8', () => {

  })

  it('Exercicio 9', () => {

  })

  it('Exercicio 10', () => {

  })

  it('Exercicio 11', () => {

  })

  it('Exercicio 12', () => {

  })

  it('Exercicio 13', () => {

  })

  it('Exercicio 14', () => {

  })

  it('Exercicio 15', () => {

  })

  it('Exercicio 16', () => {

  })

  it('Exercicio 17', () => {

  })

  it('Exercicio 18', () => {

  })*/
})
