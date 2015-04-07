const test = require('tape'),
    gitVFactory = require('../lib/gitVFactory'),
    config = require('./config');

var github = gitVFactory.create('github', config.github);
github.getUser().then(function (val) {
    console.log(val);
}).catch(function (err) {
    console.info('err', err.status);
});