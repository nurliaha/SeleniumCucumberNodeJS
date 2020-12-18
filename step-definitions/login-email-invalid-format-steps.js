module.exports = function () {
    this.Given(/^user browse on digiclinic page$/, function () {
        helpers.loadPage(shared.pages.digiLink)
    });
      
    this.Given(/^user click login menu on digiclinic pages$/, function () {
        // driver.manage().timeouts().implicitlyWait(3000);
        driver.then(function (){
            return page.clickLoginMenu.performClickLoginMenu()
        })
    });

    this.Given(/^user fill email field invalid format to login on digiclinic\.id pages$/, function () {
        driver.manage().timeouts().implicitlyWait(3000); 
        driver.then(function (){
            return page.fillEmailInvFormat.performFillEmailInvFormat()
        })
    });

    this.Given(/^user fill valid password field to login on digiclinic\.id pages$/, function () {
        driver.then(function (){
            return page.fillPassLogin.performFillPassLogin()
        })
    });

    this.When(/^user click login button on digiclinic pages$/, function () {
        driver.then(function (){
            return page.clickLoginBtn.performClickLoginBtn()
        })
    });

    this.Then(/^the user see message error format email field$/, function () {
        driver.sleep(3000)
    });
}