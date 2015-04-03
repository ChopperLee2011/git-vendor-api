import GitVendor from "./GitVendor";

export default
class GitLab extends GitVendor {
    constructor(token, vendorHost = "https://gitlab.com/api/v3") {
        super('Bearer ' + token, vendorHost);

    }
    //request(method = "GET", path = "", data = "") {
    //    let token = this._token,
    //        agent = this.agent(),
    //        req = new XMLHttpRequest();
    //    return new Promise((resolve, reject) => {
    //        req.onreadystatechange = function () {
    //            if (req.readyState === 4) {
    //                if ([200, 304].indexOf(req.status) === -1) {
    //                    reject(req);
    //                } else {
    //                    resolve(req.responseText);
    //                }
    //            }
    //        };
    //
    //        req.open(method, this._apiUrl + path);
    //        req.dataType = "json";
    //        //req.setRequestHeader('Accept', 'application/vnd.github.v3+json');
    //        req.setRequestHeader('Accept', 'application/json');
    //        req.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    //        req.setRequestHeader('Authorization', token);
    //        req.send();
    //    });
}