module.exports = {

    url: 'https://digiclinic.id/',

    elements: {
        fillPassInv: by.xpath("//input[@id='loginpassword']")
    },

    performFillPassInv: function () {
        var selector = page.fillPassInv.elements.fillPassInv;
        return driver.findElement(selector).sendKeys(shared.id.passinv);
    }
};
