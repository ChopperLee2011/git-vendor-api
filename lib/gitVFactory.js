const Github = require('./Github'),
    Gitlab = require('./Gitlab');

var gitVFactory = {
    create: function (name, ops) {
        const ops = ops || {};
        switch (name) {
            case 'github':
                return new Github(ops);
            case 'gitlab':
                return new Gitlab(ops);
            default:
                return null;
        }
    }
};

module.expoorts = gitVFactory;