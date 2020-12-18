module.exports = {

    url: 'https://digiclinic.id/',

    elements: {
        fillEmailLupas: by.xpath("//body/div[@id='myModal']/div[1]/div[1]/div[2]/div[1]/div[3]/form[1]/div[1]/input[1]")
    },

    performEmailLupas: function () {
        // sleep(5000);
        var selector = page.fillEmailLupas.elements.fillEmailLupas;
        return driver.findElement(selector).sendKeys(shared.id.email);
    }
};