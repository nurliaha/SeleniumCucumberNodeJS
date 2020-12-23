# ./feature/lupa-sandi-nullemail.feature

Feature: Reset passowrd nullemail

    As a user 
    I want be able to reset passowrd
    Scenario: Reset password fail dan nullemail email field
        Given user browse digiclinic page
        And user click login menu 
        And user click lupa sandi menu
        And user fill email field with null email
        When user click lupa sandi button
        Then user can see notification email not found