# ./feature/hubungi-kami.feature

Feature: hubungi kami on digiclinic

    As a user 
    I want be able to create message on hubungi kami
    Scenario: hubungi kami on digiclinic fail
        Given user browse digiclinic page
        And user click login menu 
        And user fill email to login
        And user fill password to login
        And user click login button
        And user click produk layanan menu
        And user scroll to kirim pesan
        And user click kirim pesan btn
        And user fill message field with null
        When user click kirim pesan button
        Then sistem click message field

