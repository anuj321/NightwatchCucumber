const { client } = require('nightwatch-api');
const { Given, Then, When } = require('cucumber');

Given(/^I open Amazon's search page$/, () => {
  return client.url('http://amazon.in').waitForElementVisible('body', 1000);
});

Then(/^the title is "([^"]*)"$/, title => {
  return client.assert.title(title);
});

Then(/^the global search bar exists$/, () => {
  return client.assert.visible('input[id="twotabsearchtextbox"]');
});

Then(/^enter product name as "([^"]*)" and click on Global search button$/, productname => {
    client.setValue('input[id="twotabsearchtextbox"]', productname).click('input[id="nav-search-submit-button"]');
});

Then(/^first product listed should have price as "([^"]*)"$/, price => {   
    return assert.containsText('div.s-result-item:nth-child(2) > div:nth-child(1) > span:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > a:nth-child(1) > span:nth-child(1) > span:nth-child(2) > span:nth-child(2)',price);
});
