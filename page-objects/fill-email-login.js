module.exports = {

    url: 'https://digiclinic.id/',

    elements: {
        fillEmailLogin: by.xpath("//input[@id='loginemail']")
    },

    performFillEmailLogin: function () {
        // sleep(5000);
        var selector = page.fillEmailLogin.elements.fillEmailLogin;
        return driver.findElement(selector).sendKeys(shared.id.emailLogin);
    }
};