module.exports = function(config){
    config.set({

        basePath : '../../',

        files : [
            'step_11_tests/example/example.js'
        ],

        autoWatch : true,

        frameworks: ['jasmine'],

        browsers : ['Chrome'],

        plugins : [
            'karma-chrome-launcher',
            'karma-story-reporter',
            'karma-html-reporter',
            'karma-jasmine'
        ],

        reporters: ['story'],

        junitReporter : {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        }
    });
};
