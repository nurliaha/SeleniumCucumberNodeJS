module.exports = function () {
    
    this.Given(/^user browse web digiclinic$/, function () {
        helpers.loadPage(shared.pages.digiLink)
    });

    this.Given(/^user click login menu$/, function () {
        driver.then(function (){
            return page.clickLoginMenu.performClickLoginMenu()
        })
    });
     
    this.Given(/^user fill email to login$/, function () {
        driver.sleep(1000);
        driver.then(function (){
            return page.fillEmailLogin.performFillEmailLogin()
        })
      });

    
    this.Given(/^user fill password to login$/, function () {
        driver.then(function (){
            return page.fillPassLogin.performFillPassLogin()
        })
    });
    
    this.When(/^user click login button$/, function () {
        driver.then(function (){
            return page.clickLoginBtn.performClickLoginBtn()
        })
    });

    this.Then(/^user can view welcome$/, function () {
        driver.sleep(3000)
      });
    
}