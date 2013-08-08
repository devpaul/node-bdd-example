var config = require('../../config/testConfig.js')
  , wdPlugin = require('cucumber-wd-plugin')
  , initPromise

function getSingletonBrowserCmd(cucumber) {
    if(!initPromise)
        initPromise = wdPlugin(cucumber, config)

    return initPromise
}

module.exports = getSingletonBrowserCmd