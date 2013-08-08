var Q = require('q')

function Page(browser, url) {
    this.browser = browser
    this.url = url
}

Page.prototype._elementById = elementById
Page.prototype._safeCallback = safeCallback
Page.prototype._safeResolve = safeResolve
Page.prototype._resolve = resolve
Page.prototype._visit = visit
Page.prototype._click = click

function visit(url) {
    var defer = Q.defer()

    this.browser.get(url, this._safeResolve(defer))

    return defer.promise
}

function elementById(defer, id, callback) {
    var self = this

    this.browser.elementById(id, this._safeCallback(defer, onElementFound))

    function onElementFound(element) {
        self.element = element
        callback(element)
    }
}

function click(defer, id, callback) {
    var self = this

    this._elementById(defer, id, onElementFound)

    function onElementFound(element) {
        element.click(self._safeCallback(defer, callback))
    }
}

function safeCallback(defer, callback) {
    var self = this

    return function(err) {
        if(err)
            defer.reject(err)
        else
            callback.apply(self, Array.prototype.slice.call(arguments, 1))
    }
}

function safeResolve(defer) {
    var self = this

    return function(err) {
        if(err)
            defer.reject(err)
        else
            defer.resolve(self)
    }
}

function resolve(defer) {
    var self = this

    return function() {
        defer.resolve(self)
    }
}

module.exports = Page