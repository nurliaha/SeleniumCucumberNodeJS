module.exports = {

    url: 'https://digiclinic.id/',

    elements: {
        clickEditAkunMenu: by.xpath("/html[1]/body[1]/header[1]/div[1]/nav[1]/ul[1]/li[7]/ul[1]/li[2]/a[1]")
    },

    performClickEditAkunMenu: function () {
        // sleep(2000);
        var selector = page.clickEditAkunMenu.elements.clickEditAkunMenu;
        return driver.findElement(selector).click(selector);
    }
};
