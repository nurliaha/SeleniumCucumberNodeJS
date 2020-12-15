# ./features/login.feature

Feature: Login
    As a user
    I want to be able to login

    Scenario: Login on the website
        Given user browse login page
        And user click login menu
        # And User click submenulogin to login
        And user fill email to login
        When user fill password to login
        Then user click login button
