module.exports = {

    url: 'https://digiclinic.id/',

    elements: {
        fillEmailLupaSandiNullemail: by.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[3]/form[1]/div[1]/input[1]")
    },

    performFillEmailLupaSandiNullemail: function () {
        // sleep(5000);
        var selector = page.fillEmailLupaSandiNullemail.elements.fillEmailLupaSandiNullemail;
        return driver.findElement(selector).sendKeys(" ");
    }
};