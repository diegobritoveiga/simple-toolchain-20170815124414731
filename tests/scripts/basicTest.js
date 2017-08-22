module.exports = {
  'step one' : function (browser) {
    browser
      .url('http://simple-toolchain-20170815124414731-test.mybluemix.net/page1-demo.html')
      .waitForElementVisible('body', 1000)
      .setValue('input[name=nome]', 'Joao')
      .click('input[value=Enviar]')
      .waitForElementPresent('h1', 60000)
      .getText("h1", function(result) {
    	this.assert.equal(typeof result, "object");
    	this.assert.equal(result.status, 0);
    	this.assert.equal(result.value, "Aguarde");
  	  })
      .pause(1000)
      .waitForElementPresent('#username', 60000)
      .getText("#username", function(result) {
    	this.assert.equal(typeof result, "object");
    	this.assert.equal(result.status, 0);
    	this.assert.equal(result.value, "Olá");
  	  })
      .end();
  }
};