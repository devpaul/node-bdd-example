var config = require('../config/testConfig.js')
  , wdPlugin = require('cucumber-wd-plugin')
  , promiscuousListener = require('../support/PromiscuousListener.js')
  , globalBrowser

function worldDefinition() {
    var supportCodeHelper = this

    this.registerListener(promiscuousListener)

    this.BeforeFeatures(function(event, callback) {
        var promise = wdPlugin(supportCodeHelper, config)

        promise.then(onBrowserInitialized).fail(onFailure)

        function onBrowserInitialized(browser) {
            globalBrowser = browser
            callback()
        }

        function onFailure(err) {
            callback(err)
        }
    })

    this.Before(function(callback) {
        this.browser = globalBrowser
        callback()
    })
}

module.exports = worldDefinition