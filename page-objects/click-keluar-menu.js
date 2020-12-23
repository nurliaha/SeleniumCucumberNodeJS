module.exports = {

    url: 'https://digiclinic.id/',

    elements: {
        clickKeluarMenu: by.xpath("//nav[@class='main-nav float-right d-none d-lg-block']//ul//li[@class='drop-down']//ul//li//a[contains(text(),'Keluar')]")
    },

    performClickKeluarMenu: function () {
        // sleep(2000);
        var selector = page.clickKeluarMenu.elements.clickKeluarMenu;
        return driver.findElement(selector).click(selector);
    }
};
