# ./features/login.feature

Feature: Login
    As a user
    I want to be able to login

    Scenario: Login on the website
        Given user browse web digiclinic
        And user click login menu
        And user fill email to login
        And user fill password to login
        When user click login button
        Then user can view welcome
