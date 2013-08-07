var baseConfig = require('../config/baseConfig.js')
  , Q = require('q')

function HomePage(browser) {
    this.browser = browser
    this.url = baseConfig.baseurl
}

HomePage.url = baseConfig.baseurl
HomePage.prototype.visit = visit

function visit() {
    var self = this
      , defer = Q.defer()

    this.browser.get(this.url, onGet)

    function onGet(err) {
        if(err)
            defer.reject(err)
        else
            defer.resolve(self)
    }

    return defer.promise
}

module.exports = HomePage