module.exports = {

    url: 'https://digiclinic.id/',

    elements: {
        fillEmailRegiss: by.xpath("//body/div[@id='myModal']/div[1]/div[1]/div[2]/div[1]/div[2]/form[1]/div[1]/div[2]/div[1]/input[1]")
    },

    performFillEmailRegiss: function () {
        // sleep(5000);
        var selector = page.fillEmailRegiss.elements.fillEmailRegiss;
        return driver.findElement(selector).sendKeys(shared.id.emailnew);
    }
};
