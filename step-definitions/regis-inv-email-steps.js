module.exports = function () {
    this.Given(/^user browse digiclinic pages$/, function () {
        helpers.loadPage(shared.pages.regisLink)
      });

    this.Given(/^user click register menu$/, function () {
        driver.then(function (){
          return page.clickRegisMenu.performClickRegisMenu()
        })
    });

    this.Given(/^user click submenu regis to register$/, function () {
        driver.sleep(3000)
        driver.then(function (){
            return page.clickSubmenuRegis.performClickSubmenuRegis()
        })
    });

    this.Given(/^user fill fullname to register$/, function () {
        driver.then(function (){
          return page.fillFullName.performFillFullName()
        })
    });

    this.Given(/^user fill email already registered before to register$/, function () {
        driver.sleep(200).then(function (){
          return page.fillEmail.performFillEmail()
        })  
    });

    this.Given(/^user fill phone number to register$/, function () {
        driver.then(function (){
          return page.fillPhoneno.performFillPhoneno()
        })
    });

    this.Given(/^user fill clinicname to register$/, function () {
        driver.then(function (){
          return page.fillClinicName.performFillClinicName()
        })
    });

    this.When(/^user click register button$/, function () {
        driver.then(function (){
            return page.clickRegisBtn.performClickRegisBtn()
        })
    });

    this.Then(/^user failed reigistration and can view eror message “the email containts in used”$/, function () {
        driver.sleep(3000)
    });
}
