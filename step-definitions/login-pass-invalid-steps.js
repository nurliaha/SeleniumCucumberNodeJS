module.exports = function () {
    this.Given(/^user browse digiclinic\.id$/, function () {
        helpers.loadPage(shared.pages.digiLink)
    });
      
    this.Given(/^user click login menu on digiclinic\.id$/, function () {
        driver.manage().timeouts().implicitlyWait(3000);
        driver.then(function (){
            return page.clickLoginMenu.performClickLoginMenu()
        })
    });

    this.Given(/^user fill email field to login on digiclinic\.id$/, function () {
        driver.then(function (){
            return page.fillEmailLogin.performFillEmailLogin()
        })
    });

    this.Given(/^user fill password field to login on digiclinic\.id$/, function () {
        driver.then(function (){
            return page.fillPassInv.performFillPassInv()
        }) 
    });

    this.When(/^user click login button on digiclinic\.id$/, function () {
        driver.then(function (){
            return page.clickLoginBtn.performClickLoginBtn()
        })
    });

    this.Then(/^the user can view wrong password message on digiclinic\.id$/, function () {
        driver.sleep(3000)
    });
}
