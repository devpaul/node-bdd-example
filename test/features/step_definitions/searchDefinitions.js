var World = require('../support/World')

function searchDefinitions() {
    this.World = World

    this.When(/^I perform a search$/, function(callback) {
        // express the regexp above with the code you wish you had
        callback.pending();
    });

    this.Then(/^I see the search results page$/, function(callback) {
        // express the regexp above with the code you wish you had
        callback.pending();
    });
}

module.exports = searchDefinitions