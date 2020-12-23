module.exports = function (){
    this.Given(/^user fill email field with null email$/, function () {
        driver.then(function (){
            return page.fillEmailLupaSandiNullemail.performFillEmailLupaSandiNullemail()
        })
      });
    
    this.Then(/^user can see notification email not found$/, function () {
        driver.sleep(3000)
      });
}