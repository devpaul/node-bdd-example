var Cucumber = require('cucumber')
  , listener = Cucumber.Listener()
listener.hasHandlerForEvent = function() { return true }
listener.getHandlerForEvent = function() { return handler }

function handler(event, callback) {
    console.log('Event: ' + event.getName())
    callback()
}

module.exports = listener