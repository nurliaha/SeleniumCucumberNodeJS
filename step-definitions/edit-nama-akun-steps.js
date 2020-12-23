module.exports = function () {
    
    this.Given(/^user can login and edit account$/, function () {
        driver.sleep(2000)
      });
    
    this.Given(/^user click akun menu$/, function () {
        driver.sleep(3000);
        driver.then(function (){
            return page.clickAkunMenu.performClickAkunMenu()
        })
      });
    
    this.Given(/^user click edit akun menu$/, function () {
        //driver.sleep(3000);
        driver.then(function (){
            return page.clickEditAkunMenu.performClickEditAkunMenu()
        })
      });
    
    this.Given(/^user fill nama lengkap field$/, function () {
        driver.sleep(3000);
        driver.then(function (){
            return page.fillNamaLengkap.performFillNamaLengkap()
        })
      });
    
    this.Given(/^user click ubah sekarang button$/, function () {
        //driver.sleep(3000);
        driver.then(function (){
            return page.clickUbahSekarangBtn.performClickUbahSekarangBtn()
        })
      });

    this.Given(/^user click x button$/, function () {
        //driver.sleep(3000);
        driver.then(function (){
            return page.clickXBtn.performClickXBtn()
        })
      });
    
    this.Given(/^user click akunn menu$/, function () {
        driver.sleep(3000);
        driver.then(function (){
            return page.clickAkunnMenu.performClickAkunnMenu()
        })
      });

    this.Given(/^user click keluar menu$/, function () {
        driver.manage().timeouts().implicitlyWait(1000);
          driver.then(function (){
            return page.clickKeluarMenu.performClickKeluarMenu()
        })
      });

    this.Then(/^user cannot see the menu$/, function () {
        driver.sleep(3000)
    });
}