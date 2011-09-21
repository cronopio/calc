/**
 * @author Daniel Aristizabal
 * 
 */

var Calc = require('./lib/fetch').Fetch;

var test = new Calc({
  name: 'Test Calc',
  debug: true
});

test.start();
