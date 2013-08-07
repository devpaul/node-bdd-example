var World = require('../support/World')

function pageDefinitions() {
    this.World = World

    this.Given(/^I am on the homepage$/, function(callback) {
        // express the regexp above with the code you wish you had
        callback.pending();
    })
}

module.exports = pageDefinitions