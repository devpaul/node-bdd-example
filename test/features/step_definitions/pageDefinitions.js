var World = require('../support/World')
  , HomePage = require('../interfaces/Homepage.js')

function pageDefinitions() {
    this.World = World

    this.Given(/^I am on the homepage$/, gotoPage)
}

function gotoPage(callback) {
    var page = this.context.page = new HomePage(this.browser)
      , promise = page.visit()

    promise.then(function() { callback() })
           .fail(callback)
}

module.exports = pageDefinitions