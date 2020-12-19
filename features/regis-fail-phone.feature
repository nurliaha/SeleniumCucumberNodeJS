# ./feature/regisfailed.feature
Feature: Regis
    As a user
    I want to be able Registration failed with error format in phone number

     Scenario: Registration failed with error format in phone number
        Given user browse digiclinicc site
        And user click regis menu on digiclinicc site
        And user click submenu regis  on digiclinic site
        And user fill fullname to regis on digiclinic site
        And user fill email to regis on digiclinic site
        And user fill phone number more maximum character to regis on digiclinic site
        And user fill clinic name field to regis digiclinic site
        When user click regis button on digiclinic site
        Then user fail and can see error format message
