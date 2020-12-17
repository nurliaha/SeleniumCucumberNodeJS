module.exports = {

    url: 'https://digiclinic.id/',

    elements: {
        fillPhoneno: by.xpath("//body/div[@id='myModal']/div[1]/div[1]/div[2]/div[1]/div[2]/form[1]/div[1]/div[3]/div[1]/input[1]")
    },

    performFillPhoneno: function () {
        // sleep(5000);
        var selector = page.fillPhoneno.elements.fillPhoneno;
        return driver.findElement(selector).sendKeys(shared.id.phoneNo);
    }
};
