module.exports = {

    url: 'https://digiclinic.id/',

    elements: {
        fillClinicName: by.xpath("//body/div[@id='myModal']/div[1]/div[1]/div[2]/div[1]/div[2]/form[1]/div[1]/div[4]/div[1]/input[1]")
    },

    performFillClinicName: function () {
        // sleep(5000);
        var selector = page.fillClinicName.elements.fillClinicName;
        return driver.findElement(selector).sendKeys("Klinik Pinter");
    }
};