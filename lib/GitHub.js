import GitVendor from "./GitVendor";
export default
class GitHub extends GitVendor {
    constructor(token, vendorHost = "https://api.github.com") {
        super('token ' + token, vendorHost);
    }
}