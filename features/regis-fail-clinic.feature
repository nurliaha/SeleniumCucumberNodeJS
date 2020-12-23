# ./feature/regisfailed.feature
Feature: Regis
    As a user
    I want to be able to registration failed and clinic name file is required

    Scenario: Regis on digiclinic failed and clinic name file is required
        Given user browse digiclinic apps
        And user click regis menu to regis on digicilinic apps
        And user click submenu regis to regis on digicilinic apps
        And user fill fullname to regis on digicilinic apps
        And user fill email to regis on digicilinic apps
        And user fill phone number to regis on digicilinic apps 
        And user fill clinic name field to regis on digicilinic apps 
        When user click regis button to regis on digicilinic apps
        Then the user failed regis and the clinic field is required
