module.exports = {

    url: 'https://digiclinic.id/',

    elements: {
        fillEmailInvFormat: by.xpath("//input[@id='loginemail']")
    },

    performFillEmailInvFormat: function () {
        var selector = page.fillEmailInvFormat.elements.fillEmailInvFormat;
        return driver.findElement(selector).sendKeys(shared.id.emailinvformat);
        
    }
};
