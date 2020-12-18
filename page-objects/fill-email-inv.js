module.exports = {

    url: 'https://digiclinic.id/',

    elements: {
        fillEmailInv: by.xpath("//body/div[@id='myModal']/div[1]/div[1]/div[2]/div[1]/div[2]/form[1]/div[1]/div[2]/div[1]/input[1]")
    },

    performFillEmail: function () {
        // sleep(5000);
        var selector = page.fillEmailInv.elements.fillEmailInv;
        return driver.findElement(selector).sendKeys(shared.id.emailinv);
    }
};
