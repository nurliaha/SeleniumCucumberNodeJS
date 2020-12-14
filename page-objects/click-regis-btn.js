module.exports = {

    url: 'https://digiclinic.id/',

    elements: {
        clickRegisBtn: by.xpath("//button[contains(text(),'Daftar')]")
    },

    performClickRegisBtn: function () {
        var selector = page.clickRegisBtn.elements.clickRegisBtn;
        return driver.findElement(selector).click(selector);
    }
};