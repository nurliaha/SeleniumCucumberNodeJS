module.exports = {

    url: 'https://digiclinic.id/',

    elements: {
        fillFullName: by.xpath("//body/div[@id='myModal']/div[1]/div[1]/div[2]/div[1]/div[2]/form[1]/div[1]/div[1]/div[1]/input[1]")
    },

    performFillFullName: function () {
        // sleep(5000);
        var selector = page.fillFullName.elements.fillFullName;
        return driver.findElement(selector).sendKeys("Diana Princess");
    }
};
