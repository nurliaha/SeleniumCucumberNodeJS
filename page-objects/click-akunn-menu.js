module.exports = {

    url: 'https://digiclinic.id/',

    elements: {
        clickAkunnMenu: by.xpath("/html[1]/body[1]/header[1]/div[1]/nav[1]/ul[1]/li[7]/a[1]")
    },

    performClickAkunnMenu: function () {
        // sleep(2000);
        var selector = page.clickAkunnMenu.elements.clickAkunnMenu;
        return driver.findElement(selector).click(selector);
    }
};
