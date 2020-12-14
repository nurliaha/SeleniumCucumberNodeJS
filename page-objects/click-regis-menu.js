module.exports = {

    url: 'https://digiclinic.id/',

    elements: {
        clickRegisMenu: by.xpath("//header/div[1]/nav[1]/ul[1]/li[6]/a[1]")
    },

    performClickRegisMenu: function () {
        // sleep(2000);
        var selector = page.clickRegisMenu.elements.clickRegisMenu;
        return driver.findElement(selector).click(selector);
    }
};
