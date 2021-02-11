const { browser } = require("protractor")


class Commons {
  constructor () {
  }

killDriver(){

    browser.close()
    
}


}

module.exports = Commons