module.exports = {

    url: 'https://digiclinic.id/',

    elements: {
        fillEmailBaru: by.xpath("//body/div[@id='myModal']/div[1]/div[1]/div[2]/div[1]/div[2]/form[1]/div[1]/div[2]/div[1]/input[1]")
    },

    performFillEmailBaru: function () {
        // sleep(5000);
        var selector = page.fillEmailBaru.elements.fillEmailBaru;
        return driver.findElement(selector).sendKeys(shared.id.emailbaru);
    }
};