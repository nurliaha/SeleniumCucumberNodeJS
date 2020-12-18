# ./features/lupa-sandi.feature

Feature: Lupa Sandi
    As a user 
    I want to be able to reset password
 Scenario: reset password on the website
     Given user browse digiclinic page
     And user click login menu
     And user click lupa sandi menu
     And user fill email to reset password
     When user click lupa sandi button
     Then user can view notification