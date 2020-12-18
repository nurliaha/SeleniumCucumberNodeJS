module.exports = {

    url: 'https://digiclinic.id/',

    elements: {
        clickLoginMenu: by.xpath("//header/div[1]/nav[1]/ul[1]/li[5]/a[1]")
    },

    performClickLoginMenu: function () {      
        var selector = page.clickLoginMenu.elements.clickLoginMenu;
        return driver.findElement(selector).click(selector);
    }
};
