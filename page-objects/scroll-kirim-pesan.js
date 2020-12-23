module.exports = {

    url: 'https://digiclinic.id/',

    elements: {
        ScrollKirimPesan: by.xpath("//body/main[@id='main']/div[1]/section[1]/div[1]/div[3]/div[1]/div[3]/div[1]/div[1]/button[1]")
    },

    performScrollKirimPesan: function () {
        var selector = page.ScrollKirimPesan.elements.ScrollKirimPesan;
        return driver.findElement(selector).click(selector);
    }
};