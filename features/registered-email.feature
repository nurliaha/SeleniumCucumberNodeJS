# ./feature/regisfailed.feature
Feature: Regis
    As a user
    I want to be not able to regis with already email registered

    Scenario: Registration failed with already email registered on digiclinic before
        Given user browse digiclinic pages
        And user click register menu
        And user click submenu regis to register
        And user fill fullname to register
        And user fill email already registered before to register
        And user fill phone number to register
        And user fill clinicname to register
        When user click register button
        Then user failed reigistration and can view eror message “the email containts in used”
