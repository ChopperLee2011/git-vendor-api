//import GitVendor from "./GitVendor";
//
//export default class GitLab extends GitVendor {
//    constructor(token, vendorHost = "https://gitlab.com/api/v3") {
//        super('Bearer ' + token, vendorHost);
//
//    }
//}
//
//}
const GitVendor = require('./GitVendor');
var Gitlab = function () {

};
Gitlab.prototype = Object.create(GitVendor);