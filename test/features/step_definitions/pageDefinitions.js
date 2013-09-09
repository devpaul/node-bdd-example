var HomePage = require('../interfaces/Homepage.js')

function pageDefinitions() {
    this.Given(/^I am on the homepage$/, gotoPage)
}

function gotoPage(callback) {
    var page = this.page = new HomePage(this.browser)
      , promise = page.visit()

    promise.then(function() { callback() })
           .fail(callback)
}

module.exports = pageDefinitions