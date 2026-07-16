Feature: Amazon login page
  As a user
  I want to login to Amazon
  So that I can access my account

  @amazon
  Scenario: Open Amazon sign-in page
    Given I open Amazon home page
    When I click on the Sign in button
    Then I should see the Amazon sign-in page

  @amazon
  Scenario: Continue login with email
    Given I open Amazon home page
    When I click on the Sign in button
    And I enter the email "test.user@example.com"
    And I click Continue
    Then I should see the password field
