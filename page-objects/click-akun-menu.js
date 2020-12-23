module.exports = {

    url: 'https://digiclinic.id/',

    elements: {
        clickAkunMenu: by.xpath("/html[1]/body[1]/header[1]/div[1]/nav[1]/ul[1]/li[7]/a[1]")
    },

    performClickAkunMenu: function () {
        // sleep(2000);
        var selector = page.clickAkunMenu.elements.clickAkunMenu;
        return driver.findElement(selector).click(selector);
    }
};
