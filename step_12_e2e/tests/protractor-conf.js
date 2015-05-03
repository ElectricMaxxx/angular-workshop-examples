
exports.config = {
    allScriptsTimeout: 11000,

    specs: [
        'e2e/*Spec.js'
    ],

    capabilities: {
        'browserName': 'chrome'
    },

    chromeOnly: true,

    baseUrl: 'http://localhost:8081',

    framework: 'jasmine',

    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000,
        isVerbose: true,
        realtimeFailure: true
    }
};
