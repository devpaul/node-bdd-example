Feature: Search
  As a user I want to be able to do a basic search
  on the website and validate that a list of results
  have been returned

Background:
  Given I am on the homepage

Scenario: Perform a search
  When I perform a search
  Then I see the search results page