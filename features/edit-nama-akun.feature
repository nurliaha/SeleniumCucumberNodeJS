# ./feature/edit-nama-akun.feature

Feature: Edit nama akun digiclinic

    As a user 
    I want be able to edit akun name 
    Scenario: edit name on digiclinic account
        Given user browse web digiclinic
        And user click login menu 
        And user fill email to login
        And user fill password to login
        And user click login button
        And user can login and edit account 
        And user click akun menu
        And user click edit akun menu
        And user fill nama lengkap field 
        And user click ubah sekarang button
        And user click x button 
        And user click akunn menu
        And user click keluar menu
        And user click login menu
        And user fill email to login
        And user fill password to login
        When user click login button
        Then user cannot see the menu

