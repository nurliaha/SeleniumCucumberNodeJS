module.exports = function () {
    this.Given(/^user browse digiclinic site pages$/, function () {
        helpers.loadPage(shared.pages.regisLink)
    });
    
    this.Given(/^user click regis menu on digiclinic site pages$/, function () {
        driver.then(function (){
            return page.clickRegisMenu.performClickRegisMenu()
        })
    });

    this.Given(/^click regis menu on digiclinic site pages$/, function () {
        driver.manage().timeouts().implicitlyWait(15000);
        driver.then(function (){
            return page.clickSubmenuRegis.performClickSubmenuRegis()
        })
    });

    this.Given(/^fill fullname to regis on digiclinic site pages$/, function () {
        driver.manage().timeouts().implicitlyWait(1000);
        driver.then(function (){
            return page.fillFullnameInvalid.performFillFullnameInvalid()
        })
    });

    this.Given(/^fill email to regis on digiclinic site pages$/, function () {
        driver.then(function (){
            return page.fillEmailBaru.performFillEmailBaru()
        })
    });

    this.Given(/^fill phone number to regis on digiclinic site pages$/, function () {
        driver.then(function (){
            return page.fillPhoneno.performFillPhoneno()
        })
    });

    this.Given(/^user fill clinicname to regis on digiclinic site pages$/, function () {
        driver.then(function (){
            return page.fillClinicName.performFillClinicName()
        })
    });

    this.When(/^user click regis button on digiclinic site pages$/, function (callback) {
        driver.manage().timeouts().implicitlyWait(1000);
        driver.then(function (){
            return page.clickRegisBtn.performClickRegisBtn()
        })
    });

    this.Then(/^user fail to activated account and can see name too long message$/, function () {
        driver.sleep(3000)
    });
}