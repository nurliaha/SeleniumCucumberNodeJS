module.exports= function(){
    this.Given(/^user fill email field with error format email$/, function () {
        driver.then(function (){
            return page.fillEmailLupaSandiErrorFormat.performFillEmailLupaSandiErrorFormat()
        })
    });

    this.Then(/^user can see notification error format email$/, function () {
        driver.sleep(3000)
    });
}