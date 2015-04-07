const test = require('tape'),
    gitVFactory = require('../lib/gitVFactory'),
    config = require('./config');

test("Github API", function (t) {
    var timeout = setTimeout(function () {
        t.fail();
    }, 100000);
    var github = gitVFactory.create('github',
        config.github
    );

    t.test('get user', function (q) {
        github.getUser().then(function (res) {
            q.pass();
            q.end();
        }).catch(function (err) {
            t.error(err);
        });
    });
    t.test('get orgs', function (q) {
        github.getOrgs().then(function (res) {
            q.pass();
            q.end();
        }).catch(function (err) {
            t.error(err);
        });
    });
    t.test('get repos', function (q) {
        github.getRepo().then(function (res) {
            q.pass();
            q.end();
        }).catch(function (err) {
            t.error(err);
        });
    });

    clearTimeout(timeout);
    t.end();

});