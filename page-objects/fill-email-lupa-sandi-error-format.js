module.exports = {

    url: 'https://digiclinic.id/',

    elements: {
        fillEmailLupaSandiErrorFormat: by.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[3]/form[1]/div[1]/input[1]")
    },

    performFillEmailLupaSandiErrorFormat: function () {
        // sleep(5000);
        var selector = page.fillEmailLupaSandiErrorFormat.elements.fillEmailLupaSandiErrorFormat;
        return driver.findElement(selector).sendKeys("dhnur.fitriana@gmail");
    }
};