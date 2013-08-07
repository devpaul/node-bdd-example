var config = require('../../config/testConfig.js')
  , wdPlugin = require('cucumber-wd-plugin')
  , Cucumber = require('cucumber')
  , initPromise

function getSingletonBrowserCmd(cucumber) {
    if(!initPromise) {
        initPromise = wdPlugin(cucumber, config)
    }

    return initPromise
}

function verboseCucumberEvents(cucumber) {
    var listener = Cucumber.Listener()

    listener.hasHandlerForEvent = function() { return true }
    listener.getHandlerForEvent = function() { return logEvent }
    cucumber.attachListener(listener)
}

function logEvent(event, callback) {
    console.log(event.getName())
    callback()
}

module.exports = getSingletonBrowserCmd