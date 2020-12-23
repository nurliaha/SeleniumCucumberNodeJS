module.exports = {

    url: 'https://digiclinic.id/',

    elements: {
        clickUbahSekarangBtn: by.xpath("//button[contains(text(),'Ubah Sekarang')]")
    },

    performClickUbahSekarangBtn: function () {
        var selector = page.clickUbahSekarangBtn.elements.clickUbahSekarangBtn;
        return driver.findElement(selector).click(selector);
    }
};