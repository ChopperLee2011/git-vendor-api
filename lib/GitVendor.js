var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
export default class GitVendor {
    constructor(token, vendorHost = "") {
        this._apiUrl = vendorHost;
        this._token = token;
        this._repo = {};
        this._user = {};
    }
    agent() {

    }

    scope() {

    }

    get apiUrl() {
        return this.apiUrl.toLowerCase();
    }

    request(method = "GET", path = "", data = "") {
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

    login() {
        return this.request("GET", "/user");
    }

    getUser() {
        let path = "/user";
        return this.request("GET", path).then(function (res) {
            //console.log('getUser', res);
        });
    }

    getOrgs() {
        let path = "/user/orgs";
        return this.request("GET", path).then(function (res) {
            //console.log('getOrgs', res);
        });
    }

    getRepo() {
        let path = "/user/repos";
        return this.request("GET", path).then(function (res) {
            //console.log('getRepo', res);
        });
    }

    getOrgRepo(orgName) {
        let path = `/orgs/${orgName} / repos`;
        return this.request("GET", path).then(function (res) {
            //console.log('getOrgRepo', res);
        });
    }

//get user() {
//    var path = "/user";
//
//    this.request("GET", path, null, function (err, res) {
//        cb(err, res);
//    });
//}
}