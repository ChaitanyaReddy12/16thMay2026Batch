Feature: Test Automation Practice form
  As a user
  I want to use the practice form
  So that I can test a Playwright Cucumber page object

  @practice
  Scenario: Fill the practice form
    Given I open the Test Automation Practice page
    When I fill the name "Quality Thought"
    And I fill the email "quality@thought.com"
    And I fill the phone "1234567890"
    And I fill the address "Hyderabad"
    And I fill the wikipedia search "Playwright"
    Then I should see the entered form values
