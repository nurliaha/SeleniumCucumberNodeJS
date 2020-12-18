# ./feature/loginfailed.feature
# TS_Login_004 invalid email format
Feature: Login
    As a user
    I want to be able to login

    Scenario: Login fail and error format email field
        Given user browse on digiclinic page
        And user click login menu on digiclinic pages
        And user fill email field invalid format to login on digiclinic.id pages
        And user fill valid password field to login on digiclinic.id pages
        When user click login button on digiclinic pages
        Then the user see message error format email field
