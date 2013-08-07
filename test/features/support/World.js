var getSingletonBrowser = require('../support/commands/getSingletonBrowserCmd.js')
  , Cucumber = require('cucumber')
  , world

module.exports = worldFactory

function worldFactory(callback, cucumber) {
    if(!world)
        world = new World(callback, cucumber)
    else
        callback(world)
    return world
}

function World(callback, cucumber) {
    this.browser = undefined
    this.context = {}

    attachToCucumber.call(this, cucumber)
    initBrowser.call(this, cucumber, callback)
}

function attachToCucumber(cucumber) {
    var listener = Cucumber.Listener()
      , self = this

    listener.setHandlerForEvent('BeforeScenario', resetContext)
    cucumber.attachListener(listener)

    function resetContext(event, callback) {
        self.context = {}
        callback()
    }
}

function initBrowser(cucumber, callback) {
    var self = this

    getSingletonBrowser(cucumber).then(onBrowserInitialized).fail(onFail)

    function onBrowserInitialized(browser) {
        self.browser = browser
        callback(self)
    }

    function onFail(err) {
        throw err
    }
}