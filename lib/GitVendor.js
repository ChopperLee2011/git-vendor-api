/*
interface GitVendor
{
    function login();
    function getUser();
    function getOrg();
    function getRepo();
    function getOrgRepo();
    function getIssue();
    function getComment();
    function logout();
}
*/
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var GitVendor = function (ops) {
    this._apiUrl = ops.vendorHost || {};
    this._token = ops.token;
};
var request = function (method = "GET", path = "", data = "") {
    let token = this._token,
        agent = this.agent(),
        req = new XMLHttpRequest();
    return new Promise((resolve, reject) => {
        req.onreadystatechange = function () {
            if (req.readyState === 4) {
                if ([200, 304].indexOf(req.status) === -1) {
                    reject(req);
                } else {
                    resolve(req.responseText);
                }
            }
        };

        req.open(method, this._apiUrl + path);
        req.dataType = "json";
        req.setRequestHeader('Accept', 'application/json');
        req.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
        req.setRequestHeader('Authorization', token);
        req.send();
    });
}

GitVendor.prototype.login = function (path) {
    return this.request("GET", "/user");
};

GitVendor.prototype.getUser = function (path) {
    let path = "/user";
    return this.request("GET", path).then(function (res) {
    });
};

GitVendor.prototype.getOrg = function (path) {
    let path = "/user/orgs";
    return this.request("GET", path).then(function (res) {
        //console.log('getOrgs', res);
    });
};

GitVendor.prototype.getRepo = function (path) {
    let path = "/user/repos";
    return this.request("GET", path).then(function (res) {
    });
};

GitVendor.prototype.getOrgRepo = function (path, orgName) {
    let path = `/orgs/${orgName} / repos`;
    return this.request("GET", path).then(function (res) {
    });
};


module.expoorts = GitVendor;