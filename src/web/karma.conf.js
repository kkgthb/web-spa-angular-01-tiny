module.exports = function (config) {
    config.set({
        browsers: ['ChromeHeadless'],
        codeCoverage: true,
        coverageReporter: {
            dir: 'test-and-coverage-results/coverage',
            reporters: [
                {
                    type: 'cobertura',
                    subdir: '.',
                    file: 'coverage-results.xml',
                },
                {
                    type: 'json',
                    subdir: '.',
                    file: 'coverage-results.json',
                },
            ],
        },
        frameworks: ['jasmine', '@angular-devkit/build-angular'],
        junitReporter: {
            outputDir: 'test-and-coverage-results/test-results',
            outputFile: 'unit-test-results-junit.xml',
            useBrowserName: false,
        },
        //logLevel: config.LOG_DEBUG,
        plugins: [
            'karma-chrome-launcher',
            'karma-coverage',
            'karma-jasmine',
            'karma-jasmine-html-reporter',
            'karma-junit-reporter',
            '@angular-devkit/build-angular/plugins/karma',
        ],
        reporters: ['progress', 'coverage', 'junit'],
        singleRun: true,
        watch: false,
    });
};