//import GitVendor from "./GitVendor";
//export default
//class GitHub extends GitVendor {
//    constructor(token, vendorHost = "https://api.github.com") {
//        super('token ' + token, vendorHost);
//    }
//}
const GitVendor = require('./GitVendor');
var Github = new function () {
};

Github.prototype = Object.create(GitVendor);

Github.prototype.login = function () {
    return this.request("GET", "/user");
};

Github.prototype.getUser = function () {
    let path = "/user";
    return this.request("GET", path).then(function (res) {
    });
};

Github.prototype.getOrg = function () {
    let path = "/user/orgs";
    return this.request("GET", path).then(function (res) {
        //console.log('getOrgs', res);
    });
};

Github.prototype.getRepo = function () {
    let path = "/user/repos";
    return this.request("GET", path).then(function (res) {
    });
};

Github.prototype.getOrgRepo = function (orgName) {
    let path = `/orgs/${orgName} / repos`;
    return this.request("GET", path).then(function (res) {
    });
};
module.exports = Github;

