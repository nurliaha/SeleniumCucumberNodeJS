module.exports = {

    url: 'https://digiclinic.id/',

    elements: {
        clickKirimPesanBttn: by.xpath("/html[1]/body[1]/div[7]/div[1]/div[3]/button[1]")
    },

    performClickKirimPesanBtn: function () {
        // sleep(2000);
        var selector = page.clickKirimPesanBttn.elements.clickKirimPesanBttn;
        return driver.findElement(selector).click(selector);
    }
};
