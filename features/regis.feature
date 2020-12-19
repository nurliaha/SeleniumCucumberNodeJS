# ./features/regis.feature
Feature: Regis
    As a user
    I want to be able to regis

    Scenario: Regis on digiclinic user
        Given user browse regis page
        And user click regis menu
        And User click submenuRegis to regis
        And user fill fullname to regis
        And user fill email to regis
        And user fill phoneno to regis
        When user fill clinicname to regis
        Then user click regis button
