module.exports = {

    url: 'https://digiclinic.id/',

    elements: {
        fillPassLogin: by.xpath("//input[@id='loginpassword']")
    },

    performFillPassLogin: function () {
        var selector = page.fillPassLogin.elements.fillPassLogin;
        return driver.findElement(selector).sendKeys(shared.id.passLogin);
    }
};