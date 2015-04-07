const GitVendor = require('./GitVendor');
function Github(config) {
    var instance;
    console.info('config', config);
    this._apiUrl = config.API_URL;
    this._token = config.GITHUB_TOKEN;
    return {
        getInstance: function () {
            if (!instance) {
                instance = login();
            }
            return instance;
        }
    }
};

Github.prototype = Object.create(GitVendor);

Github.prototype.login = function () {
    return this.request("GET", "/user");
};

//user
Github.prototype.getUser = function () {
    let path = "/user";
    return this.request("GET", path).then(function (res) {
    });
};

Github.prototype.getOrg = function () {
    let path = "/user/orgs";
    return this.request("GET", path).then(function (res) {
    });
};
//repo
Github.prototype.getUserRepo = function () {
    let path = "/user/repos";
    return this.request("GET", path).then(function (res) {
    });
};

Github.prototype.getOrgRepo = function (orgName) {
    let path = `/orgs/${orgName}/repos`;
    return this.request("GET", path).then(function (res) {
    });
};

//hook
Github.prototype.getUserRepo = function (repoPath, hookid) {
    let path = `${repoPath}/hooks/${hookid}`;
    return this.request("GET", path).then(function (res) {
    });
};

//issue
Github.prototype.getIssue = function (repoPath) {
    let path = `${repoPath}/commits`;
    return this.request("GET", path).then(function (res) {
    });
};
Github.prototype.getLabel = function (owner, repo) {
    let path = `/repos/${owner}/${repo}/labels`;
    return this.request("GET", path).then(function (res) {
    });
};
Github.prototype.updateLabel = function (owner, repo, label) {
    let path = `/repos/${owner}/${repo}/labels/${label}`;
    return this.request("PATCH", path).then(function (res) {
    });
};

Github.prototype.createLabel = function (owner, repo) {
    let path = `/repos/${owner}/${repo}/labels`;
    return this.request("POST", path).then(function (res) {
    });
};


Github.prototype.getCommit = function (repoPath) {
    let path = `${repoPath}/commits`;
    return this.request("GET", path).then(function (res) {
    });
};

module.exports = Github;