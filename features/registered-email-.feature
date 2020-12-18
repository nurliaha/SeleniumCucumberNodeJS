# ./feature/regisfailed.feature
Feature: Regis
    As a user
    I want to be able to regis

    Scenario: Regis fail and email is registered on digiclinic
        Given user browse digiclinic pages
        And user click register menu
        And user click submenu regis to register
        And user fill fullname to register
        And user fill email consist to register
        And user fill phone number to register
        And user fill clinicname to register
        When user click register button
        Then user fail and email is registered
