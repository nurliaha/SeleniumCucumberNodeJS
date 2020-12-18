module.exports = {

    url: 'https://digiclinic.id/',

    elements: {
        clickLupasBtn: by.xpath("//button[contains(text(),'Lupa Sandi')]")
    },

    performLupasBtn: function () {
        var selector = page.clickLupasBtn.elements.clickLupasBtn;
        return driver.findElement(selector).click(selector);
    }
};