module.exports = {

    url: 'https://digiclinic.id/',

    elements: {
        clickXBtn: by.xpath("//button[contains(text(),'×')]")
    },

    performClickXBtn: function () {
        var selector = page.clickXBtn.elements.clickXBtn;
        return driver.findElement(selector).click(selector);
    }
};