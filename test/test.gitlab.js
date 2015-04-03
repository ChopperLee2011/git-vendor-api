import test from 'tape';
import Gitlab from '../lib/GitLab';
import test_user from './user.json';

test("Github API", function (t) {
    var timeout = setTimeout(function () {
        t.fail();
    }, 100000);
    var gitlab = new Gitlab(
        test_user.GITHUB_TOKEN
    );

    t.test('get user', function (q) {
        gitlab.getUser().then(function (res) {
            q.pass();
            q.end();
        }).catch(function (err) {
            t.error(err);
        });
    });
    t.test('get orgs', function (q) {
        gitlab.getOrgs().then(function (res) {
            q.pass();
            q.end();
        }).catch(function (err) {
            t.error(err);
        });
    });
    t.test('get repos', function (q) {
        gitlab.getRepo().then(function (res) {
            q.pass();
            q.end();
        }).catch(function (err) {
            t.error(err);
        });
    });

    clearTimeout(timeout);
    t.end();

});