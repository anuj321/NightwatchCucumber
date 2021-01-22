const chromedriver = require('chromedriver');

module.exports = {
  test_settings: {
    default: {
      screenshots: {
        enabled: true,
        path: 'screenshots'
      },
      webdriver: {
        start_process: true,
        server_path: chromedriver.path,
        port: 4444,
        cli_args: ['--port=4444']
      },
      desiredCapabilities: {
        browserName: 'chrome'
      },
      end_session_on_fail: false
    }
  }
};