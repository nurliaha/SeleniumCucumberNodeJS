# ./features/regis.feature

Feature: Regis
    As a user
    I want to be able to regis

    Scenario: Regis on digiclinic and error format
     	Given user browse digiclinic site pages
 	    And user click regis menu on digiclinic site pages
        And click regis menu on digiclinic site pages
        And fill fullname to regis on digiclinic site pages
        And fill email to regis on digiclinic site pages
        And fill phone number to regis on digiclinic site pages
  	    And user fill clinicname to regis on digiclinic site pages
        When user click regis button on digiclinic site pages
        Then user fail to activated account and can see name too long message

