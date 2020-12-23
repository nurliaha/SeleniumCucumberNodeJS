module.exports = function () {
    this.Given(/^user click produk layanan menu$/, function () {
      // helpers.scrollToElement()  
      driver.then(function (){
            return page.clickProdukLayananMenu.performClickProdukLayananMenu()
        })
      });
    
      this.Given(/^user scroll to kirim pesan$/, function () {
        driver.then(function (){
          // return page..performScrollKirimPesan()
        })
        });

    this.Given(/^user click kirim pesan btn$/, function () {
        return driver.wait(until.elementsLocated(by.xpath("/html[1]/body[1]/main[1]/div[1]/section[1]/div[1]/div[3]/div[1]/div[3]/div[1]/div[1]/button[1]")), 10000).then(function(){

            // return the promise of an element to the following then.
            return driver.findElements(by.xpath("/html[1]/body[1]/main[1]/div[1]/section[1]/div[1]/div[3]/div[1]/div[3]/div[1]/div[1]/button[1]"));
        })

      });

    this.Given(/^user fill message field with null$/, function () {
        driver.then(function (){
            return page.fillMessageField.performFillMessageField()
        })
      });
    
    this.When(/^user click kirim pesan button$/, function () {
        driver.then(function (){
            return page.clickKirimPesanBttn.performClickKirimPesanBttn()
        })
      });
    
    this.Then(/^sistem click message field$/, function () {
        driver.sleep(2000)
      });
}