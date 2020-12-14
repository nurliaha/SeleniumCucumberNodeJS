module.exports = {

    url: 'https://digiclinic.id/',

    elements: {
        fillEmail: by.xpath("//body/div[@id='myModal']/div[1]/div[1]/div[2]/div[1]/div[2]/form[1]/div[1]/div[2]/div[1]/input[1]")
    },

    performFillEmail: function () {
        // sleep(5000);
        var selector = page.fillEmail.elements.fillEmail;
        return driver.findElement(selector).sendKeys("DianaPrincess@gmail.com");
    }
};
