var config = require('../config/testConfig.js')
  , wdPlugin = require('cucumber-wd-plugin')
  , eavesdropperPlugin = require('cucumber-eavesdropper-plugin')

function worldDefinition() {
    var browserPlugin = wdPlugin(config)

    this.registerListener(eavesdropperPlugin)
    this.registerListener(browserPlugin)

    this.Before(function(callback) {
        this.browser = browserPlugin.browser
        callback()
    })
}

module.exports = worldDefinition