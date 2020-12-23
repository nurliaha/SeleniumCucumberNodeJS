module.exports = function () {
    this.Given(/^user browse digiclinic apps$/, function () {
        helpers.loadPage(shared.pages.regisLink)
    }); 

    this.Given(/^user click regis menu to regis on digicilinic apps$/, function () {
        driver.sleep(3000)
        driver.then(function (){
            return page.clickRegisMenu.performClickRegisMenu()
        })
    });
    
    this.Given(/^user click submenu regis to regis on digicilinic apps$/, function () {
        driver.sleep(3000)
        driver.then(function (){
            return page.clickSubmenuRegis.performClickSubmenuRegis()
        })
    });

    this.Given(/^user fill fullname to regis on digicilinic apps$/, function () {
        driver.then(function (){
            return page.fillFullName.performFillFullName()
        })
    });

    this.Given(/^user fill email to regis on digicilinic apps$/, function () {
        driver.sleep(200).then(function (){
            return page.fillEmailRegiss.performFillEmailRegiss()
        })
    }); 

    this.Given(/^user fill phone number to regis on digicilinic apps$/, function () {
        driver.then(function (){
            return page.fillPhoneno.performFillPhoneno()
        })
    });
    
    this.Given(/^user fill clinic name field to regis on digicilinic apps$/, function () {
        driver.sleep(1000).then(function (){
            return page.fillClinicReq.performFillClinicReq()
        })
    });
      
    this.When(/^user click regis button to regis on digicilinic apps$/, function () {
        driver.then(function (){
            return page.clickRegisBtn.performClickRegisBtn()
        })
    });

    this.Then(/^the user failed regis and the clinic field is required$/, function () {
        driver.sleep(2000)
    });
}