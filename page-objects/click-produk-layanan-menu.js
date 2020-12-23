module.exports = {

    url: 'https://digiclinic.id/',

    elements: {
        clickProdukLayananMenu: by.xpath("/html[1]/body[1]/header[1]/div[1]/nav[1]/ul[1]/li[2]/a[1]")
    },

    performClickProdukLayananMenu: function () {
        // sleep(2000);
        var selector = page.clickProdukLayananMenu.elements.clickProdukLayananMenu;
        return driver.findElement(selector).click(selector);
    }
};
