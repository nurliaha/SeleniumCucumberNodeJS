module.exports = {

    url: 'https://digiclinic.id/',

    elements: {
        clickLoginMenu: by.xpath("//*[@id='header']/div/nav/ul/li[5]/a")
    },

    performClickLoginMenu: function () {
        var selector = page.clickLoginMenu.elements.clickLoginMenu;
        return driver.findElement(selector).click(selector);
    }
};