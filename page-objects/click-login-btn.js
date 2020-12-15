module.exports = {

    url: 'https://digiclinic.id/',

    elements: {
        clickLoginBtn: by.xpath("//button[contains(text(),'Login')]")
    },

    performClickLoginBtn: function () {
        var selector = page.clickLoginBtn.elements.clickLoginBtn;
        return driver.findElement(selector).click(selector);
    }
};