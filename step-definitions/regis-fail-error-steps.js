module.exports = function () {
    this.Given(/^user browse digiclinicc site$/, function () {
        helpers.loadPage(shared.pages.regisLink) 
    });
    
    this.Given(/^user click regis menu on digiclinicc site$/, function () {
        driver.sleep(3000)
        driver.then(function (){
            return page.clickRegisMenu.performClickRegisMenu()
        })
    });

    this.Given(/^user click submenu regis  on digiclinic site$/, function () {
        driver.sleep(3000)
        driver.then(function (){
            return page.clickSubmenuRegis.performClickSubmenuRegis()
        })
    });
    
    this.Given(/^user fill fullname to regis on digiclinic site$/, function () {
        driver.then(function (){
            return page.fillFullName.performFillFullName()
        })
    });

    this.Given(/^user fill email to regis on digiclinic site$/, function () {
        driver.sleep(200).then(function (){
            return page.fillEmailRegiss.performFillEmailRegiss()
          })  
    });

    this.Given(/^user fill phone number more maximum character to regis on digiclinic site$/, function () {
        driver.then(function (){
            return page.fillPhonenoError.performFillPhonenoError()
          })
    });

    this.Given(/^user fill clinic name field to regis digiclinic site$/, function () {
        driver.then(function (){
            return page.fillClinicName.performFillClinicName()
        })
    });

    this.When(/^user click regis button on digiclinic site$/, function () {
        driver.then(function (){
            return page.clickRegisBtn.performClickRegisBtn()
        })
    });

    this.Then(/^user fail and can see error format message$/, function () {
        driver.sleep(3000)
    });  
}