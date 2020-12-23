module.exports = {

    url: 'https://digiclinic.id/',

    elements: {
        fillNamaLengkap: by.xpath("//input[@id='username']")
        //fillFullName: by.xpath("//body/div[@id='myModal']/div[1]/div[1]/div[2]/div[1]/div[2]/form[1]/div[1]/div[1]/div[1]/input[1]")
    },

    performFillNamaLengkap: function () {
        // sleep(5000);
        var selector = page.fillNamaLengkap.elements.fillNamaLengkap;
        return driver.findElement(selector).sendKeys("dhinaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaa aaa");
    }
};