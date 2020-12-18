module.exports = {

    url: 'https://digiclinic.id/',

    elements: {
        loginWelcome: by.xpath("//strong[contains(text(),'Welcome dhina')]")
    },

    performLoginWelcome: function () {
        // sleep(5000);
        var selector = page.loginWelcome.elements.loginWelcome;
        return driver.findElement(selector);
    }
};