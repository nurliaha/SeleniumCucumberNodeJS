module.exports = {

    url: 'https://digiclinic.id/',

    elements: {
        fillFullnameInvalid: by.xpath("//body/div[@id='myModal']/div[1]/div[1]/div[2]/div[1]/div[2]/form[1]/div[1]/div[1]/div[1]/input[1]")
    },

    performFillFullnameInvalid: function () {
        // sleep(5000);
        var selector = page.fillFullnameInvalid.elements.fillFullnameInvalid;
        return driver.findElement(selector).sendKeys(shared.id.fullnameInvalid);
    }
};
