var Page = require('./Page')
  , baseConfig = require('../config/baseConfig.js')
  , Q = require('q')
  , SEARCH_BAR_ID = 'gbqfq'
  , SEARCH_BUTTON_ID = 'gbqfb'


function HomePage(browser) {
    Page.call(this, browser, HomePage.url)
}

HomePage.url = baseConfig.baseurl

HomePage.prototype = Object.create(Page.prototype)
HomePage.prototype.visit = visit
HomePage.prototype.search = search

function visit() {
    return this._visit(this.url)
}

function search(text) {
    var self = this
      , defer = Q.defer()

    this._elementById(defer, SEARCH_BAR_ID, onFoundSearchBar)

    function onFoundSearchBar(element) {
        element.type(text, self._safeCallback(defer, onTextTyped))
    }

    function onTextTyped() {
        self._click(defer, SEARCH_BUTTON_ID, self._resolve(defer))
    }

    return defer.promise
}

module.exports = HomePage