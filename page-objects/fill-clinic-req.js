module.exports = {

    url: 'https://digiclinic.id/',

    elements: {
        fillClinicReq: by.xpath("//body/div[@id='myModal']/div[1]/div[1]/div[2]/div[1]/div[2]/form[1]/div[1]/div[4]/div[1]/input[1]")
    },

    performFillClinicReq: function () {
        var selector = page.fillClinicReq.elements.fillClinicReq;
        return driver.findElement(selector).sendKeys(shared.id.clinicNames);
    }
};