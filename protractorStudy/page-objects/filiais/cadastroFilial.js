const { element } = require('protractor')

const envUrl = require('../../utils/configCreator.js')
const Actions = require('../components/actions.js')
const CreateLocationFile = require('../../utils/creationData/createLocation.json')

// campos

const consultID = element(by.xpath('//*/a[text()="Priorização de filiais"]'))
const tooltip = element(by.xpath('//*/i[@class="fa fa-info-circle tooltip-icon"]'))
const salvar = element(by.xpath('//*/button[@class="btn btn-primary"]'))
const status = element(by.xpath('//*/label[@for="toggleundefined"]'))
const nomeFantasia = element(by.xpath('//*/input[@name="tradingName"]'))
const id = element(by.xpath('//*/input[@name="id"]'))
const apelido = element(by.xpath('//*/input[@name="alias"]'))
const cnpj = element(by.xpath('//*/input[@name="documents.cnpj"]'))
const razaoSocial = element(by.xpath('//*/input[@name="description"]'))
const marca = element(by.xpath('//*/label[text()="Marca"]/../div/div/span'))
const setMarca = element(by.xpath('//*/label[text()="Marca"]/../div/div/div/div[@class="rw-popup"]/ul/li[2]'))
const regional = element(by.xpath('//*/label[text()="Regional"]/../div/div/span'))
const setRegional = element(by.xpath('//*/label[text()="Regional"]/../div/div/div/div[@class="rw-popup"]/ul/li[2]'))
const tipo = element(by.xpath('//*/label[text()="Tipo"]/../div/div/span'))
const setTipo = element(by.xpath('//*/label[text()="Tipo"]/../div/div/div/div[@class="rw-popup"]/ul/li[2]'))
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
const prazoManuseio = element(by.xpath('//*/input[@name="handlingTax"]/../../../div/div//input[@name="handlingTime"]'))
const taxaManuseio = element(by.xpath('//*/input[@name="handlingTax"]'))
const typeLocation = element(by.xpath('//*[@id="react-tabs-1"]/div/div[2]/div[1]/form/div[10]/div/div/div/label[2]'))
const costCenter = element(by.xpath("//*/input[@name='costCenter']"))
const checkAccount = element(by.xpath("//*/input[@name='checkAccount']"))
const businessCode = element(by.xpath("//*/input[@name='businessCode']"))

const habilitVale = element(by.xpath('//*/label[@for="toggleallowVoucher"]'))
const confirmCreate = element(by.xpath('//*/div[@class="Toastify__toast Toastify__toast--success toast toast-success"]'))
const alertText = element(by.xpath('//*/div[@class="modal-body"]/div'))
const alertButton = element(by.xpath('//div[@class="modal-footer"]/button'))
const fieldEmptyColor = element(by.xpath('//*/div[@class="form-group has-error"]'))


const action = new Actions()

class Filiais {
  constructor() {
  }

  validLayoutAddFiliais() {

    action.getEnabled(nomeFantasia)
    action.getEnabled(id)
    action.getEnabled(apelido)
    action.getEnabled(cnpj)
    action.getEnabled(razaoSocial)
    action.getEnabled(marca)
    action.getEnabled(regional)
    action.getEnabled(tipo)
    action.getEnabled(cep)
    action.getEnabled(endereco)
    action.getEnabled(numero)
    action.getEnabled(complemento)
    action.getEnabled(bairro)
    action.getEnabled(cidade)
    action.getEnabled(estado)
    action.getEnabled(pais)
    action.getEnabled(telDDI)
    action.getEnabled(tel)
    action.getEnabled(latitude)
    action.getEnabled(longitude)
    action.getEnabled(prazoManuseio)
    action.getEnabled(taxaManuseio)
    action.getEnabled(costCenter)
    action.getEnabled(checkAccount)
    action.getEnabled(businessCode)
    action.getEnabled(typeLocation)
    action.getEnabled(salvar)

  }


  getTextTooltip() {
    return action.getAtribute(tooltip, 'data-tip')
  }

  createLocation(name, Cnpj, Id) {

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
    action.keysSend(costCenter, CreateLocationFile['costCenter'])
    action.keysSend(checkAccount, CreateLocationFile['checkAccount'])
    action.keysSend(businessCode, CreateLocationFile['businessCode'])

    action.clicks(typeLocation)

    action.clicks(salvar)

  }

  createLocationFieldEmpty(campo) {

    let arquivo = CreateLocationFile

    arquivo[campo] = ''

    action.keysSend(nomeFantasia, arquivo['nomeFantasia'])
    action.keysSend(id, arquivo['id'])
    action.keysSend(apelido, arquivo['apelido'])
    action.keysSend(cnpj, arquivo['cnpj'])
    action.keysSend(razaoSocial, arquivo['razaoSocial'])
    action.selectOption(marca, setMarca)
    action.selectOption(regional, setRegional)
    action.selectOption(tipo, setTipo)
    action.keysSend(cep, arquivo['cep'])
    action.keysSend(endereco, arquivo['endereco'])
    action.keysSend(numero, arquivo['numero'])
    action.keysSend(complemento, arquivo['complemento'])
    action.keysSend(bairro, arquivo['bairro'])
    action.keysSend(cidade, arquivo['cidade'])
    action.keysSend(estado, arquivo['estado'])
    action.keysSend(pais, arquivo['pais'])
    action.keysSend(telDDI, arquivo['telDDI'])
    action.keysSend(tel, arquivo['tel'])
    action.keysSend(latitude, arquivo['latitude'])
    action.keysSend(longitude, arquivo['longitude'])
    action.keysSend(prazoManuseio, arquivo['prazoManuseio'])
    action.keysSend(taxaManuseio, arquivo['taxaManuseio'])
    action.keysSend(costCenter, arquivo['costCenter'])
    action.keysSend(checkAccount, arquivo['checkAccount'])
    action.keysSend(businessCode, arquivo['businessCode'])

    action.clicks(typeLocation)

    action.waitElementVisibility(fieldEmptyColor)

    action.clicks(salvar)

  }

  confirmCreateLocation() {

    action.waitElementVisibility(confirmCreate)
    action.waitElementVisibility(consultID)

  }

  getTextAlert() {

    action.waitElementVisibility(alertText)
    let text = action.getTexts(alertText)
    action.clicks(alertButton)
    return text

  }




}

module.exports = Filiais
