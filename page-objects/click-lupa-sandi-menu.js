module.exports = {

    url: 'https://digiclinic.id/',

    elements: {
        clickLupaSandiMenu: by.xpath("//a[contains(text(),'Lupa Sandi')]")
    },

    perform: function () {
        var selector = page.clickLupaSandiMenu.elements.clickLupaSandiMenu;
        return driver.findElement(selector).click(selector);
    }
};