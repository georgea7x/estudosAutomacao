const { element } = require("protractor")
const protractor = require('protractor-helper')

const locationSearch = element(by.id('locationSearch'))
let optionLocation = element(by.xpath())


class SetLocation {

    constructor(){

    }

    clickFieldLocationId(locationId){

        optionLocation = element(by.xpath('//ul[@class="location-list"]/li/a/span[text()="' + locationId + ']/..'))
        optionLocation.click()

    }

    setLocation(locationId){

        protractor.waitForElementVisibility(locationSearch)
        locationSearch.sendKeys(locationId)
        this.clickFieldLocationId(locationId)

    }

}

module.exports = SetLocation