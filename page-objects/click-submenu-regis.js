module.exports = {

    url: 'https://digiclinic.id/',

    elements: {
        clickSubmenuRegis: by.xpath("//body/div[@id='myModal']/div[1]/div[1]/div[2]/ul[1]/li[2]/a[1]")
    },

    performClickSubmenuRegis: function () {
        var selector = page.clickSubmenuRegis.elements.clickSubmenuRegis;
        return driver.findElement(selector).click(selector);
    }
};