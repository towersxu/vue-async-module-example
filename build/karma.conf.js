module.exports = function (config) {
  config.set({
    browsers: ['PhantomJS'],
    frameworks: ['jasmine'],
    reporters: ['spec'],
    files: ['../test/unit/index.js'],
    preprocessors: {
      '../test/unit/index.js': ['webpack']
    },
    webpack: require('./webpack.base.config'),
    webpackMiddleware: {
      noInfo: true
    },
    singleRun: true
  })
}
