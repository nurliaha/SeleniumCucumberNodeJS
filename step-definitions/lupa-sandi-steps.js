module.exports = function () {
    this.Given(/^user browse digiclinic page$/, function () {
        helpers.loadPage(shared.pages.digiLink)
    });   

    this.Given(/^user click lupa sandi menu$/, function () {
        driver.sleep(200)
        driver.then(function (){
            return page.clickLupaSandiMenu.perform()
        })
    }); 
    
    this.Given(/^user fill email to reset password$/, function () {
        // driver.sleep(200)
        driver.then(function (){
            return page.fillEmailLupas.performEmailLupas()
        })
    });

    this.When(/^user click lupa sandi button$/, function () {
        driver.then(function (){
            return page.clickLupasBtn.performLupasBtn()
        })
    });

    this.Then(/^user can view notification$/, function () {
        driver.sleep(3000)
    });
}