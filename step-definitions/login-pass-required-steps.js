module.exports = function () {
    this.Given(/^user browse on digiclinic\.id pages$/, function () {
        helpers.loadPage(shared.pages.digiLink)
    }); 

    this.Given(/^user click login menu on digiclinic\.id pages$/, function () {
        driver.manage().timeouts().implicitlyWait(3000);
        driver.then(function (){
            return page.clickLoginMenu.performClickLoginMenu()
        })
    });

    this.Given(/^user fill email field to login on digiclinic\.id pages$/, function () {
        driver.then(function (){
            return page.fillEmailLogin.performFillEmailLogin()
        })
    });

    this.Given(/^user fill password field to login on digiclinic\.id pages$/, function () {
        driver.then(function (){
            return page.fillPassRequired.performFillPassRequired()
        })
    });

    this.When(/^user click login button on digiclinic\.id pages$/, function () {
        driver.then(function (){
            return page.clickLoginBtn.performClickLoginBtn()
        })
    });

    this.Then(/^the user see message the password field is required$/, function () {
        driver.sleep(3000)
    });

}