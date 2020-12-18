module.exports = {

    url: 'https://digiclinic.id/',

    elements: {
        fillPassRequired: by.xpath("//input[@id='loginpassword']")
    },

    performFillPassRequired: function () {
        var selector = page.fillPassRequired.elements.fillPassRequired;
        return driver.findElement(selector).sendKeys(shared.id.passreq);
    }
};