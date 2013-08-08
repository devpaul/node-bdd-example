var Page = require('./Page')
  , Q = require('q')
  , RESULT_STATS_ID = 'resultStats'

function ResultsPage(browser) {
    Page.call(this, browser)
}

ResultsPage.prototype = Object.create(Page.prototype)
ResultsPage.prototype.isBrowserOnPage = isBrowserOnPage

function isBrowserOnPage() {
    var defer = Q.defer()

    this._elementById(defer, RESULT_STATS_ID, this._resolve(defer))

    return defer.promise
}

module.exports = ResultsPage

