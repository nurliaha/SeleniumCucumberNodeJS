# ./feature/lupa-sandi-errorformat.feature

Feature: Reset passowrd error format

    As a user 
    I want be able to reset passowrd
    Scenario: Reset password fail dan error format email field
        Given user browse digiclinic page
        And user click login menu 
        And user click lupa sandi menu
        And user fill email field with error format email
        When user click lupa sandi button
        Then user can see notification error format email