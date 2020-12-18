# ./feature/loginfailed.feature
#TS_Login_03 (case password field kosong)
Feature: Login
    As a user
    I want to be able to login

    Scenario: Login on digiclinic and password field is required
        Given user browse on digiclinic.id pages
        And user click login menu on digiclinic.id pages
        And user fill email field to login on digiclinic.id pages
        And user fill password field to login on digiclinic.id pages
        When user click login button on digiclinic.id pages
        Then the user see message the password field is required 
