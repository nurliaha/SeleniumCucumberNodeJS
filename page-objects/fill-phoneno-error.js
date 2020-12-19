
module.exports = {

    url: 'https://digiclinic.id/',

    elements: {
        fillPhonenoError: by.xpath("//body/div[@id='myModal']/div[1]/div[1]/div[2]/div[1]/div[2]/form[1]/div[1]/div[3]/div[1]/input[1]")
    },

    performFillPhonenoError: function () {
        var selector = page.fillPhonenoError.elements.fillPhonenoError;
        return driver.findElement(selector).sendKeys(shared.id.phoneNoInv);
    }
};
