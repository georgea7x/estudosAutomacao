const { element } = require('protractor')

const envUrl = require('../../utils/configCreator.js')
const Actions = require('../components/actions.js')
const CreateLocationFile = require('../../utils/creationData/createLocation.json')

// campos
const consultID = element(by.xpath('//*/a[text()="Priorização de filiais"]'))
const tooltip = element(by.xpath('//*/i[@class="fa fa-info-circle tooltip-icon"]'))
const salvar = element(by.xpath('//*/a[text()="Cadastro de filiais"]'))
const status = element(by.xpath('//*/label[@for="toggleundefined"]'))
const nomeFantasia = element(by.xpath('//*/input[@name="tradingName"]'))
const id = element(by.xpath('//*/input[@name="id"]'))
const apelido = element(by.xpath('//*/input[@name="alias"]'))
const cnpj = element(by.xpath('//*/input[@name="documents.cnpj"]'))
const razaoSocial = element(by.xpath('//*/input[@name="description"]'))
const marca = element(by.xpath('//*/div[@id="rw_6_input"]/div/span'))
const setMarca = element(by.xpath('//*[@id="rw_6_listbox"]/li[6]'))
const regional = element(by.xpath('//*/div[@id="rw_7_input"]/div/span'))
const setRegional = element(by.xpath('//*[@id="rw_7_listbox"]/li[2]'))
const tipo = element(by.xpath('//*/div[@id="rw_8_input"]/div/span'))
const setTipo = element(by.xpath('//*[@id="rw_8_listbox"]/li[2]'))
const cep = element(by.xpath('//*/input[@name="address.zip"]'))
const endereco = element(by.xpath('//*/input[@name="address.address1"]'))
const numero = element(by.xpath('//*/input[@name="address.number"]'))
const complemento = element(by.xpath('//*/input[@name="address.address2"]'))
const bairro = element(by.xpath('//*/input[@name="address.neighbourhood"]'))
const cidade = element(by.xpath('//*/input[@name="address.city"]'))
const estado = element(by.xpath('//*/input[@name="address.state"]'))
const pais = element(by.xpath('//*/input[@name="address.country"]'))
const telDDI = element(by.xpath('//*/input[@name="address.telephone.countryCode"]'))
const tel = element(by.xpath('//*/input[@name="address.telephone.number"]'))
const latitude = element(by.xpath('//*/input[@name="latitude"]'))
const longitude = element(by.xpath('//*/input[@name="longitude"]'))
const prazoManuseio = element(by.xpath('//*/input[@name="handlingTime"]'))
const taxaManuseio = element(by.xpath('//*/input[@name="handlingTax"]'))
const typeLocation = element(by.xpath('//*[@id="react-tabs-1"]/div/div[2]/div[1]/form/div[10]/div/div/div/label[2]'))

const habilitVale = element(by.xpath('//*/label[@for="toggleallowVoucher"]'))
const confirmCreate = element(by.xpath('//*/label[@for="toggleallowVoucher"]'))
const alertText = element(by.xpath('//*/input[@role="alert"][@class="Toastify__toast-body"]'))
const alertButton = element(by.xpath('//div[@class="modal-footer"]/button'))



const action = new Actions()

class Filiais {
  constructor () {
  }

    getTextTooltip () {
    return action.getText(tooltip)
  }

  createLocation (name, Cnpj, Id) {

    action.keysSend(nomeFantasia, name)
    action.keysSend(id, Id)
    action.keysSend(apelido, name)
    action.keysSend(cnpj, Cnpj)
    action.keysSend(razaoSocial, name)
    action.selectOption(marca, setMarca)
    action.selectOption(regional, setRegional)
    action.selectOption(tipo, setTipo)
    action.keysSend(cep, CreateLocationFile['cep'])
    action.keysSend(endereco, CreateLocationFile['endereco'])
    action.keysSend(numero, CreateLocationFile['numero'])
    action.keysSend(complemento, CreateLocationFile['complemento'])
    action.keysSend(bairro, CreateLocationFile['bairro'])
    action.keysSend(cidade, CreateLocationFile['cidade'])
    action.keysSend(estado, CreateLocationFile['estado'])
    action.keysSend(pais, CreateLocationFile['pais'])
    action.keysSend(telDDI, CreateLocationFile['telDDI'])
    action.keysSend(tel, CreateLocationFile['tel'])
    action.keysSend(latitude, CreateLocationFile['latitude'])
    action.keysSend(longitude, CreateLocationFile['longitude'])
    action.keysSend(prazoManuseio, CreateLocationFile['prazoManuseio'])
    action.keysSend(taxaManuseio, CreateLocationFile['taxaManuseio'])
    action.clicks(typeLocation)
  
    action.clicks(salvar)
    
  }

  confirmCreateLocation(){

    action.waitElementVisibility(confirmCreate)
    action.waitElementVisibility(consultID)

  }
  
}

module.exports = Filiais
