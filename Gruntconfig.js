var config = { jshint: getJshintOptions()
             , cucumberjs: getCucumberOptions()
             , devserver: getDevserverOptions()
             }

function getDevserverOptions() {
    return { options: { base: './test/assets'
                      , async: false
                      , port: 8888
                      }
           }
}

function getJshintOptions() {
    return { options: { jshintrc: '.jshintrc' }
           , all: { src: ['Gruntfile.js', 'test/**/*.js'] }
           }
}

function getCucumberOptions() {
    return { files: './test/features'
           , options: { steps: "./test/features/step_definitions"
                      , format: 'pretty'
                      }
           }
}

module.exports = config