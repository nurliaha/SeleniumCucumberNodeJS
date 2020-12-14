module.exports = function () {
    this.Given(/^user browse regis page$/, function () {
        helpers.loadPage(shared.pages.regisLink)
    });

    this.Given(/^user click regis menu$/, function () {
        console.log("user click regis menu OK")
        driver.then(function (){
            return page.clickRegisMenu.performClickRegisMenu()
        })
    });

    this.Given(/^User click submenuRegis to regis$/, function () {
        console.log("User click submenuRegis to regis OK")
        driver.then(function (){
            return page.clickSubmenuRegis.performClickSubmenuRegis()
        })
    });

    this.Given(/^user fill fullname to regis$/, function () {
        console.log("user fill fullname to regis OK")
        driver.then(function (){
            return page.fillFullName.performFillFullName()
        })
    });

    this.Given(/^user fill email to regis$/, function () {
        driver.then(function (){
            return page.fillEmail.performFillEmail()
        })
    });

    this.Given(/^user fill phoneno to regis$/, function () {
        driver.then(function (){
            return page.fillPhoneno.performFillPhoneno()
        })
    });

    this.When(/^user fill clinicname to regis$/, function () {
        driver.then(function (){
            return page.fillClinicName.performFillClinicName()
        })
    });

    this.Then(/^user click regis button$/, function () {
        driver.then(function (){
            return page.clickRegisBtn.performClickRegisBtn()
        })
        
    });
}
