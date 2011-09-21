var Hook = require('hook.io').Hook,
    qs   = require('querystring'),
    util = require('util');
    
var Fetch = exports.Fetch = function(options){
  Hook.call(this, options);
  
  var self = this;
  
  self.hooks = [{
    name:'fetchForex-usd',
    type:'request',
    debug: true
  }];
  
  self.on('fetchForex-usd::hook::ready', function(){
    self.emit('usd::http::request', {
      method: 'POST',
      url: 'http://alpari-forex.com/es/currency_converter/get_currency/',
      body:qs.stringify({currency1:'USD',currency2:'COP',line:1,amount:1}),
      headers:{
        "content-type": "application/x-www-form-urlencoded"
      }
    }, function(err, data){
      console.log('Error', err);
      console.log('Datos', data);
    });
    
    self.on('fetchForex-usd::usd::http::request::result', function(res){
      console.log('El uno',res);
    });
    
    // Just for testing
    self.on('usd::http::request::result', function(res){
      console.log('El otro',res);
    });
  });
};

util.inherits(Fetch, Hook);
