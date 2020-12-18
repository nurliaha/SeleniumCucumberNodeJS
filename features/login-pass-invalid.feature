# ./feature/loginfailed.feature
# TS_Login_02 (case password field salah)
Feature: Login
    As a user
    I want to be able to login

    Scenario: Login on digiclinic.id page and wrong password
        Given user browse digiclinic.id 
        And user click login menu on digiclinic.id 
        And user fill email field to login on digiclinic.id 
        And user fill password field to login on digiclinic.id 
        When user click login button on digiclinic.id 
        Then the user can view wrong password message on digiclinic.id
