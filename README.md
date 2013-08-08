# A Node BDD Example
Sure you want to join the magical pony ride that is BDD! But how?

This repository helps to answer that question entirely within the [nodejs] ecosystem.  I use [grunt] with the
[grunt-cucumber] task to drive [cucumber-js], our BDD/[Gherkin] framework, extended with the [cucumber-wd-plugin] and
driven with [wd], the nodejs [selenium] web driver, so [Chrome] terminates cleanly on [saucelabs].

It sounds complicated, but after the initial setup things are pretty straight-forward.

## Try it out
If you don't already have it installed you'll need [nodejs] and [grunt-cli] and a [selenium] server (I use [saucelabs]
for this). Feel free to [contact me][Twitter] if you'd like or [send me a pull request][repo].

You'll need to set the environment variables `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY`. Here's the too-cool-for-school
way:

```
    npm install
    SAUCE_USERNAME=<username> SAUCE_ACCESS_KEY=<access key> grunt test
```

If you have an issue setting environment variables you can set your username and access key directly in testConfig.js.
Then you can just run
```
    npm install
    grunt test
```

## Overview
If you ran the example then you should see an automated Google search.  This scenerio is defined in the
file `Search.feature` using language that you might typically see a user use to explain what they are doing.

Cucumber takes that and uses implemented steps under `step_definitions` to map the natural language feature description
to some code.  It lets people and computers each speak their own language and makes me wonder why computer courses
didn't count for foreign language credit.

There is some magic involved with the `World` stuff, which [cucumber-js] explains better than I would. But it is
there to store your context while your scenerio is executing.

And `interfaces` has all of your page, well, interfaces.  Our UI interfaces are separated from our step implementations
to reduce the brittleness of tests.  A lot of people have made a lot of money writing a lot of books about this stuff.

## A Tiny Catch
If you took a look at `package.json` you might notice I am using a forked [cucumber-js].  To get everything to work
with [grunt] I needed a way to hook into the runtime's event dispatcher.  Don't worry, there's a [pull request][pull] out
there.

[wd]: https://github.com/admc/wd
[cucumber-js]: https://github.com/cucumber/cucumber-js
[grunt]: http://gruntjs.com/
[grunt-cucumber]: https://github.com/s9tpepper/grunt-cucumber-js
[cucumber-wd-plugin]: https://github.com/devpaul/cucumber-wd-plugin
[saucelabs]: https://saucelabs.com
[selenium]: http://docs.seleniumhq.org/
[nodejs]: http://nodejs.org/
[Chrome]: https://code.google.com/p/selenium/wiki/ChromeDriver
[Gherkin]: https://github.com/cucumber/cucumber/wiki/Gherkin
[grunt-cli]: http://gruntjs.com/getting-started
[Twitter]: https://twitter.com/developerPaul
[repo]: https://github.com/devpaul/node-bdd-example
[pull]: https://github.com/cucumber/cucumber-js/pull/130