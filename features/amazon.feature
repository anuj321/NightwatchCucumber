Feature: Amazon Echo Dot Price Validation
  Launch Amazon and search for Echo dot and validate its price

Scenario: Echo Dot price should be greater than 2200

  Given I open Amazon's search page
  Then the title is "Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in"
  And the global search bar exists
  Then enter product name as "Echo dot" and click on Global search button
  Then first product listed should have price as "2,449"