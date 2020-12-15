module.exports = function () {
    
    this.Given(/^user browse login page$/, function () {
        helpers.loadPage(shared.pages.loginLink)
    });

    this.Given(/^user click login menu$/, function () {
        driver.then(function (){
            return page.clickLoginMenu.performClickLoginMenu()
        })
    });
     
    this.Given(/^user fill email to login$/, function () {
        driver.sleep(100);
        driver.then(function (){
            return page.fillEmailLogin.performFillEmailLogin()
        })
      });

    
    this.When(/^user fill password to login$/, function () {
        driver.then(function (){
            return page.fillPassLogin.performFillPassLogin()
        })
    });
    
    this.Then(/^user click login button$/, function () {
        driver.then(function (){
            return page.clickLoginBtn.performClickLoginBtn()
        })
    });


    
}