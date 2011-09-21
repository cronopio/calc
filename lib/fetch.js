var Hook = require('hook.io').Hook,
    util = require('util');
    
var Fetch = exports.Fetch = function(options){
  Hook.call(this, options);
  
  var self = this;
  
  self.on('hook::ready', function(){
    self.spawn([{
      name:'fetchForex-usd',
      type:'request',
    }], function(err){
      console.log('Ready el spawn');
    });
  });
};

util.inherits(Fetch, Hook);
