exports.remote = { host: process.env.WDHOSTNAME || 'ondemand.saucelabs.com'
                 , port: process.env.WDPORT || 80
                 , username: process.env.WDUSERNAME || process.env.SAUCE_USERNAME
                 , accessKey: process.env.WDPASSWORD || process.env.SAUCE_ACCESS_KEY
                 }

exports.desired = { browserName: 'Chrome'
                  , tags: ['examples']
                  , name: 'This is an example node-bdd test'
                  }

exports.verbose = true

exports.verboseBrowser = false