module.exports = {

    url: 'https://digiclinic.id/',

    elements: {
        fillMessageField: by.xpath("/html[1]/body[1]/div[7]/div[1]/div[2]/input[1]")
    },

    performFillMessageField: function () {
        // sleep(5000);
        var selector = page.fillMessageField.elements.fillMessageField;
        return driver.findElement(selector).sendKeys("");
    }
};