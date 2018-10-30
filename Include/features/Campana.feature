#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
@campana
Feature: compana
  Test the login functionality of the application

  @smokecompana
  Scenario: Test the campaign flow
    Given I navigate landing page
      When I select the La quiero button
      And I enter the following for delivery
      | connectmiles | email      |
      | 123456789    | abc@gmail.com |
     Then I should see delivery page
