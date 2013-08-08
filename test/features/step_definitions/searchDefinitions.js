var World = require('../support/World')
  , ResultsPage = require('../interfaces/ResultsPage.js')

function searchDefinitions() {
    this.World = World

    this.When(/^I perform a search$/, function(callback) {
        var performPromise = this.context.page.search('google')

        performPromise.then(function() { callback() }).fail(callback)
    });

    this.Then(/^I see the search results page$/, function(callback) {
        var resultsPage = new ResultsPage(this.browser)
          , promise = resultsPage.isBrowserOnPage()

        promise.then(function() { callback() }).fail(callback)
    });
}

module.exports = searchDefinitions